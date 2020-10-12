# **HTML/CSSコーディング 開発環境ガイドライン**

# 概要

原則、開発環境は`SASS(SCSS)`を使いビルドを行います。
プロジェクトによりますが、原則、`docker`を利用しないようにします。

## アーキテクト概要

* VSC(Visual Source Code)と拡張機能の設定を共有し、なるべく以下自動化を目指します
  * editorconfig
  * ブラウザ対象の設定
  * リアルタイムチェック(style-Lint)
  * コード保存時の自動フォーマット
    * CSSプロパティ順
    * CSSベンダープリフィックス付与
  * dev server 自動起動、更新時自動表示
  * CSSキャッシュバスター自動化（cssファイルの後ろにハッシュを付与)
* package managerは`yarn`を推奨します
* 開発要件によりテンプレートを制作する予定です
  * gulp
    * 静的HTML/CSSのみ（本リポジトリに入っています。）：
    * Wordpress
  * WebPack
    * Vue/Nuxt.js


# 　VSC Editor (Visual Source Code) 環境

## EditorConfigを使ってコーディングスタイルを統一

インデントや改行コードなど、コーディングスタイルを統一するための仕組みです。
EditorConfigが有効になっているエディタは、プロジェクトディレクトリに`.editorconfig`があればそのディレクトリ以下のファイルすべてにコーディングスタイルを適用します。Gitの管理対象に加えておけば、他のユーザはその設定をそのまま共有することができます。

## vscodeの設定ファイルをgitで共有


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
* Markdown Preview Github Styling, Markdown TOC
  * Markdownで編集する場合必須
* SVG Viewer
  * SVG画像のプレビュー

### 推奨拡張機能 / 設定
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
## WordPress 環境
## Vue/Nuxt 環境

# デバッグ

macのローカルネットワークでのスマホ実機確認方法