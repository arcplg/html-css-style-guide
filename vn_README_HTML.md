# HTML Coding Guideline

# HTML Style Rules

## Mô tả trong `Sematic`
* Hãy lưu ý về việc phân biệt rõ ràng vai trò của HTML và CSS
* Không phải là nhìn ở bên ngoài, hoặc là những hoạt động mà sẽ thêm class name dựa trên mục đích và vai trò ([tham khảo page khái quát](vn_README.md))
 * Nếu có thể thì mô tả tag có cấu trúc của HTML5 (header, nav, footer, section, article, etc...)
   * Tuy nhiên, `section` và  `article` element vì khó mà có thể cấu trúc được nên nếu như cảm thấy ương ương dỡ dỡ thì dùng div element cũng OK
 * `<h1>` element thì trong page sẽ set 1 cái, ở top page theo nguyên tắc thì sẽ sử dụng cho site name và những vùng xung quanh logo icon, còn những page khác sẽ set cho header title
 * h1 h2 h3 của header thì sẽ tuân thủ thứ tự theo như thứ tự của page, và sẽ được sử dụng một cách thích hợp. Ngoài ra, ko chỉ định style trực tiếp cho hx mà chỉ gán class

## Class sematic

Đặt tên `<ul> <li>` dựa trên mục đích hoặc vai trò của nó, không dựa trên hình thức hoặc hoạt động của nó, vì nó được sử dụng như một list.
Tóm lại, không đặt tên lớp như red-box (đỏ) hay left-box (vùng bên trái), mà hãy dựa vào mục đích và vai trò của post-box (bưu điện), image-box (Image area), v.v. để đặt tên.

```html
<!-- Bad example（Đặt tên theo hình thức bên ngoài và hoạt động） -->
  <div class="red pull-left"></div>
  <div class="grid row"></div>
  <a class="color-blue"></a>
```

```html
<!-- Good example（Đặt tên theo mục đích và vai trò） -->
  <div class="alert-box"></div>
  <div class="basket"></div>
  <a class="color-primary"></div>
```

Ví dụ bootstrap
> [Ngừng sử dụng CSS framework ngay bây giờ!](https://qiita.com/isuke/items/e132669d54523c934b96)
> 
>`col-lg-6` nghĩa là width 6/12 trên Large device
「Large device có width 6/12」có phải là cấu trúc văn bản không?
Không, đó là style.
**Đây là tác động tiêu cực nhất sử dụng CSS framework**
Định nghĩa style làm xói mòn HTML.
Về bản chất, tốt nhất chỉ nên thay đổi HTML khi cấu trúc văn bản thay đổi và chỉ CSS khi style thay đổi.
Tuy nhiên, trong trường hợp trên khi phát sinh thay đổi style "Width 7/12" thì phải chỉnh sửa HTML.
Để phân chia giữa style và cấu trúc văn bản (HTML) nên đã define ra stylesheet, nhưng đưa xuống dưới hướng dẫn này.


Tuy nhiên, nếu sử dụng bootstrap ngay từ đầu thì có thể sử dụng dựa theo quy định này.

## Không thiết kế trên cơ sở multi-class
Trong HTML có thể viết được nhiều thuộc tính class, tuy nhiên đối với Multi class thì không được thể hiện một trạng thái bằng cách kết hợp nhiều selector.
Ví dụ bootstrap
> [Good CSS](https://qiita.com/horikowa/items/7e6eb7c4bbb422241d9d)
class=“btn btn-primary btn-lg btn-block”
Khai báo các class thành các bộ style riêng biệt như selector.
...
Một số người có thể chỉ nhìn vào tóm tắt các kiểu style phổ biến CSS là có thể hiểu và thay đổi code. Tuy nhiên, kỹ thuật này **chỉ nên thực hiện với CSS trong HTML**.
...
Không phủ nhận việc thiết lập nhiều thuộc tính class.
Và có những tình huống phải thêm class được gọi là class tiện ích (Utility class).
...
Tuy nhiên, đối với Multi class, không nên thể hiện một trạng thái bằng cách kết hợp nhiều Selector.
Để thể hiện chỉ bằng 1 button, ngoài code ra thì cần ghi ghi nhớ những điều dưới đây:



## Rule `<head>`

## head Template
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

## Setting title phù hợp

* Nguyên tắc, gán title unique cho các page
* Keyword muốn truyền đạt rút gọn thành 1
* 32 ký tự trên PC, nhưng smartphone không cố định
* Keyword đặt từ đầu


## Setting meta description phù hợp

* Cố gắng đưa vào các đoạn text có ý nghĩa ở nửa đầu
* Khi tìm kiếm trên smartphone, số ký tự meta description được hiểu thị là 50 ký tự fullwidth
* Khi tìm kiếm trên PC, số ký tự meta description được hiểu thị là 120 ký tự fullwidth


## Phải setting meta viewport
  Tiêu chuẩn như dưới đây.
  `<meta name="viewport" content="width=device-width, initial-scale=1">`

## Nếu có yêu cầu setting meta keyword thì set
  Về tiêu chuẩn thì không cần thiết

## Phải setting OGP
* `og:type` thay bằng Top=`website` cấp dưới=`article`
* `og:image`
  * Nguyên tắc trên 600 x 315 (Width trên 600)
  * Trường hợp yêu cầu xử lý cho các thiết bị có độ phân giải cao thì gấp đôi trên 1200 x 630


## Favicon
* 16x16,file `.ico` đã set 32x32 (Required)
* icon được sử dụng trên home screen của Android hay safari của iPhone/iPad (180x180, Optional)


## Pagination không cần quan tâm nhiều
`rel="prev" rel="next"`
google thông báo đã hết support nên không cần viết gì


## Sau file CSS sẽ include file JS
  Nếu load CSS chưa hoàn tất thì JS sẽ đợi


## Cách include file JS
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


