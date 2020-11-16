# **HTML/CSS Coding Dev ENV Guideline**

#  Overview
Về nguyên tắc, môi trường phát triển sử dụng `SASS(SCSS)` để build

## Architecture overview
* VSC (Visual Studio Code) và chia sẻ cài đặt tiện ích mở rộng, hướng đến tự động hoá nhiều nhất có thể
  * editorconfig
  * Cài đặt browser yêu cầu
  * Kiểm tra realtime (style-Lint)
  * Auto format khi lưu code
  * CSS property order
  * Đặt CSS Vendor prefix
  * dev server auto run, khi update auto hiển thị
  * CSSキャッシュバスター自動化（cssファイルの後ろにハッシュを付与)
CSS cash buster tự động hóa (css file thêm hash vào phía sau)
* package managerは`yarn`を推奨します
Package manager `yarn` được khuyến khích
* 開発要件によりテンプレートを制作する予定です
Tùy theo yêu cầu phát triển template sẽ được sản xuất
  * gulp 
    * 静的HTML/CSSのみ（本リポジトリに入っています。）：
Chỉ HTML/ CSS tĩnh (trong kho này)
    * Wordpress
  * WebPack
    * Vue/Nuxt.js

## ブラウザ対象の設定(browserslist)
## Cài đặt mục tiêu browser
package.jsonの以下をプロジェクトごとに設定してください。
下記はデフォルト設定です。
 Hãy đặt package.json  trong phần sau project.
Dưới đây là các cấu hình default 

```js:package.json
...
"browserslist": [
  ">2% in JP, ie >= 11, ios_saf >= 12, Firefox ESR"
]
...
```

対応ブラウザは以下のコマンドで確認できます。
```bash
npx browserslist ">2% in JP, ie >= 11, ios_saf >= 12, Firefox ESR"
```

# VSC Editor (Visual Source Code) 環境
Môi trường VSC Editor (Visual Source Code)

## EditorConfigを使ってコーディングスタイルを統一

インデントや改行コードなど、コーディングスタイルを統一するための仕組みです。
Indent,  xuống dòng,… Coding style là một cơ chế để thống nhất.
EditorConfigが有効になっているエディタは、プロジェクトディレクトリに`.editorconfig`があればそのディレクトリ以下のファイルすべてにコーディングスタイルを適用します。Gitの管理対象に加えます。
Editor với EditorConfig được enabled, nếu `.editorconfig`có trong project directory hãy áp dụng Coding style cho tất cả file trong thư mục đó

## vscodeの設定ファイルをgitで共有
### Chia sẻ file cấu hình vscode với git
プロジェクトのルートに`.vscode`フォルダとsettings.jsonを置きgitで共有します
Đặt folder `.vscode` và  settings.jsonon ở Project root  vàchia sẻ với gift
## VSC拡張機能 / 設定
###VCS Extensions / Settings
### 必須拡張機能 / 設定
Required extensions / settings
* EditorConfig for VS Code

* EditorConfigを理解する拡張機能
Các tiện ích mở trộng hiểu EditorConfig
* ESLint
* JavaScript のリアルタイム構文チェックツール拡張機能
Tiện ích mở rộng check tool cú pháp realtime 
* HTML/CSSコーディング時は使いませんが、後々のため入れておいたほうが良いです
 Không sử dụng  nó khi coding HTML/CSS , tuy nhiên sẽ tốt hơn là đưa nó để vào sau
* stylelint

* CSSののリアルタイム構文チェックツール拡張機能
Tiện ích mở rộng check tool cúp pháp CSS real time 

* 複数あるのでpublishersがstylelintのものをインストール
Bởi vì có nhiều publishers, installation stylelint’s
* Vetur, Vue 2 Snippets, vuetify-vscode

* Vue.js のコーディング時必須
Thời gian cần thiết / ràng buộc khi coding Vue.js
* WordPress Snippet
* Wordpress のコーディング時必須
Thời gian cần thiết/ ràng buộc khi coding Wordpress
* SVG Viewer
  * SVG画像のプレビュー
Preview hình ảnh SVG
### 推奨拡張機能 / 設定
Recommended extensions / settings

* SCSS IntelliSense
* SCSSの`variables`, `mixins`, `functions`を補完してくれる
Bổ sung `variables`, `mixins`, `functions` trong SCSS
* IntelliSense for CSS class names in HTML
* HTMLの`class`名を補完してくれる
Bổ sung tên `class` trong HTML
* ただし巨大なプロジェクトの場合重いかも
Tuy nhiên nó có thể khá nặng nề với project
* Bracket Pair Colorizer
* (), [], {} などの括弧の開始-閉じるの組み合わせを色を変えて見やすくする。
Thay đổi màu sắc của các dấu ngoặc để dễ nhìn hơn
* zenkaku
* 全角スペースの可視化
Hình dung space một cách đầy đủ
* "editor.renderWhitespace": "all"
* 半角スペースの可視化
Hình dung space  nửa chiều rộng
* Trailing Spaces
* 半角スペースが行末にある場合の可視化
Hình dung nửa chiều rộng space khi nó cuối dòng
* "editor.renderIndentGuides": true
* 現在のインデントの縦ライン
Lint của indent hiện tại
* Excel Viewer, Rainbow CSV
* CSVのテキストを見やすくする拡張機能
Tiện ích mở rộng giúp cho dễ đọc test của CSV
* ftp-sync
  * 保存時にftpアップロードしてくれる
Upload ftp khi sẵn sàng
# SASS(SCSS)ビルド環境
#  build môi trường SASS(SCSS)
## static 環境
Môi trường static
`sample_static`にサンプル環境があります。
Có môi trường sample trong sample _static
## WordPress 環境

todo

## Vue/Nuxt 環境

todo

# デバッグ
#Debug
* スマホなどのデバイスの実機確認を必ず行う
Đảm bảo kiểm tra các device thực tế như smartphones
* 時間がない場合、クラウドの[Browser Stack](https://www.browserstack.com/)（契約済）を利用する。localIPでも利用する場合chromeに下記拡張機能を入れてください。
Nếu không có thời gian, sử dụng cloud [Browser Stack](https://www.browserstack.com/)  Khi sử dụng với localIP, đặt phần mở rộng sau vàoChrome
https://chrome.google.com/webstore/detail/browserstack-local/mfiddfehmfdojjfdpfngagldgaaafcfo?hl=ja

  * 同じwifiネットワーク内ならローカルWebをスマホ実機で確認できます。

Nếu trong cùng wifi network, có thể kiểm tra local web trên smartphone.
