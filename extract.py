"""
index-live.html に data URI で埋め込まれた画像を img/ フォルダへ切り出し、
src をそのパスに書き換えるスクリプト。

使い方（HTML と同じフォルダに置いて実行）:
    python extract.py
    python extract.py 別のファイル.html      # 対象を指定する場合
    python extract.py index-live.html assets # 出力先フォルダを変える場合
"""

import base64
import pathlib
import re
import shutil
import sys

# 対象ファイルと出力先（コマンドライン引数で上書きできる）
html_path = pathlib.Path(sys.argv[1] if len(sys.argv) > 1 else "index-live.html")
out_dir = pathlib.Path(sys.argv[2] if len(sys.argv) > 2 else "img")

if not html_path.exists():
    print(f"[中断] {html_path} が見つかりません。HTML と同じフォルダで実行してください。")
    sys.exit(1)

# 上書きするのでバックアップを取る
backup = html_path.with_suffix(".bak" + html_path.suffix)
shutil.copy(html_path, backup)
print(f"バックアップ: {backup.name}")

html = html_path.read_text(encoding="utf-8")
out_dir.mkdir(parents=True, exist_ok=True)

# data URI の拡張子対応表
EXT = {
    "image/jpeg": ".jpg",
    "image/jpg": ".jpg",
    "image/png": ".png",
    "image/gif": ".gif",
    "image/webp": ".webp",
    "image/svg+xml": ".svg",
}

pattern = re.compile(r'src="data:(image/[a-z+]+);base64,([^"]+)"')
seen = {}   # 同じ画像が複数回使われていても書き出しは1回
count = 0


def replace(match):
    global count
    mime, b64 = match.group(1), match.group(2)
    key = b64[:120]                      # 先頭だけで同一判定（十分に一意）
    if key not in seen:
        count += 1
        name = f"img{count:02}{EXT.get(mime, '.bin')}"
        path = out_dir / name
        path.write_bytes(base64.b64decode(b64))
        seen[key] = f"{out_dir.as_posix()}/{name}"
        print(f"  書き出し: {seen[key]}  ({path.stat().st_size // 1024} KB)")
    return f'src="{seen[key]}"'


new_html = pattern.sub(replace, html)

if count == 0:
    print("埋め込み画像は見つかりませんでした。HTML は変更していません。")
    backup.unlink()
    sys.exit(0)

html_path.write_text(new_html, encoding="utf-8")

before = len(html.encode("utf-8")) // 1024
after = len(new_html.encode("utf-8")) // 1024
print(f"\n完了: {count} 枚を {out_dir}/ に切り出しました。")
print(f"HTML サイズ: {before} KB → {after} KB")
print("ブラウザで開いて、画像が表示されるか確認してください。")
