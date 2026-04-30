const fs = require('fs');
const path = require('path');
const escomplex = require('typhonjs-escomplex');

// ==========================================
// 設定項目
// ==========================================
// 測定対象のフォルダパス（相対パスまたは絶対パス）
const TARGET_DIR = '../Dataset'; 
// 出力するCSVファイル名
const OUTPUT_CSV = 'maintainability_report.csv';
// ==========================================

/**
 * 指定したディレクトリ内の .js ファイルを再帰的に取得する
 */
function getJsFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      // フォルダの場合は再帰的に探索
      // node_modules など除外したいフォルダがあればここに条件を追加
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
 * メイン処理
 */
function generateReport() {
  console.log(`Scanning directory: ${TARGET_DIR}`);
  const jsFiles = getJsFiles(TARGET_DIR);
  
  if (jsFiles.length === 0) {
    console.log('No JavaScript files found.');
    return;
  }

  // CSVのヘッダー行
  let csvContent = 'File Path,Maintainability Index\n';
  let successCount = 0;

  jsFiles.forEach(filePath => {
    try {
      const code = fs.readFileSync(filePath, 'utf-8');
      
      // ESComplexでコードを解析
      const result = escomplex.analyzeModule(code);
      const mi = result.maintainability;

      // CSVのフォーマットに合わせて追記（パスにカンマが含まれる場合を考慮してダブルクォーテーションで囲む）
      csvContent += `"${filePath}",${mi.toFixed(2)}\n`;
      successCount++;
      
    } catch (error) {
      // 構文エラーなどで解析できなかったファイル
      console.error(`Error analyzing ${filePath}: ${error.message}`);
      csvContent += `"${filePath}",Error\n`;
    }
  });

  // CSVファイルとして保存
  fs.writeFileSync(OUTPUT_CSV, csvContent, 'utf-8');
  console.log('\n=========================================');
  console.log(`Report generated: ${OUTPUT_CSV}`);
  console.log(`Successfully analyzed: ${successCount} / ${jsFiles.length} files`);
  console.log('=========================================');
}

// 実行
generateReport();