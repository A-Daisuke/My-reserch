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
// 出力するCSVファイル名
const OUTPUT_CSV = 'all_metrics_report.csv';
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

  // CSVのヘッダー行
  let csvContent = 'File Path,ID,Type,Cyclomatic Complexity,Halstead Volume,Maintainability Index,Slow-Fast MediTime\n';
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
      const perfValue = id && perfMap.has(id) ? perfMap.get(id).toFixed(4) : 'N/A';

      const relativePath = path.relative(process.cwd(), filePath);

      csvContent += `"${relativePath}",${id || 'N/A'},${type},${cc},${hv.toFixed(2)},${mi.toFixed(2)},${perfValue}\n`;
      successCount++;
      
    } catch (error) {
      const relativePath = path.relative(process.cwd(), filePath);
      console.error(`Error analyzing ${relativePath}: ${error.message}`);
      csvContent += `"${relativePath}",N/A,N/A,Error,Error,Error,Error\n`;
    }
  });

  fs.writeFileSync(OUTPUT_CSV, csvContent, 'utf-8');
  console.log('\n=========================================');
  console.log(`Report generated: ${OUTPUT_CSV}`);
  console.log(`Successfully analyzed: ${successCount} / ${jsFiles.length} files`);
  console.log('=========================================');
}

generateReport();
