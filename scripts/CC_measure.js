const fs = require('fs');
const path = require('path');
const escomplex = require('typhonjs-escomplex');

// ==========================================
// 設定項目
// ==========================================
// 測定対象のフォルダパス（相対パスまたは絶対パス）
const TARGET_DIR = '../Dataset'; 
// 出力するCSVファイル名
const OUTPUT_CSV = 'cyclomatic_complexity_report.csv';
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
      // フォルダの場合は再帰的に探索
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
  // スクリプトの実行場所に関わらず、スクリプト自身のディレクトリを基準に解決する
  const absoluteTargetDir = path.resolve(__dirname, TARGET_DIR);
  console.log(`Scanning directory: ${absoluteTargetDir}`);
  const jsFiles = getJsFiles(absoluteTargetDir);
  
  if (jsFiles.length === 0) {
    console.log('No JavaScript files found.');
    return;
  }

  // CSVのヘッダー行
  let csvContent = 'File Path,Cyclomatic Complexity\n';
  let successCount = 0;

  jsFiles.forEach(filePath => {
    try {
      const code = fs.readFileSync(filePath, 'utf-8');
      
      // ESComplexでコードを解析
      const result = escomplex.analyzeModule(code);
      const cc = result.aggregate.cyclomatic;

      // 相対パスにして出力
      const relativePath = path.relative(process.cwd(), filePath);

      // CSVのフォーマットに合わせて追記
      csvContent += `"${relativePath}",${cc}\n`;
      successCount++;
      
    } catch (error) {
      // 構文エラーなどで解析できなかったファイル
      const relativePath = path.relative(process.cwd(), filePath);
      console.error(`Error analyzing ${relativePath}: ${error.message}`);
      csvContent += `"${relativePath}",Error\n`;
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
