# **HTML/CSSコーディング 開発環境ガイドライン**

# 概要

原則、開発環境は`SASS(SCSS)`を使いビルドを行います。

## アーキテクト概要

* VSC(Visual Studio Code)と拡張機能の設定を共有し、なるべく以下自動化を目指します
  * editorconfig
  * ブラウザ対象の設定
  * リアルタイムチェック(style-Lint)
  * コード保存時の自動フォーマット
    * CSSプロパティ順
    * CSSベンダープリフィックス付与
  * dev server 自動起動、更新時自動表示
* package managerは`yarn`を推奨します
* 開発要件によりテンプレートを制作する予定です
  * gulp
    * 静的HTML/CSSのみ（本リポジトリに入っています。）：
    * Wordpress
  * WebPack
    * Vue/Nuxt.js

## ブラウザ対象の設定(browserslist)
package.jsonの以下をプロジェクトごとに設定してください。
下記はデフォルト設定です。

```js:package.json
...
"browserslist": [
  ">1% in JP, ie >= 11, ios_saf >= 12, Firefox ESR"
]
...
```

対応ブラウザは以下のコマンドで確認できます。
```bash
npx browserslist ">2% in JP, ie >= 11, ios_saf >= 12, Firefox ESR"
```

# VSC Editor (Visual Source Code) 環境

## EditorConfigを使ってコーディングスタイルを統一

インデントや改行コードなど、コーディングスタイルを統一するための仕組みです。
EditorConfigが有効になっているエディタは、プロジェクトディレクトリに`.editorconfig`があればそのディレクトリ以下のファイルすべてにコーディングスタイルを適用します。Gitの管理対象に加えます。

## vscodeの設定ファイルをgitで共有

プロジェクトのルートに`.vscode`フォルダとsettings.jsonを置きgitで共有します。


## VSC拡張機能 / 設定

### 必須拡張機能 / 設定
* EditorConfig for VS Code
  * EditorConfigを理解する拡張機能
* ESLint
  * JavaScript のリアルタイム構文チェックツール拡張機能
  * HTML/CSSコーディング時は使いませんが、後々のため入れておいたほうが良いです
* stylelint
  * CSSののリアルタイム構文チェックツール拡張機能
  * 複数あるのでpublishersがstylelintのものをインストール
* Vetur, Vue 2 Snippets, vuetify-vscode
  * Vue.js のコーディング時必須
* WordPress Snippet
  * Wordpress のコーディング時必須
* SVG Viewer
  * SVG画像のプレビュー

### 推奨拡張機能 / 設定
* SCSS IntelliSense
  * SCSSの`variables`, `mixins`, `functions`を補完してくれる
* IntelliSense for CSS class names in HTML
  * HTMLの`class`名を補完してくれる
  * ただし巨大なプロジェクトの場合重いかも
* Bracket Pair Colorizer
  * (), [], {} などの括弧の開始-閉じるの組み合わせを色を変えて見やすくする。
* zenkaku
  * 全角スペースの可視化
* "editor.renderWhitespace": "all"
  * 半角スペースの可視化
* Trailing Spaces
  * 半角スペースが行末にある場合の可視化
* "editor.renderIndentGuides": true
  * 現在のインデントの縦ライン
* Excel Viewer, Rainbow CSV
  * CSVのテキストを見やすくする拡張機能
* ftp-sync
  * 保存時にftpアップロードしてくれる

# SASS(SCSS)ビルド環境


## static 環境

`template`にサンプル環境があります。

## WordPress 環境

todo

## Vue/Nuxt 環境

todo

# デバッグ
* スマホなどのデバイスの実機確認を必ず行う
  * 時間がない場合、クラウドの[Browser Stack](https://www.browserstack.com/)（契約済）を利用する。localIPでも利用する場合chromeに下記拡張機能を入れてください。
  https://chrome.google.com/webstore/detail/browserstack-local/mfiddfehmfdojjfdpfngagldgaaafcfo?hl=ja
  * 同じwifiネットワーク内ならローカルWebをスマホ実機で確認できます。
