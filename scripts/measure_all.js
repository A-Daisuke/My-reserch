const fs = require('fs');
const path = require('path');
const escomplex = require('typhonjs-escomplex');
const XLSX = require('xlsx');

// ==========================================
// 設定項目
// ==========================================
// 測定対象のフォルダパス
const TARGET_DIR = '../Dataset'; 
// パフォーマンスデータ（JSON）のパス
const PERF_JSON_PATH = '../microbenchmark/mb_speed_diff_sort.json';
// 出力するExcelファイル名
const OUTPUT_XLSX = 'metrics_report.xlsx';
// ==========================================

/**
 * 指定したディレクトリ内の .js ファイルを再帰的に取得する
 */
function getJsFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) {
    console.error(`Directory not found: ${dir}`);
    return fileList;
  }
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      if (file !== 'node_modules' && file !== 'dist') {
        getJsFiles(filePath, fileList);
      }
    } else if (filePath.endsWith('.js')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

/**
 * パフォーマンスデータを読み込み、IDをキーとしたマップを返す
 */
function loadPerformanceMap(jsonPath) {
  const absolutePath = path.resolve(__dirname, jsonPath);
  if (!fs.existsSync(absolutePath)) {
    console.warn(`Performance JSON not found: ${absolutePath}`);
    return new Map();
  }
  console.log(`Loading performance data: ${absolutePath}`);
  const data = JSON.parse(fs.readFileSync(absolutePath, 'utf-8'));
  const perfMap = new Map();
  data.forEach(item => {
    perfMap.set(item.id.toString(), item['slow-fast_mediTime']);
  });
  return perfMap;
}

/**
 * ファイル名からIDを抽出する (例: pair_123_fast.js -> 123)
 */
function extractIdFromPath(filePath) {
  const fileName = path.basename(filePath);
  const match = fileName.match(/pair_(\d+)_(fast|slow)\.js/);
  return match ? match[1] : null;
}

/**
 * メイン処理
 */
function generateReport() {
  const absoluteTargetDir = path.resolve(__dirname, TARGET_DIR);
  console.log(`Scanning directory: ${absoluteTargetDir}`);
  
  const jsFiles = getJsFiles(absoluteTargetDir);
  const perfMap = loadPerformanceMap(PERF_JSON_PATH);
  
  if (jsFiles.length === 0) {
    console.log('No JavaScript files found.');
    return;
  }

  // データ格納用
  const allDataRows = [];
  const idGroupedData = {};
  let successCount = 0;

  jsFiles.forEach(filePath => {
    const relativePath = path.relative(process.cwd(), filePath);
    try {
      const code = fs.readFileSync(filePath, 'utf-8');
      const result = escomplex.analyzeModule(code);
      
      const cc = result.aggregate.cyclomatic;
      const hv = result.aggregate.halstead.volume;
      const mi = result.maintainability;

      const id = extractIdFromPath(filePath);
      const fileName = path.basename(filePath);
      const type = fileName.includes('_fast') ? 'fast' : 'slow';
      const perfValue = id && perfMap.has(id) ? perfMap.get(id) : null;

      // 個別データ追加
      allDataRows.push({
        'File Path': relativePath,
        'ID': id ? parseInt(id) : 'N/A',
        'Type': type,
        'Cyclomatic Complexity': cc,
        'Halstead Volume': parseFloat(hv.toFixed(2)),
        'Maintainability Index': parseFloat(mi.toFixed(2)),
        'Slow-Fast MediTime': perfValue !== null ? parseFloat(perfValue.toFixed(4)) : 'N/A'
      });

      // 差分計算用の集約
      if (id) {
        if (!idGroupedData[id]) idGroupedData[id] = {};
        idGroupedData[id][type] = { cc, hv, mi };
      }

      successCount++;
      
    } catch (error) {
      console.error(`Error analyzing ${relativePath}: ${error.message}`);
      allDataRows.push({
        'File Path': relativePath,
        'ID': 'N/A',
        'Type': 'N/A',
        'Cyclomatic Complexity': 'Error',
        'Halstead Volume': 'Error',
        'Maintainability Index': 'Error',
        'Slow-Fast MediTime': 'Error'
      });
    }
  });

  // 差分データの作成
  const diffDataRows = [];
  const sortedIds = Object.keys(idGroupedData).sort((a, b) => parseInt(a) - parseInt(b));

  sortedIds.forEach(id => {
    const data = idGroupedData[id];
    if (data.fast && data.slow) {
      const ccDiff = data.slow.cc - data.fast.cc;
      const hvDiff = data.slow.hv - data.fast.hv;
      const miDiff = data.slow.mi - data.fast.mi;
      const perfValue = perfMap.get(id);

      diffDataRows.push({
        'ID': parseInt(id),
        'CC Diff (slow-fast)': ccDiff,
        'HV Diff (slow-fast)': parseFloat(hvDiff.toFixed(2)),
        'MI Diff (slow-fast)': parseFloat(miDiff.toFixed(2)),
        'Slow-Fast MediTime': perfValue !== null && perfValue !== undefined ? parseFloat(perfValue.toFixed(4)) : 'N/A'
      });
    }
  });

  // Excelワークブックの作成
  const wb = XLSX.utils.book_new();

  // シート1: 個別データ
  const wsAll = XLSX.utils.json_to_sheet(allDataRows);
  XLSX.utils.book_append_sheet(wb, wsAll, 'All Metrics');

  // シート2: 差分データ
  const wsDiff = XLSX.utils.json_to_sheet(diffDataRows);
  XLSX.utils.book_append_sheet(wb, wsDiff, 'Metrics Diff');

  // ファイル書き出し
  XLSX.writeFile(wb, OUTPUT_XLSX);

  console.log('\n=========================================');
  console.log(`Excel Report generated: ${OUTPUT_XLSX}`);
  console.log(` - Sheet 1: All Metrics (${allDataRows.length} rows)`);
  console.log(` - Sheet 2: Metrics Diff (${diffDataRows.length} rows)`);
  console.log(`Successfully analyzed: ${successCount} / ${jsFiles.length} files`);
  console.log('=========================================');
}

generateReport();
