# **CSS / STYLE  coding guideline**

# Khái quát
Trường hợp là SASS(SCSS) của gulp hoặc nuxt/Vue.js thì sẽ build bằng webpack
* **CSS style rule**
  * Đây là rule
* **CSS format rule**
  * Đây là rule được viết
* **Thiết kế cấu trúc**
  * Mặc dù tham khảo FLOCSS, nhưng đang tiến hành định nghĩa độc lập riêng
  * **Qui tắc đặt tên Class **
    - Tham khảo cách viết BEM, và thực hiện một cách đơn giản hóa. Cố gắng giảm độ chi tiết,và có  thể viết một cách flat
  * **Cascading**
     - Nếu được thì cố gắng ko viết đè
  * **cấu trúc file – directory **
    - Về cơ bản thì sẽ phân chia directory theo từng layer, và 1 module sẽ là 1 file 

# CSS style rule

## Cấm ko sử dụng ID selector
## Element selector về nguyên tắc thì ko sử dụng

Tuy là khuyến khích việc ko sử dụng element selector nhưng trong trường hợp thấy code ko phức tạp cho lắm, thì hãy đối ứng trong phạm vi của selector con ( `>` ). Ngoài ra, cũng cấm các `div`、`span` element của các element chung là những cái ko có tính semantic
Thêm nữa, hãy remove những selector cha ko cần thiết.
**Ví dụ về element selector **

```html
<ul class="list-item">
  <li>item-A</li>
  <li>item-B</li>
</div>

<div class="card-item">
  <span>氏名</span>
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

##Box model

Box model sẽ làm theo nguyên tắc `box-sizing: border-box` (width setting bao gồm padding)
Sẽ viết trong reset.css
## Đối ứng responsive

###Trên nguyên tắc định nghĩa bằng mixin, variable

Để có thể đối ứng responsive một cách dễ dàng trng trường hợp phải thay đổi toàn bộ thì hãy định nghĩa hàm bằng mixin, width thì định nghĩa bằng variable

### Đối ứng responsive img srcset

[Tối ưu hóa việc hiển thị hình ảnh bằng responsive image](https://ics.media/entry/13324/)

Việc thay thế hình ảnh dựa trên Break point sẽ load toàn bộ data hình ảnh trong trường hợp chỉ thay thế CSS
Trường hợp thấy data này nặng quá, thì hãy thực hiện bằng picture element
Tuy nhiên có thể tùy chỉnh tùy theo từng project 
```html
<picture>
  <source media="(max-width:400px)" srcset="sp.jpg 400w" sizes="100vw">
  <source media="(max-width:600px)" srcset="tab.jpg 600w" sizes="100vw">
  <img src="pc.jpg">
</picture>
```
Tuy nhiên, vì ko đối ứng trên IE11 nên sẽ Polyfill bằng `picturefill.js`  
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/picturefill/3.0.3/picturefill.min.js"></script>
```

## Về các vùng cần link

Vùng mà có thể link được bằng JS thì ko phải là dùng div mà sẽ sử dụng a element nếu có thể.
Vì nếu như ko phải là a element thì không thể phán đoán là link SEO. Ngoài ra, user cũng ko thể hiển thị được trên window mới

## Ngoài ra

- bắt buộc phát điều chỉnh khoảng trống giữa các element bằng các hình thức như là br element
- Về WAI-ARIA, sẽ có đề tài để nói sau


## Về kích thước khác nhau


### Font size

Về cơ bản thì điều chỉnh sao cho 1rem sẽ là 10px bằng việc khuyến khích sử dụng `rem`

```css
html { font-size: 62.5%; }
```


### Kích thước giữa các kĩ tự

Về cơ bản thì khuyến khích sử dụng `em`

``` CSS
.text { letter-spacing: 0.01em; }
```

Trường hợp có chỉ thị “Tracking number” bằng photoshop thì sẽ chỉ định ÷ 1000 là `letter-spacing`

### line-height

Về cơ bản, thì khuyên khích việc ko gắn kèm theo đơn vị.
Tuy nhiên, trường hợp thực hiện cố định chiều cao ở trên dưới trung tâm phụ thuộc vào line-height, thì có thể chỉ định giá trị cố định như là`px`

Trong Photoshop, `line-height` được chỉ định bằng cách chia` số khoảng cách dòng (px) `cho kích thước phông chữ (px).

## Rule SASS(SCSS)

### Tên biến số Sass sẽ viết bằng Snake case

Ko sử dụng hyphen, mà giống như $some_sass_vars, sẽ chỉ định biến số bằng snake case của Underscore delimiter + lowercase

Để dễ dàng phân chia với class name và tránh rắc rối khi tìm kiếm, nhưng bởi vì SASS hoạt động như 1 phép tính toán, thêm phân chia vào đó sẽ tránh phát sinh lỗi và những tính toán không mong muốn


### Tránh @extend

`@extend` ko thấy dc phạm vi ảnh hưởng khi đã update style của extend ban đầu, vì sẽ gây ảnh hưởng đến những phần ko mong muốn nên trong khả năng có thể hãy tránh điều này.

### mixin cũng tránh càng nhiều càng tốt

Tuy là tiện dụng, nhưng nên thiết kế theo cấu trúc ban đầu, và `mixin` rất dễ nhầm lẫn nên trong khả năng có thể hãy tránh sử dụng. Với 1 class module, thì tôi nghĩ sẽ có rất nhiều trường hợp nên thực hiện modify và cascade,  sau đó thì overwrite.

Sẽ xóa utility để đối ứng responsive về sau

# CSS format rule

### CSS（SCSS）format
Khi lưu bằng format của VSC thì hầu như được làm tự động.

- 2 space trước property (Indent)
- Dấu ngoặc nhọn sẽ ở dòng riêng biệt（`}`）
- Đối với từng khai báo và selector thì bắt buộc phải bắt đầu dòng mới
- Bỏ khoảng trống cuối dòng
- Thêm vào 1 space phía sau property (:)
- Cách hàng vào phần kết thúc câu của block khai báo.
- Giản lược đơn vị trường hợp giá trị là「0」
- Không giản lược số 0 ở đầu của chữ số thập phân như là 0.5（vì .5 thì hơi khó nhìn）
- Color code định dạng HEX thấp hơn, những mã có thể được viết bằng 3 ký tự là 3 ký tự
- Thứ tự mô tả của CSS Property ( đề cập sau )
- Vendor prefix thì sẽ ko được viết bằng tay mà sẽ giao cho Task runner
-  Không sử dụng !important（utility OK）
- Cố gắng tránh ko thực hiện việc giản lược những từ đơn có ý nghĩa 
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
Các class như .c-foo, .c-foo.bar, .c-baz{ // sẽ làm nhiều dòng, và ko có space trước dấu ngoặc
    display: block;
    backgrouond-color: rgba(0,0,0,0.7); //    thêm space vào sau dấu phẩy
    margin-right: 0px; //0     thì không có đơn vị
    margin-left:auto; //         thì không có space sau dấu : 
    $_padding: 1em;} //        là biến số phía trên ở trong block,  dấu ngoặc thêm vào dòng đơn ```


### Thứ tự viết CSS property

Khuyến khích thứ tự mà có ý nghĩa như là Mozila/W3C
Sử dụng rule là `stylelint-config-property-sort-order-smacss`
Vui lòng tự động khi lưu bằng VSC

[stylelint-config-property-sort-order-smacss](https://github.com/cahamilton/css-property-sort-order-smacss/blob/v2.1.1/index.js)



# Thiết kế cấu trúc CSS

## Để cấu trúc, hãy thêm các quy tắc riêng biệt tham khảo FLOCSS

 [FLOCSS](https://github.com/hiloki/flocss) được cấu trúc từ 3 layer là `Foundation`、`Layout`、`Object`, `Object` layer thì sẽ phân chia và cấu trúc thành 3 đó là `Component`、`Project`、`Utility`

Tên của cấu trúc này sẽ thêm class name bằng tiếp đầu ngữ (prefix) đã được phân loại layer và viết BEM (rule thêm vào riêng), trong trường hợp là SASS thì đang phân loại bằng file name

## Viết BEM + Rule riêng

Viết BEM trên nguyên tắc sẽ sử dụng bài viết dưới đây và thêm rule riêng

Dưới đây sẽ sử dụng y như vậy 
>[ Tối ưu hóa rule viết Modifier trong thiết kế CSS](https://qiita.com/okamoai/items/1d2c9018a79e4dee69f4)

**Tổng hợp BEM＋ Rule riêng**

## css: `.prefix-blockName_elementName.modifier`

* .`prefix-`blockName_elementName.modifier
  * Bắt buộc thêm Layer prefix vào Block 
* .prefix-`blockName`_elementName.modifier
  * Block sẽ là lowerCamelCase
  * Viết class bắt buộc phải bắt đầu từ prefix-blockName(c-button) 
* .prefix-blockName`_elementName`.modifier
  * Element sẽ là  lowerCamelCase ,  liên kết bằng  underscore của 1 ký tự
 * .prefix-blockName_elementName`.modifier`
  * Viết Modifier và State（ví dụ：is-active）thì sẽ theo cách multiple class liên kết bằng `--` 


Ví dụ về cách viết HTML
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
Ví dụ về cách viết SCSS例
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

## Về layer/Prefix

* Foundation
    - Định nghĩa style cơ bản của element selector và CSS liên quan đến reset như là reset.css và normalize.css
    - Hầu như là không phát sinh việc edit của layer này
 
* Layout [ `l-` ]
  * Định nghĩa đơn vị của block đã được thêm vào chung trong site như là header, footer, side bar, main area
    - Sẽ thực hiện mà ko bao gồm style của content trong chính layer đó (ví dụ: trường hợp là header thì nội dung định nghĩa chỉ trong area thôi sẽ được định nghĩa bằng Project layer của `p-`)
  *Collect hết lại thành 1 file thì cug ko vấn đề gì

* Object

  * Component [ `c-` ]
    - Định nghĩa style của module đã phân chia theo “đơn vị chức năng có thể tái sử dụng”
    - Liên quan đến “những thứ sẽ sử dụng bằng set bình thường” thì cho dù có thể là path lớn đi nữa những vẫn collect lại thành 1 cái trong component

  * Project [ `p-` ]
    - Định nghĩa block mà có thể tái sử dụng độ lớn
    - Chủ yếu là sử dụng trong việc bố trí Component

  * Utility [ `u-` ]
    - Hơi khó để quyết định bằng Modifier của Object trong Component và Project layer, và sẽ định nghĩa như là “bổ sung animation”, “class tiện để điều chỉnh một chút sylte”
    - Để tương thích với style trong thực tế thì sử dụng !important cũng được.
    - Vì đồng ý với việc setting style bằng HTML nên hãy thiết kế để hạn chế sử dụng nó càng nhiều càng tốt.

* State [ `is-` ]
    - Cung cấp cho các phần tử dựa trên sự thay đổi như là `is-disabled`、`is-selected`、`is-active` . Không định nghĩa CSS đơn.

* Page（Định nghĩa chỉ sử dụng page đó）
    - Với mỗi page mà chưa điều chỉnh hoặc là chỉ định đặc tính của page thì sẽ tạo 1 file, sẽ viết toàn bộ layer vào trong file đó
    - Tùy thuộc vào project mà cũng có trường hợp muốn collect css làm thành 1 nên ko nhất thiết phải phân chia page này
    - Theo nguyên tắc, nếu như pattern giống nhau mà được sử dụng ở 2 nơi bằng 1 layer, thì hãy xem xét xem thử có thể collect bằng layer chung như  component,Project hay ko

- **Javascript** [ `ji_`,`jc_` ]
    - Sử dụng bằng việc định nghĩa DOM selector của Javascript, định nghĩa trigger. Không cho phép định nghĩa style
    - `ji_`  sẽ sử dụng ở chỗ id còn  `jc_` sẽ sử dụng ở chỗ class
    - Không sử dụng hyphen, mà sẽ định nghĩa biến số bằng Snake case của dấu phân cách gạch dưới + lowercase gọi là `jc_trigger_open_menu`

###  Nguyên tắc đặt tên layer prefix

| Prefix |              Cách sử dụng               |         Ví dụ sử dụng         |
|:------:|:-------------------------------:|:----------------------:|
|  ji_   |  Với id element là đối tượng của javascript   |  `id="ji_move_icon"`   |
|  jc_   | Với class element là đối tượng của javascript | `class="jc_move_icon"` |
|   l-   |    Layout layer（FLOCSS）     |   `class="l-header"`   |
|   c-   |   Component layer（FLOCSS）   |   `class="c-button"`   |
|   p-   |    Project layer（FLOCSS）    |  `class="p-userList"`  |
|   u-   |    Utility layer（FLOCSS）    |  `class="u-clearfix"`  |
|  is-   |  State element (element theo trạng thái thay đổi)  |  `class="is-active"`   |


## Những chỗ khó khăn trong việc thiết kế FLOCSS : Component và Project

Vấn đề của `FLOCSS` là nó phân biệt giữa `Ccomponent` và `Project` nhưng lại ko đặt ra bất kì qui tắc đặc biệt nào

Đơn vị tối thiểu là `Component`,  Block mà tái sử dụng cho việc bố trí `Component`, thì hãy thiết kế tự do theo từng project

## Xếp tầng（Viết đè）

**Cho phép OK**
- Project layer, thì sẽ viết đè Component layer

**Không được NG**
- Project layer、Component layer

Tuy nhiên, viết đề lên thì khá là phức tạp nên trên nguyên tắc sẽ giải quyết bằng `Modifier`  của `Component`

Ví dụ về việc ko được sử dụng（layer giống nhau）
```html
<div class="c-button">送信</div>
<div class="c-button"><div class="c-icon"></div>送信</div>

<div class="p-form">
  <div class="p-button"><div class="c-icon"></div>送信</div>
</div>
```
```css
/* NG */
.c-button .c-icon { }
.p-form .p-button { }
```

Ví dụ có thể được dùng（layer khác nhau）
```html
<body class="page-user">

  <div class="p-form">
    <div class="p-form_label">同意して送信して下さい</div>
    <input type="checkbox" class="c-check">確認</div>
    <div class="c-button">送信</div>
  </div>

</body>
```
```css
/* Có thể xếp tầng */
.p-form .c-button {
  margin-left: 30px;
}
.page-user .p-form { }
```


## Cấu trúc file – diretory（SCSS）

Cấu trúc file căn cứ dựa trên `FLOCSS`

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

Về cơ bản, sẽ xuất bằng app.scss nhưng việc style theo đặc tính của page (những cái ko thực hiện module hóa) thì sẽ xuất riêng bằng page_xxx.scss

Tạo 1 file cho mỗi 1 block ở directory của component、project、pages giống với ví dụ dưới đây
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

File output (ví dụ)
public/css/
    ├── app.css
    ├── page_index.css
    ├── page_login.css

```

Tùy thuộc vào việc phân chia file theo đơn vị module, mà việc quản lý các thao tác như thêm vào – xóa đi mudule theo đơn vị là page hoặc đơn vị là project thì sẽ trở nên đơn giản hơn. `utility` và `variable`,`layout` thì collect lại thành 1 file cũng được.
