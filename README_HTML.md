# HTMLコーディング ガイドライン

# HTMLスタイルルール

## `セマンティック`に記述する
* HTMLとCSSの役割をしっかりと分ける概念を意識するようにしてください
* 見た目や振る舞いからではなく、目的や役割に基づいてclass名をつけます([概要ページ参照](README.md))
* できる限りHTML5の構造化タグ( header, nav, footer, section, article, etc...)で記述する
  * ただし、`section` と `article` 要素は結構難しいので、中途半端になりそうなら、div要素でもOKです。
* `<h1>`要素はページ内で1つにし、原則トップページではロゴアイコン周りやサイト名に使い、他のページはヘッダータイトルに設定する
* ヘッダー h1 h2 h3 はページの目次となるように順番を守り、適切に付与する。また hx に直接スタイルを指定しないで、classを付与する

## セマンテックのclassについて

`<ul><li>`はリストとして使用するように、見た目や振る舞いからではなく、目的や役割に基づいて名前をつけます。
要は例えば、red-box(赤) や left-box(左エリア) のようなclass名をつけず、post-box(郵便箱)、image-box(画像エリア)などの目的や役割に基づいてclass名をつけてください。


```html
<!-- 悪い例（見た目や振る舞いでclass名をつけている） -->
  <div class="red pull-left"></div>
  <div class="grid row"></div>
  <a class="color-blue"></a>
```

```html
<!-- 良い例（目的や役割に基づいてclass名をつけている） -->
  <div class="alert-box"></div>
  <div class="basket"></div>
  <a class="color-primary"></div>
```

例えば bootstrap
> [お前ら今すぐそのCSSフレームワーク使うのやめろ!](https://qiita.com/isuke/items/e132669d54523c934b96)
> 
>`col-lg-6`はLarge deviceで幅が6/12という意味です。
「Large deviceで幅が6/12」というのは文書構造でしょうか?
いいえ、スタイルですね。
**これがCSSフレームワークを使う最大の弊害**です。
スタイル定義がHTMLに侵食してしまうのです。
本来、文書構造に変更が生じたときはHTMLのみ、スタイルの変更が生じたときはCSSのみを変更するのが理想です。
ですが、上記の場合例えば「幅を7/12にしたい」というスタイルの変更が生じたときにHTMLを編集しなくてはなりません。
文書構造とスタイルを分離するためにスタイルシートが生まれたのにこれでは本末転倒ですね。


ただし、最初からbootstarpを使う場合は、この前提で利用してかまいません。

## マルチクラスが前提の設計はしない

HTMLではクラス属性を複数記述することが出来ますが、マルチクラスを前提として、複数のセレクタの組み合わせによって、1つの状態を表現するのは控えてください。

例えば bootstrap
> [良いCSSとは](https://qiita.com/horikowa/items/7e6eb7c4bbb422241d9d)
class="btn btn-primary btn-lg btn-block"
各クラスをセレクタとして、スタイル郡がバラバラに宣言されています。
...
共通するスタイルをまとめ、CSSだけを見れば見通しがよくなり、変更も容易になった感じる方もいるかもしれません。
ただし、この手法は**CSSで行うべきことをHTMLで行ってる**に過ぎません。
...
クラス属性を複数設定すること自体を否定しているわけではありません。
いわゆるユーティリティクラスと呼ばれるようなクラスを付けざるを得ない状況もあるでしょう。
...
しかしマルチクラスを前提として、複数のセレクタの組み合わせによって、1つの状態を表現するのはやめるべきです。
たった1つのボタンを表現するために、コード以外に以下の様なことを覚えるのは苦痛でしかありません。



## `<head>`に関連するルール

## headテンプレート
```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title></title>
  <meta name="description" content="">

  <meta property="og:title" content="">
  <meta property="og:type" content="">
  <meta property="og:url" content="">
  <meta property="og:image" content="">
  <meta property="og:site_name" content="">
  <meta property="og:description" content="" />
  <meta property="fb:app_id" content="">

  <link rel="shortcut icon" type="image/vnd.microsoft.ico" href="/favicon.ico">
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">

  <link rel="stylesheet" href="css/style.css?v=20201020">

  <script src="https://www.google.com/xxx.js"></script>
</head>
<body>

</body>
</html>
```

## title を適切に設定する

* 原則、各ページに固有のタイトルを付ける
* 伝えたいキーワードは一つに絞る
* PCでは32文字だが、スマホは固定ではなくその前後です
* キーワードは最初の方におく


## meta description を適切に設定する

* なるべく前半に興味を引く文章を入れる
* スマホで検索したときに表示されるmeta descriptionの文字数は全角50文字
* PCで検索したときに表示されるmeta descriptionの文字数は全角120文字


## metaビューポートを必ず設定する
  標準は下記です。
  `<meta name="viewport" content="width=device-width, initial-scale=1">`

## meta keyword は指定されたら設定
  標準では必要ありません。

## OGPは必ず設定する
* `og:type`はTop=`website` 配下=`article`で切り替えてください。
* `og:image`
  * 原則 600 x 315 以上 (横幅が 600以上)
  * 高解像度端末に対応させたい場合は倍の 1200 x 630 以上


## ファビコン
* 16x16,32x32がセットになった`.ico`ファイル（必須）
* iPhoneやiPadのsafariや、Androidのホーム画面で使用されるアイコン(180x180,必須ではない)


## ページネーションは特に意識しない
`rel="prev" rel="next"`
googleは既にサポートを終了告知しているので、特別書く必要はありません。


## CSSファイルの後にJSファイルをincludeする
  CSSの読み込みが完了しないと、jsファイルは動作待ちとなります。


## JSファイルのinclude方法
JSの読み込みは、bodyの最下部はやめて、head内に記述し、以下2種類のdeferかasync属性を付与してください。
* `defer`: `<script src="xxx.js" defer></script>`
  * 今までbodyの最下部でincludeしているものはすべて置き換えることができます。しかも速いです。
* `async`: `<script src="xxx.js" async></script>`
  * こちらは完全非同期で読み込むので速いのですが、順番が保証されません。完全に独立したjsのみだけに使用してください。


## 外部サイトリンクを `_blank` で開く場合

セキュリティの観点から、以下の`noopener` `noreferrer`を付与してください
`<a href="{URL}" target="_blank" rel="noopener noreferrer">LINK TEXT</a>`


## 画像にalt属性を必ず入れる
  背景画像のような意味のない画像は対象外


## ベクトルにできる画像はなるべくSVGで保存する
SVGにすると、PC用、SP用、レティナ2xの対応をしなくても良くなります。


## アイコンはなるべくWebIconFontを利用する

デザイナと相談、わざわざデザインしなくてもいい場合のみ


## CSS/JS キャッシュの対策
* お客さま（ユーザー）に毎回ブラウザをスーパーリロードする必要がないように、できる限りインクルードするファイル名の後ろに一意のパラメータを付与する ex.`file.css?v=202010090954`
* なにかしらHTMLテンプレートエンジンを組み込んでいる、もしくはphpの場合、自動化してください


# HTMLフォーマットルール

## インデントはスペース2つ

## 単一タグ要素は閉じない。
  ```html
    <br/> // NG
    <br> // OK

    <img src="xxx" /> // NG
    <img src="xxx"> // OK
  ```

## スタイルシートとスクリプトのtype属性を省略する。
```html
<!-- Not recommended -->
<script src="https://www.google.com/xxx.js" type="text/javascript"></script>

<!-- Recommended -->
<script src="https://www.google.com/xxx.js"></script>
```

## 画像,CSS,JSなどの参照ファイル名ルール
原則すべて小文字、セパレータは `_`(under score)を使う（`-`はNG）

```bash
// NG
MainLogo.png
common-logo.png

// OK
main_logo.png
common_logo.png
```


