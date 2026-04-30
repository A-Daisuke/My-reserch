const fs = require('fs');
const path = require('path');
const escomplex = require('typhonjs-escomplex');

// ==========================================
// 設定項目
// ==========================================
// 測定対象のフォルダパス
const TARGET_DIR = '../Dataset'; 
// パフォーマンスデータ（JSON）のパス
const PERF_JSON_PATH = '../microbenchmark/mb_speed_diff_sort.json';
// 出力するCSVファイル名（個別の結果）
const OUTPUT_CSV_ALL = 'all_metrics_report.csv';
// 出力するCSVファイル名（slow - fast の差分）
const OUTPUT_CSV_DIFF = 'metrics_diff_report.csv';
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

  // IDごとにデータを集約するためのオブジェクト
  // { "id": { "fast": { metrics }, "slow": { metrics } } }
  const idGroupedData = {};

  // CSV（個別）のヘッダー
  let csvAllContent = 'File Path,ID,Type,Cyclomatic Complexity,Halstead Volume,Maintainability Index,Slow-Fast MediTime\n';
  let successCount = 0;

  jsFiles.forEach(filePath => {
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

      // 個別CSV用の行追加
      const relativePath = path.relative(process.cwd(), filePath);
      const perfStr = perfValue !== null ? perfValue.toFixed(4) : 'N/A';
      csvAllContent += `"${relativePath}",${id || 'N/A'},${type},${cc},${hv.toFixed(2)},${mi.toFixed(2)},${perfStr}\n`;

      // 差分計算用の集約
      if (id) {
        if (!idGroupedData[id]) idGroupedData[id] = {};
        idGroupedData[id][type] = { cc, hv, mi };
      }

      successCount++;
      
    } catch (error) {
      const relativePath = path.relative(process.cwd(), filePath);
      console.error(`Error analyzing ${relativePath}: ${error.message}`);
      csvAllContent += `"${relativePath}",N/A,N/A,Error,Error,Error,Error\n`;
    }
  });

  // 1. 個別レポート保存
  fs.writeFileSync(OUTPUT_CSV_ALL, csvAllContent, 'utf-8');

  // 2. 差分レポート作成
  let csvDiffContent = 'ID,CC Diff (slow-fast),HV Diff (slow-fast),MI Diff (slow-fast),Slow-Fast MediTime\n';
  
  // IDを数値順にソートして出力
  const sortedIds = Object.keys(idGroupedData).sort((a, b) => parseInt(a) - parseInt(b));

  sortedIds.forEach(id => {
    const data = idGroupedData[id];
    if (data.fast && data.slow) {
      const ccDiff = data.slow.cc - data.fast.cc;
      const hvDiff = data.slow.hv - data.fast.hv;
      const miDiff = data.slow.mi - data.fast.mi;
      const perfValue = perfMap.get(id);
      const perfStr = perfValue !== null && perfValue !== undefined ? perfValue.toFixed(4) : 'N/A';

      csvDiffContent += `${id},${ccDiff},${hvDiff.toFixed(2)},${miDiff.toFixed(2)},${perfStr}\n`;
    }
  });

  fs.writeFileSync(OUTPUT_CSV_DIFF, csvDiffContent, 'utf-8');

  console.log('\n=========================================');
  console.log(`Individual Report: ${OUTPUT_CSV_ALL}`);
  console.log(`Difference Report: ${OUTPUT_CSV_DIFF}`);
  console.log(`Successfully analyzed: ${successCount} / ${jsFiles.length} files`);
  console.log('=========================================');
}

generateReport();
