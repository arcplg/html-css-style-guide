# **CSS / STYLE コーディング ガイドライン**

# 概要
原則SASS(SCSS)を`gulp`、もしくはnuxt/Vue.jsの場合は`webpack`でビルドすることを想定しています。

* **CSSスタイルルール**
  * 考え方のルールです
* **CSSフォーマットルール**
  * 記載するルールです
* **構造設計**
  * FLOCSSを参考にしますが、独自に定義しています
  * **Class命名規則**
    - BEM記法を参考にし簡略化しています。なるべく詳細度を低く、フラットに記載できるようにします。
  * **カスケーディング**
     - できる限り上書きがないようにします
  * **ディレクトリ・ファイル構成**
    - 基本的にレイヤーごとにディレクトリを分け1モジュールを1ファイルにします。


# CSSスタイルルール

## IDセレクタは使用禁止

## 要素セレクタは原則使用しない

要素セレクタを使用しないことを推奨するが、コードが複雑にならないと判断した場合、子セレクタ( `>` )の範囲で対応してください。またセマンティック性がない汎用的要素の`div`、`span` 要素は禁止とします。
また、不要な先祖セレクタは除去してください。

**要素セレクタの使用例**

```html
<ul class="list-item">
  <li>item-A</li>
  <li>item-B</li>
</div>

<div class="card-item">
  <span>氏名</span>
  <div>説明</div>
</div>
```

```css
/* OK */
.list-item > li {}
/* NG */
ul.list-item {}
div.card-item {}
.card-item > div {}
.card-item > span {}
```

## ボックスモデル

ボックスモデルは原則`box-sizing: border-box`（widthはpaddingを含む設定）にする。
reset.cssに記述します。


## レスポンシブル対応

### 原則mixin, variableで定義する

後々全体を変更する必要がある場合対応しやすいように、レスポンシブルはmixinで関数定義、widthはvariableでで定義してください。


### レスポンシブル対応 img srcset

[レスポンシブルイメージで画像表示を最適化](https://ics.media/entry/13324/)

ブレイクポイントによるimg画像の切り替えは、CSSの切り替えのみの場合、すべての画像データを読み込んでしまいます。
このデータ量が気になる場合。picture要素で行なってください。
ただしプロジェクトによって検討してください。

```html
<picture>
  <source media="(max-width:400px)" srcset="sp.jpg 400w" sizes="100vw">
  <source media="(max-width:600px)" srcset="tab.jpg 600w" sizes="100vw">
  <img src="pc.jpg">
</picture>
```
ただし、IE11は対応していないため`picturefill.js`でポリフィルします。
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/picturefill/3.0.3/picturefill.min.js"></script>
```

## リンクするエリアについて

JSなどでクリックできるエリアはdivではなく可能な限りa要素を使う。
a要素でないとSEO的にリンクと判断されないため。またユーザーが新しいWindowで表示ができない。

## その他

- br要素などで要素間の隙間を調整してはいけない
- WAI-ARIAについて、今後の課題


## サイズもろもろについて


### フォントサイズ

基本的には、`rem`を推奨します。

```css
html { font-size: 62.5%; }
```

にすることで1remが10pxになるように調整できます。


### 文字間サイズ

基本的には、`em`を推奨します。

``` CSS
.text { letter-spacing: 0.01em; }
```

Photoshopで`トラッキング数値`の指示がある場合 ÷ 1000を`letter-spacing`に指定します。


### line-height

基本的には、単位をつけないことを推奨します。
ただし、line-heightによって固定高さで上下中央を実現する場合は`px`などの固定値を指定できます。

Photoshopでは`行送りの数値（px）`をフォントサイズ（px）で割ったものを`line-height`に指定します。


## SASS(SCSS)ルール

### Sassの変数名はスネークケースで書く

ハイフンは使わず、$some_sass_varsといったような、アンダースコア区切り＋小文字のスネークケースで変数を定義します。

クラス名と区別をつけやすくして検索の時に邪魔にならないようにするためと、SASSだと「-」が演算子としても機能するので、それとの区別をつけて意図しない演算やエラーの発生を防ぐためです。


### @extendは避ける

`@extend` は、extend元のスタイルを変更した時に影響する範囲が見えず、意図しない部分に影響が出たりするのでできる限り避けます。


### mixinも極力避ける

便利なのですが、本来構造設計をしたほうがいいものと、`mixin`が混ざってくるので、できる限り使用しないようにします。1つのclassモジュールにしてモデファイヤ及びカスケードしてオーバーライドしたほうがいい場合が多いと思います。

後述のレスポンシブル対応のためのユーティリティなどは除きます。


# CSSフォーマットルール

### CSS（SCSS）フォーマット

VSCのフォーマッターで保存時にほぼ自動化できます。

- プロパティの前にスペースを2つ(インデント)
- クロージングブレース（`}`）は独立した行に
- それぞれのセレクタと宣言に対して必ず新しい行を開始すること。
- 末尾の空白は削除する
- プロパティ(:)の後にスペースをひとつ入れる
- 宣言ブロックの区切りに改行を入れる
- 値が「0」の場合単位は省略する
- 0.5などの小数点のあたまの0を省略しない（.5は見ずらいので）
- HEX形式のカラーコードは小文字、3文字で表記できるものは3文字にする
- CSSプロパティの記載順序(後述)
- ベンダープレフィックスは手動で書かかず、タスクランナーに任せる
- !importantは原則禁止（utilityレイヤーはOK）
- 意味のある単語の省略はなるべくしない

```scss
/* Good */
.c-foo,
.c-foo.bar,
.c-baz {
  $_padding: 1em;
  display: block;
  margin-right: 0;
  margin-left: auto;
  padding-right: $_padding;
  padding-left: $_padding;
  backgrouond-color: rgba(0, 0, 0, 0.7);
}

/* Bad */
.c-foo, .c-foo.bar, .c-baz{ //クラスは複数行にする,カッコ前のスペースがない
    display: block;
    backgrouond-color: rgba(0,0,0,0.7); //カンマの後スペース入れる
    margin-right: 0px; //0は単位なし
    margin-left:auto; //コロンの後スペースがない
    $_padding: 1em;} //変数はブロック内の上、カッコは単行に
```


### CSSプロパティの記載順序

Mozila/W3Cで推奨されているような意味のある順を推奨します。
ルールとしては `stylelint-config-property-sort-order-smacss` を使用します。
VSCで保存時自動化するようお願いします。

[stylelint-config-property-sort-order-smacss](https://github.com/cahamilton/css-property-sort-order-smacss/blob/v2.1.1/index.js)



# CSS構造化設計

## 構造化は FLOCSS を参考に独自ルールをプラス

[FLOCSS](https://github.com/hiloki/flocss)は`Foundation`、`Layout`、`Object`の3つのレイヤーから構成され、`Object`レイヤーはさらに`Component`、`Project`、`Utility`の3つの子レイヤーに分けて構造化します。
構造の名前は、BEM記法（独自ルールプラス）とレイヤー分類した接頭辞（プレフィックス）でクラス名をつけ、SASSの場合はさらにファイル名で分類をしていきます。


## BEM記法+独自ルール

BEM記法をベースにするが、下記の記事を採用し、かなり独自ルールをプラスします。

以下をそのまま採用させていただきます。
>[CSS 設計における Modifier の記述ルールの最適化](https://qiita.com/okamoai/items/1d2c9018a79e4dee69f4)

**BEM＋独自ルールまとめ**

## css: `.prefix-blockName_elementName.modifier`

* .`prefix-`blockName_elementName.modifier
  * Block には必ずレイヤープレフィックスを付与
* .prefix-`blockName`_elementName.modifier
  * Blockは lowerCamelCase にする
  * class記述は原則必ず prefix-blockName(c-button) から始まる
* .prefix-blockName`_elementName`.modifier
  * Elementは lowerCamelCase にし、1文字のアンダースコアでつなげる
* .prefix-blockName_elementName`.modifier`
  * Modifier と State 記述（例：is-active）は `--` でつなげずマルチクラス記法


HTML記述例
```html
<nav class="c-localMenu">
  <h2 class="c-localMenu_title">メニュー見出し</h2>
  <p class="c-localMenu_titleLabel">見出し説明</p>
  <ul class="c-localMenu_list">
    <li class="c-localMenu_list_item is-active"><a href="#">メニューA</a></li>
    <li class="c-localMenu_list_item"><a href="#">メニューB</a></li>
  </ul>
</nav>
```
SCSS記述例
```scss
.c-localMenu { // block
  // element
  &_title {}
  &_titleLabel {}
  &_list {
    &_item {
      &.is-active {} // modifier(state)
    }
  }
}
```

## レイヤー/プレフィックスについて

* Foundation
    - reset.css や normalize.css などの リセット系CSS 及び、要素セレクタの基本スタイル を定義します。
    - 基本的にこのレイヤーの編集はほぼ発生しないと思われます。

* Layout [ `l-` ]
  * ヘッダー、フッター、サイドバー、メインエリアのように、`サイトで共通した入れ物のブロックの単位` を定義します。入れ物です。ほぼ`width`と`padding`の設定のみとなる思います。
    - 本レイヤー自体にはコンテンツのスタイルを含めないように（例えば、ヘッダーの場合、エリアのみの定義で中身は `p-` のプレジェクトレイヤーで定義）します。
  * 一つのファイルにまとめてもかまいません

* Object

  * Component [ `c-` ]
    - `再利用できる機能単位`で分割したモジュールのスタイルを定義します。
    - `常にセットで使うもの`に関しては多少大きめのパーツでも一つのComponentにまとめます。

  * Project [ `p-` ]
    - 大きめの再利用できるブロックを定義します。
    - 主にComponentの配置に使います

  * Utility [ `u-` ]
    - ComponentとProjectレイヤーのObjectのモディファイアで解決することが難しい、`わずかなスタイルの調整のための便利クラス`、`補足アニメーション` などを定義します。
    - 確実にスタイルを適応させるために!importantを使用してもよいです。
    - HTMLでスタイルを設定することと同意となるので、なるべく使用を控えるような設計をしてください。

* State [ `is-` ]
    - `is-disabled`、`is-selected`、`is-active` など状態変更を伴う要素に付与しまう。単体でのCSS定義はしません。

* Page（そのページしか使わない定義）
    - ページ特有の指定、もしくは未整理のものをページにつき1ファイル作成し、そのファイルの中にすべてのレイヤーを記載します。
    - プロジェクトによっては、cssを一つにまとめたい場合もあるかと思いますのでこのpage分離は必須ではありません。
    - 原則、もし、このレイヤーで同じパターンが2箇所で使われていたら、共通の component,Projectレイヤーなどでまとめられないか検討してください。

- **Javascript** [ `ji_`,`jc_` ]
    - JavascriptのDOMセレクト、トリガー指定で使用します。スタイル定義は禁止です。
    - `ji_` はid箇所、`jc_` はclass箇所で使用します。
    - ハイフンは使わず、`jc_trigger_open_menu` といったような、アンダースコア区切り＋小文字のスネークケースで変数を定義します。

### レイヤープレフィックス命名規則

| 接頭辞 |              用途               |         使用例         |
|:------:|:-------------------------------:|:----------------------:|
|  ji_   |  javascriptの対象となるid要素   |  `id="ji_move_icon"`   |
|  jc_   | javascriptの対象となるclass要素 | `class="jc_move_icon"` |
|   l-   |    Layoutレイヤー（FLOCSS）     |   `class="l-header"`   |
|   c-   |   Componentレイヤー（FLOCSS）   |   `class="c-button"`   |
|   p-   |    Projectレイヤー（FLOCSS）    |  `class="p-userList"`  |
|   u-   |    Utilityレイヤー（FLOCSS）    |  `class="u-clearfix"`  |
|  is-   |  State要素(状態変更を伴う要素)  |  `class="is-active"`   |


## FLOCSS設計の悩みどころ:ComponentとProject

`FLOCSS`は悩みどころに`Ccomponent`と`Project`の判別がありますが、特別なルールは設けないことにします。
最小限の単位は`Ccomponent`、`Ccomponent`を配置する再利用ブロックは`Project`くらいの考えで、自由に設計してください。

## カスケーディング（上書き）

**許容OK**
- ProjectレイヤーがComponentレイヤーの上書き

**禁止NG**
- Projectレイヤー同士、Componentレイヤー同士

ただし、上書きは複雑になりがちなので、原則、`Component` の `Modifier` で解決してください。


禁止パターン（同じレイヤー）例
```html
<div class="c-button">送信</div>
<div class="c-button"><div class="c-icon"></div>送信</div>

<div class="p-form">
  <div class="p-button"><div class="c-icon"></div>送信</div>
</div>
```
```css
/* NG */
.c-button .c-icon { }
.p-form .p-button { }
```

許容パターン（異なるレイヤー）
```html
<body class="page-user">

  <div class="p-form">
    <div class="p-form_label">同意して送信して下さい</div>
    <input type="checkbox" class="c-check">確認</div>
    <div class="c-button">送信</div>
  </div>

</body>
```
```css
/* カスケーディング可 */
.p-form .c-button {
  margin-left: 30px;
}
.page-user .p-form { }
```


## ファイル・ディレクトリ構成（SCSS）

ファイルの構成は`FLOCSS`をベースにします。

```
assets/
└── scss/
    ├── foundation/
    │   ├── base/
    │   ├── mixin/
    │   └── variable/
    ├── layout/
    ├── object/
    │   ├── component/
    │   ├── project/
    │   └── utility/
    ├── vendor/
    ├── app.scss
    ├── page_xxx.scss
```

基本的に app.scss で出力しますが、ページ特有（モジュール化しないもの）のスタイルは、別途 page_xxx.scssで出力します。

下記の例のようにcomponent、project、pagesのディレクトリには、原則1つのBlockにつき1ファイルを作成します。

```
├── foundation
│   ├── base
│   │   ├── _base.scss
│   │   └── _reset.scss
│   └── variable
│       └── _variable.scss
├── layout
│   ├── _layout.scss
├── object
│   ├── component
│   │   ├── _button.scss
│   │   ├── _dialog.scss
│   │   ├── _grid.scss
│   │   └── _media.scss
│   ├── project
│   │   ├── _articles.scss
│   │   ├── _comments.scss
│   │   ├── _gallery.scss
│   │   └── _profile.scss
│   └── utility
│       └── _utility.scss
├── vendor
│   └── slider
│       └── _slider.css
├── app.scss
├── page_index.scss
├── page_login.scss

出力ファイル(例)
public/css/
    ├── app.css
    ├── page_index.css
    ├── page_login.css

```

モジュール単位でファイルを分割することによって、ページ単位またはプロジェクト単位でのモジュールの追加・削除の管理が容易になります。`utility`と`variable`,`layout`は一つのファイルにまとめてもいいと思います。
