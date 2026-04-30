import json
import os

def add_indent(text, indent_level=8):
    """
    各行の先頭に指定した数のスペースを追加する関数。
    空行にはスペースを追加しません[cite: 1]。
    """
    if not text:
        return ""
    
    indent_str = " " * indent_level
    lines = text.splitlines()
    # 行に中身がある場合のみインデントを付与[cite: 1]
    indented_lines = [indent_str + line if line.strip() else line for line in lines]
    return "\n".join(indented_lines)

def extract_all_js_pairs(input_file, output_dir, max_id=4999):
    """JSONからID 0〜指定IDまでのJSコードペアを抽出し保存する関数"""
    
    # 出力先ディレクトリの作成[cite: 1]
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
        print(f"ディレクトリ '{output_dir}' を作成しました。")

    # JSON読み込み[cite: 1]
    try:
        with open(input_file, 'r', encoding='utf-8') as f:
            data = json.load(f)
    except FileNotFoundError:
        print(f"エラー: ファイル '{input_file}' が見つかりません。")
        return

    print(f"読み込みデータ数: {len(data)} ペア")

    # --- ラッパー定義 ---[cite: 1]
    # ヘッダー（run: function() { の次は改行されているため、ここにはインデント不要）[cite: 1]
    wrapper_header = "const Benchmark = {\n    run: function() {\n"
    # フッター[cite: 1]
    wrapper_footer = "\n    }\n};"

    count = 0

    # ファイル書き出し[cite: 1]
    for pair in data:
        pair_id = pair.get('id')
        
        # IDが存在しない場合はスキップ
        if pair_id is None:
            continue
            
        # IDが4999を超えたら処理を終了
        if int(pair_id) > max_id:
            break

        # ==========================================
        # slowコードの処理
        # ==========================================
        slow_code = pair.get('slow', '')
        indented_slow = add_indent(slow_code, indent_level=8)
        wrapped_slow_code = wrapper_header + indented_slow + wrapper_footer

        slow_filename = f"pair_{pair_id}_slow.js"
        with open(os.path.join(output_dir, slow_filename), 'w', encoding='utf-8') as f:
            f.write(wrapped_slow_code)
        
        # ==========================================
        # fastコードの処理
        # ==========================================
        fast_code = pair.get('fast', '')
        indented_fast = add_indent(fast_code, indent_level=8)
        wrapped_fast_code = wrapper_header + indented_fast + wrapper_footer
        
        fast_filename = f"pair_{pair_id}_fast.js"
        with open(os.path.join(output_dir, fast_filename), 'w', encoding='utf-8') as f:
            f.write(wrapped_fast_code)
            
        count += 1

    print(f"抽出完了: 合計 {count * 2} 個のファイルを '{output_dir}' に保存しました。")

# --- 設定 ---
# 読み込むJSONファイル名に合わせて変更してください
INPUT_FILE = 'mb_speed_diff_sort.json' 
OUTPUT_DIR = 'top5000_js_pairs'
MAX_ID = 4999

if __name__ == "__main__":
    extract_all_js_pairs(INPUT_FILE, OUTPUT_DIR, MAX_ID)