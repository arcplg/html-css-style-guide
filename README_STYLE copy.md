# **CSS / STYLE コーディング ガイドライン**

# 概要

- **構造設計**
    - FLOCSSを参考にしますが、独自の解釈があります。
- **Class命名規則**
    - BEM記法を参考にし簡略化しています。なるべく詳細度を低く、フラットに記載できるようにします。
- **カスケーディング**
     - できる限り依存がないように＆詳細度を1つに保つようにします。
- **ディレクトリ・ファイル構成**
    - 基本的にレイヤーごとにディレクトリを分け1モジュールを1ファイルにします。（Sass）

原則SASS(SCSS)を`gulp`、もしくはnuxt/Vue.jsの場合は`webpack`でビルドすることを想定しています。

# CSS設計概要

## 構造化は FLOCSS を参考にする

レイヤーごとに詳細度に関するルールを定義することで、カスケーディングを管理するCSSの設計手法。
[FLOCSS](https://github.com/hiloki/flocss)は`Foundation`、`Layout`、`Object`の3つのレイヤーから構成され、`Object`レイヤーはさらに`Component`、`Project`、`Utility`の3つの子レイヤーに分けて構造化します。詳細は後述します。

### セマンティックなclass名をつける

### マルチクラスのデメリット

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


## 要素セレクタを使うときの注意点

要素セレクタを使用しないことを推奨するが、コードが複雑にならないと判断した場合、子セレクタ( `>` )の範囲で対応してください。またセマンティック性がない汎用的要素の`div`、`span` 要素は禁止とします。

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
.card-item > div {}
.card-item > span {}
```

## サイズもろもろについて


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


### レイアウトやボックスなど

原則、コンテンツは基本的に親要素に対して100%での表示になるように設計します。

できる限り親子内で複数指定せず、親のコンテナ（`レイアウトレイヤー`での指定を推奨）だけに指定するように設計を心がけます。


## フォーマットとCSSプロパティ

### CSS（SCSS）フォーマット

後述のリンター＆フォーマッターで自動化することを推奨します。

- IDセレクタは使用禁止
- プロパティの前にスペースを2つ(インデント)
- クロージングブレース（`}`）は独立した行に
- 末尾の空白は削除する
- プロパティ(:)の後にスペースをひとつ入れる
- 値が「0」の場合単位は省略する
- 0.5などの小数点のあたまの0を省略しない（.5は見ずらいので）
- HEX形式のカラーコードは小文字、3文字で表記できるものは3文字にする
- ベンダープレフィックスは手動で書かかず、タスクランナーに任せる
- !importantは原則禁止（utilityレイヤーはOK）
- 意味のある単語の省略はなるべくしない
- CSSで可能なことはできるかぎりJavascriptにしない
- ローカル変数は最初に定義
- extendはできるだけ使わない

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


### CSSプロパティの記載順序

Mozila/W3Cで推奨されているような意味のある順を推奨します。

ルールとしては `stylelint-config-property-sort-order-smacss` を使用します。

[stylelint-config-property-sort-order-smacss](https://github.com/cahamilton/css-property-sort-order-smacss/blob/v2.1.1/index.js)


## SASS(SCSS)ルール

### Sassの変数名はスネークケースで書く

ハイフンは使わず、$some_sass_varsといったような、アンダースコア区切り＋小文字のスネークケースで変数を定義します。

クラス名と区別をつけやすくして検索の時に邪魔にならないようにするためと、SASSだと「-」が演算子としても機能するので、それとの区別をつけて意図しない演算やエラーの発生を防ぐためです。


### グローバル変数は $g_ で始める


### @extendは避ける

`@extend` は、extend元のスタイルを変更した時に影響する範囲が見えず、意図しない部分に影響が出たりするのでできる限り避けます。


### mixinも極力避ける

便利なのですが、本来構造設計をしたほうがいいものと、`mixin`が混ざってくるので、できる限り使用しないようにします。1つのclassモジュールにしてモデファイヤ及びカスケードしてオーバーライドしたほうがいい場合が多いと思います。

後述のレスポンシブ対応のためのユーティリティなどは除きます。


## レスポンシブ対応

### 原則mixin, variableで定義する

後々全体を変更する必要がある場合対応しやすいように、レスポンシブはmixinで関数定義、widthはvariableでで定義してください。

### レスポンシブ対応 img srcset

[レスポンシブイメージで画像表示を最適化](https://ics.media/entry/13324/)

ブレイクポイントによる画像の切り替えは、背景の場合はCSSだが、imgを使う箇所は、
できるだけpicture要素で行う。（imgのsrcset,sizesだと、ブラウザごとの挙動が違うため）

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


## HTMLルール

- インデントは半角スペース2つ
- IDセレクタは原則利用しない（JSなどの動的処理は可）
- インライン記述（style=""）は禁止
    - PHPなどで出力する、background-image: url(...) は許可
- br要素などで要素間の隙間を調整してはいけない
- リンクするエリアや、JSのクリックターゲットはdivではなく可能な限りaタグを使う


## その他ルール

- WAI-ARIAについて、今後の課題


# CSS構造化設計

[FLOCS](https://github.com/hiloki/flocss)を前提にし、独自ルールをプラスします。

## **クラス名とファイルでスコープをつくる**

構造の名前は、BEM記法（独自ルールプラス）とレイヤー分類した接頭辞（プレフィックス）でクラス名をつけ、SASSの場合はさらにファイル名で分類をしていきます。

- クラス名の命名規則（BEM記法＋独自ルール）
- レイヤーで分類と、レイヤーごとに接頭辞（プレフィックス）をつける
- ファイル・ディレクトリ構造で分類

スタイルを指定するのは、プレフィックスから始まるクラスのみとなります。（`.is-`以外）


## 命名規則

### クラス名に接頭辞（プレフィックス）をつける

| 接頭辞 |              用途               |         使用例         |
|:------:|:-------------------------------:|:----------------------:|
|  ji_   |  javascriptの対象となるid要素   |  `id="ji_move_icon"`   |
|  jc_   | javascriptの対象となるclass要素 | `class="jc_move_icon"` |
|   l-   |    Layoutレイヤー（FLOCSS）     |   `class="l-header"`   |
|   c-   |   Componentレイヤー（FLOCSS）   |   `class="c-button"`   |
|   p-   |    Projectレイヤー（FLOCSS）    |  `class="p-userList"`  |
|   u-   |    Utilityレイヤー（FLOCSS）    |  `class="u-clearfix"`  |
|  is-   |  State要素(状態変更を伴う要素)  |  `class="is-active"`   |

ji_,jc_プレフィックスはプログラムの要素として使用する想定で、スネークケースでセパレータをすべてアンダースコアにします。詳細は後述します。


### BEM記法+独自ルール

BEM記法をベースにするが、下記の記事を採用し、かなり独自ルールをプラスします。

以下をそのまま採用させていただきます。
>[CSS 設計における Modifier の記述ルールの最適化](https://qiita.com/okamoai/items/1d2c9018a79e4dee69f4)

まずはBEMオリジナルの基本

```html
<div class="block">
  <div class="block__element">
    <div class="block__element__element"></div>
    <div class="block__element__element"></div>
  </div>
</div>

<div class="block block--modifier">
  <div class="block__element block__element--modifier"></div>
  <div class="block__element">
    <div class="block__element__element"></div>
    <div class="block__element__element--modifier"></div>
  </div>
</div>
```

```css
.block {} /* 親要素 */
.block__element {} /* 子要素 */
.block__element__element {} /* 子の子要素 */
.block--modifier {} /* 親要素のバージョン違い */
.block__element--modifier {} /* 子要素のバージョン違い */
.block__element__element--modifier {} /* 孫要素のバージョン違い */
```

#### 独自ルールの追加

**サンプル（BEMオリジナル）**

```html
<nav class="local-menu">
  <h2 class="local-menu__title">メニュー見出し</h2>
  <p class="local-menu__title-label">見出し説明</p>
  <ul class="local-menu__list">
    <li class="local-menu__list__item local-menu__list__item--typeA local-menu__list__item--active"><a href="#">メニューA</a></li>
    <li class="local-menu__list__item local-menu__list__item--typeB"><a href="#">メニューB</a></li>
  </ul>
</nav>
/* category Modifier */
<nav class="local-menu local-menu--category">
  <h2 class="local-menu__title">メニュー見出し（Modifier）</h2>
  <p class="local-menu__title-label">見出し説明</p>
  <ul class="local-menu__list local-menu__list--category">
    <li class="local-menu__list__item local-menu__list__item--typeA local-menu__list__item--category local-menu__list__item--active"><a href="#">メニューA</a></li>
    <li class="local-menu__list__item local-menu__list__item--typeB local-menu__list__item--category"><a href="#">メニューB</a></li>
  </ul>
</nav>
```

```css
.local-menu { } /* Block */
  .local-menu--category { }  /* Modifier */
  .local-menu__title { }  /* Element */
  .local-menu__title-label { }  /* Element */
  .local-menu__list { }  /* Element */
    .local-menu__list--category { }  /* Modifier */
    .local-menu__list__item { }  /* Element */
      .local-menu__list__item--typeA { }  /* Modifier */
      .local-menu__list__item--typeB { }  /* Modifier */
      .local-menu__list__item--category { }  /* Modifier */
      .local-menu__list__item--active { }  /* Modifier */
```

構成は分かりやすいですが、さすがにこんな感じでHTMLのクラス記述が一気に膨れ上がると、HTMLソースはもうなんだかよくわからいない感じで、直感的でないような気がします。


**独自ルール適用後**

```html
<nav class="c-localMenu">
  <h2 class="c-localMenu_title">メニュー見出し</h2>
  <p class="c-localMenu_titleLabel">見出し説明</p>
  <ul class="c-localMenu_list">
    <li class="c-localMenu_list_item is-active"><a href="#">メニューA</a></li>
    <li class="c-localMenu_list_item"><a href="#">メニューB</a></li>
  </ul>
</nav>
/* category Modifier */
<nav class="c-localMenu category">
  <h2 class="c-localMenu_title">メニュー見出し（Modifier）</h2>
  <p class="c-localMenu_titleLabel">見出し説明</p>
  <ul class="c-localMenu_list">
    <li class="c-localMenu_list_item is-active"><a href="#">メニューA</a></li>
    <li class="c-localMenu_list_item"><a href="#">メニューB</a></li>
  </ul>
</nav>
```

```css
.c-localMenu { } /* Block */
  .c-localMenu_title { }  /* Element */
  .c-localMenu_titleLabel { }  /* Element */
  .c-localMenu_list { }  /* Element */
    .c-localMenu_list_item { }  /* Element */
      .c-localMenu_list_item.typeA { }  /* Modifierはマルチクラス */
      .c-localMenu_list_item.typeB { }  /* Modifierはマルチクラス */
      .c-localMenu_list_item.is-active { }  /* Stateはマルチクラス */
  .c-localMenu.category { }  /* Modifier */
  .c-localMenu.category .c-localMenu_list { }  /* Modifier - Element */
  .c-localMenu.category .c-localMenu_list_item { }  /* Modifier - Element */
```

FLOCSS の識別子記法でハイフンを使っていることもあり、Block, Element 自体には視認性の点からもハイフン記号を使わず、lowCamelCase にします。

**BEM＋独自ルールまとめ**

- `.c-blockName_elementName.modifier`
- Block には必ずプレフィックスを付与
- Block, Element 自体の単語は lowerCamelCase にする
- Block と Element の文字区切りは1文字のアンダースコア
- Modifier と State 記述（例：is-active）は `--` でつなげずマルチクラス記法
    - 識別子がついていないクラスはすべて Modifier とする


## レイヤー/プレフィックスについて

- **Foundation**
    - reset.css や normalize.css などの リセット系CSS 及び、要素セレクタの基本スタイル を定義します。
    - 基本的にこのレイヤーの編集はほぼ発生しないと思われます。

- **Layout** [ `l-` ]
    - ヘッダー、フッター、サイドバー、メインエリアのように、`サイトで共通した大きめのブロックの単位` を定義します。
    - FLOCSS では ID を推奨していますが、本ガイドでは、必ず `l-` のプレフィックスを付けたClassを使用します。
    - レイアウトレイヤー自体にはコンテンツを含めないように（例えば、ヘッダーの場合、エリアのみの定義で中身は `p-` のプレジェクトレイヤーで定義）します。
    - よっておそらく数行のコードのものがほとんどと推測されます。

- **Object**
    - Webサイトの中で用いられるすべての ビジュアルパターン を総称して定義します。Objectは、さらに３つのレイヤーに分けられます。

- **Component** [ `c-` ]
    - `再利用できる機能単位`で分割したモジュールのスタイルを定義します。
    - `常にセットで使うもの`に関しては多少大きめのパーツでも一つのComponentにまとめます。
    - よって設計度が高いとほとんどがこのレイヤーに属することになると思われます。

- **Project** [ `p-` ]
    - `再利用できるプロジェクト固有のパターン`を定義します。
    - Componentの配置と、その他そのプロジェクトのみに使用する部品によって構成されます。

- **Utility** [ `u-` ]
    - ComponentとProjectレイヤーのObjectのモディファイアで解決することが難しい・適切では無い、`わずかなスタイルの調整のための便利クラス`、`補足アニメーション` などを定義します。
    - 確実にスタイルを適応させるために!importantを使用します。
    - 前段に記述したようにHTMLにスタイルを設定することと同意となるので、なるべく使用を控えるような設計をしてください。

- **State** [ `is-` ]
    - `is-disabled`、`is-selected`、`is-active` など状態変更を伴う要素に付与しまう。単体でのCSS定義はしません。

- **Page（そのページしか使わない定義）**
    - ページ特有の指定、もしくは未整理のものをページにつき1ファイル作成し、そのファイルの中にすべてのレイヤーを記載します。
    - プロジェクトによっては、cssを一つにまとめたい場合もあるかと思いますのでこのpage分離は必須ではありません。
    - どちらにせよ、`Component`、`Project`のルールに沿って記述します
    - 原則、もし、このレイヤーで同じパターンが2箇所で使われていたら、共通の component,Projectレイヤーなどでまとめられないか検討してください。

- **Javascript** [ `ji_`,`jc_` ]
    - JavascriptのDOM指定で使用します。スタイル定義は禁止です。
    - `ji_` はid箇所、`jc_` はclass箇所で使用します。
    - ハイフンは使わず、`jc_trigger_open_menu` といったような、アンダースコア区切り＋小文字のスネークケースで変数を定義します。


## FLOCSS設計の悩みどころ:ComponentとProject

`FLOCSS`は悩みどころに`Ccomponent`と`Project`の判別があります。

### ComponentとProjectの定義

- 原則、後述の`app.scss`に取り込まれる`Component`、`Project`は2回以上使われるものを格納する。1回しか使わないものは、Page専用の個別cssに格納する。（プロジェクトの方針次第で、すべて`Component`、`Project`でもかまいません）
- カード内の要素は個別に切り出して使うことはないと考えられる事が多いので、なるべく一つの`Component`にまとめる。
- 例外として、くり返し使われる共通部品としてのカードでも、中にサムネイルのような共通`Component`がある場合、カードとしての`Component`とその中にサムネイル`Component`を作成する。ただし`Component`同士は依存せず、カスケーディングはしてはならない。
- 切り出して使う場合があったとしても、別の`Component`として重複定義したほうがやりやすい場合など、検討する。
- `Project`は、`Component`の配置が主な使いみちとなります。
- 迷ったときは、BootstrapのComponentにあるようなものはComponent、ほかはProject、という判断基準にする。


## カスケーディング

### カスケーディングとは上書き

```css
span {
  color: black;
}

p span {
  color : green;
}
```

最初の `span` のカラーは黒だが、`p` 配下の場合は緑で上書き。


### FLOCSSでは、カスケーディングは原則禁止

以下のようにモデファイアで調整するのがベターです。

```html
<div class="c-button">送信</div>

<div class="p-form">
  <input type="checkbox" class="c-check">確認</div>
  <div class="c-button">送信</div>
</div>

<div class="p-form">
  <input type="checkbox" class="c-check">確認</div>
  <div class="c-button fullwidth">送信</div>
</div>
```

```css
/* 最初の定義 */
.c-button {
  width: 200px;
}
/* モデファイアで拡張 */
.c-button.fullwidth {
  width: 100%;
}
```

とはいっても、さすがに毎回これをやると、コンポーネントが肥大化するので、例外があります。


### カスケーディングが可能なパターン

`FLOCCS`的には、異なるレイヤー間を変更することは許容しています。
ただしレイヤーの順序を前後させることは禁止されています。

**許容**
- ProjectレイヤーがComponentレイヤーの変更

**禁止**
- Projectレイヤー同士、Componentレイヤー同士

もちろん汎用性の高いスタイルであれば前段のように、 `Component` の `Modifier` とすべきです。
だがそこしか使わないものにコンポーネントにいちいち派生スタイルを書くのは野暮ということで、カスケーディングの許容をしています。


禁止パターン（同じレイヤー）
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


### カスケーディングのデメリット

しかしながら、親子を入れ子にすることで詳細度があがります。スタイルをさらに書き換える場合、その詳細度に上回る詳細度で上書きをする必要があります。

上回る詳細度を実現するには、`もっと入れ子を深くする`、`IDを使う`、`!importantを使う`こととなり、この許容をしていくと、だんだんと複雑化していきます。


### 詳細度があがるのを回避するには

ProjectのElementとしてclassを付与し、マルチクラスで上書きする方法があります。
原則こちらの方法を推奨します。

```html
<div class="p-profile c-media">
  <img src="user.jpg" class="p-profile_media_image c-media_image">
  <div class="c-media_body">...</div>
</div>
```
```css
// Component（左寄せ）
.c-media_image {
  float: left;
  margin-left: 10px;
}

// Project の Element で上書き（右寄せへ）
.p-profile_media_image {
  float: right;
  margin-left: 0;
  margin-right: 10px;
}
```

この方法は、対象のデザインが複雑で、パターンが多岐にわたるようなものであった場合、ElementやModifierでコードが溢れてしまうということもあります。

それによってモジュール自体が煩雑になり、問題を引き起こすようであれば、最初にあげた例のようなProjectレイヤーからのComponentレイヤーのカスケーディングが例外として許容します。


### カスケーディング結論

- **原則、詳細度はできるかぎり 1 に抑えます**
- Projectレイヤー同士、Componentレイヤー同士の書き換えは禁止。
- 原則 `.c-name` のClass箇所で `.p-Block_name` のマルチクラスを付与する。
- 例外として `.p-Block_name` を都度記載することで、煩雑になってしまうのであれば、
    - `.p-Block .c-Block` などの異なるレイヤーでのカスケーディングを許容する。
- 何度も出てきそうなものは、カスケーディングせずに `.c-Block_Element.Modifier` のようにComponentの派生パターンを作成する。


## ファイル・ディレクトリ構成（Sass）

ファイルの構成は`FLOCSS`をベースにします。

```
assets/
└── css/
    ├── foundation/
    │   ├── base/
    │   ├── function/
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
│       └── _color.scss
├── layout
│   ├── _footer.scss
│   ├── _header.scss
│   ├── _main.scss
│   └── _sidebar.scss
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

モジュール単位でファイルを分割することによって、ページ単位またはプロジェクト単位でのモジュールの追加・削除の管理が容易になります。utilityはなるべく一つのファイルにまとめます。

使い回しをしないページ専用（ページ群でもかまいませんが、汎用的にならないかを検討してください）のスタイルはpageレイヤーに含め、任意のHTMLファイル専用のpage_xxx.scssとして作成します。

```
<link rel="stylesheet" href="/css/app.css">
<link rel="stylesheet" href="/css/page_index.css">
```

