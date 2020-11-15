# **ARCHIPELAGO HTML/CSS STYLE GUIDE**

# Document Structure

https://github.com/arcplg/html-css-style-guide

* **Style guide overview (This file)**
  * Mở đầu và tóm tắt tổng thể
  * Các mục mà PM, Designer cũng phải confirm
* **[HTML Guide: README_HTML.md](vn_README_HTML.md)**
  * Mô tả về HTML, cấu trúc nhìn từ quan điểm SEO
* **[STYLE(CSS) Guide: README_STYLE.md](vn_README_STYLE.md)**
  * Mô tả về CSS, thiết kế cấu trúc (Structural Design)
* **[Development environment guide: README_OPS.md](vn_README_OPS.md)**
  * Editor setting, Development ENV Architecture
  * Trong sample_static có sample và [README.md](sample_static/README.md)
* **[Coding setting sheet](https://docs.google.com/spreadsheets/d/16MCcsQESgk16r9Nh8RwrPe3L3d1ahOWRtP2I8nQHuqw/edit#gid=1764403400)**
  * Trước khi yêu cầu và thực hiện cần checksheet để confirm (spreadsheet)

# Mở đầu

Document này định nghĩa những guide tiêu chuẩn và những điểm chắc chắn sẽ yêu cầu khi thực hiện code HTML/CSS.
Xin hay tạo coding setting document cho mỗi project và chia sẻ giữa PM/Designer/Dev.

Thực hiện thiết kế CSS một cách rõ ràng, có thể tái sử dụng và bảo trì.

* Tính rõ ràng
Chú ý đến mô tả, cấu trúc dễ đọc dễ hiểu.
* Tính tái sử dụng
Chú ý đến việc có thể tạo component mới từ các phần hiện tại một cách đơn giản.
* Tính bảo trì
Chú ý đến việc thiết kế có thể thêm, update component mới một cách đơn giản

**Hướng dẫn này chỉ là hướng dẫn và không cần thiết phải tuân thủ hết tất cả.
Lựa chọn cách thực hiện tối ưu dựa trên quy mô và chi phí của dự án.**


# Các topic cần ghi nhớ
Chi tiết tham khảo các file sau:

## [HTML](vn_README_HTML.md) Topic
  * Mô tả chỗ `Sematic`
    * Đặt tên lớp dựa trên mục đích và vai trò, không dựa trên cách nhìn hay hành động.
    * Nếu có thể thì mô tả băng tag cấu trúc HTML5 (header, nav, footer, section, article, etc...)
  * `<h1>` là 1 element trong trang và về nguyên tắc ở top page sử dụng cho tên site hay xung quanh logo icon, page khác set cho header title.
  * Thứ tự header phải tuân thủ quy tắc h1 h2 h3 ...
  * Set meta session
    * Set title, description, viewport cho phù hợp
    * Phải chỉ định OGP（Open Graph Protocol）. og:type chuyển đổi Top và subordinates (cấp dưới)
  * Image có thể chuyển sang dạng vector thì cố gắng lưu dưới dạng SVG
  * Về nguyên tắc, sử dụng `_` (under score) làm dấu phân cách cho các tệp tham chiếu như image, CSS, JS (` -` NG)
  * Đặt thuộc tính alt vào image (không bao gồm các hình ảnh vô nghĩa như background image)
  * Icon cố gắng sử dụng WebIconFont (Trao đổi với designer, có lúc không cần phải design)
  * Các biện pháp cache CSS/JS
    * Nếu có thể thì thêm các parameter duy nhất sau tên file sẽ include để khách hàng (user) không cần phải tải lại trình duyệt.
    ex.`file.css?v=202010090954`
    * Nếu có thể tích hợp HTML template engine hoặc php thì hãy tự động hoá

## [CSS / STYLE](README_STYLE.md) TOPIC
  * Không dùng id nhiều nhất có thể (Chỗ CSS selector không được dùng #id, nếu dùng bằng js thì OK)
  * CSS selector nguyên tắc là set 1 tầng. Do đó, sẽ mô tả trong (cải tiến) BEM 
    ```CSS
      .menu .button {} // NG
      .menu_button {} // OK
    ```
  * CSSの!important về nguyên tắc là không được
  * HTML Tag không dùng trực tiếp trong CSS, phải set class

## [Develop/Env TOPIC](README_OPS.md)
* Editor dùng `Visual Studio Code`(VSC)
  * Mong muốn commit dùng chung file setting VSC chẳng hạn như auto format setting
  * Nhiều người sử dụng, quan điểm cá nhân là editor tốt nhất
  * Bản cloud cũng đã được release, sau này có thể sẽ set với môi trường phát triển
* Khi bắt đầu thực hiện, nếu có thể thì bắt đầu từ template/môi trường phát triển
* Điều chỉnh format nếu có thể thì sử dụng auto format thay vì làm thủ công
  * Indent 2 dấu cách
  * Bender Prefix cố định browser không viết thủ công mà sử dụng môi trường phát triển để mô tả tự động,...
* Phải thông qua lint commit ở tình trạng không có lỗi (Tự động hoá bằng VSC, xem hướng dẫn môi trường phát triển)
* Phải confirm thực tế trên device như smartphone...
  * Nếu không có thời gian, sử dụng [Browser Stack](https://www.browserstack.com/) cloud（Đã đăng ký）. Nếu dùng localIP thì hãy đưa tiện ích mở rộng này vào Chrome.
  https://chrome.google.com/webstore/detail/browserstack-local/mfiddfehmfdojjfdpfngagldgaaafcfo?hl=ja


# Confirm spec mỗi project
Tổng hợp những việc dưới đây trong sheet setting coding.

## Target ENV/Test browser
Trước khi coding cần xác nhận rõ browser, thiết bị cần phải thực hiện như: Windows, Machintosh, Smartphone,...
Lưu ý default font cho mỗi thiết bị（Xem bên dưới）

Cứ thêm browser phải thực hiện sẽ phát sinh thêm chi phí.
Nhất là, `Microsoft Internet Explorer 11` sẽ tốn khoản phí đặc biệt, nên nếu có thể thì hạn chế thực hiện cho browser này, hoặc là nếu có triển khai thì cần trao đổi với PM & KH để xác minh tối thiểu.

* Standard target（2020/10/08 now）
  * Windows ENV
    * Microsoft Internet Explorer 11
    * Microsoft Edge latest version
    * Google Chrome latest version
    * Mozilla Firefox latest version
  * Macintosh ENV
    * Safari latest version
    * Google Chrome latest version
    * Mozilla Firefox latest version
  * iOS ENV
    * Safari latest version after iOS 12
    * Google Chrome latest version after iOS 12
  * Android ENV
    * Google Chrome latest version from Android ver.6.0
* Standard main test target
  * Windows ENV
    * Microsoft Internet Explorer 11
    * Google Chrome latest version
  * Macintosh ENV
    * Google Chrome latest version
  * iOS ENV
    * iOS 12以降の Safari latest version
  * Android ENV
    * Google Chrome latest version from Android ver.6.0


## Responsive/Breakpoint spec
Định nghĩa chỉ định chiều rộng giữa các breakpoint
Chú ý: responsive và chiều rộng có thể thay đổi không sẽ nói và quyết định riêng

### Screen size reference
* XPERIA : `360` x 640
* Pixel3XL : `480` x 987
* GLAXYS10 : `480` x 1013
* iPhone 678 : 375 x 667
* iPhone XR/XS : 414 x 896
* iPhone 12/pro : 390 x 884
* iPhone pro max : 428 x 926
* iPad/mini : 768 x 1024
* iPad Air : 834 x 1112
* iPad Pro 11" : 834 x 1194
* iPad Pro 12.9" : 1024 x 1366
* iPad/mini/Air SplitView : 320 x 1024

### Breakpoint standard setting (2020/10/08 now)
Khuyến cáo trường hợp không có yêu cầu từ phía KH, tuỳ trường hợp hãy thay đôi `Phần này` như bên dưới
[sample site](https://arcplg.github.io/html-css-style-guide/layout1.html)

* Trường hợp 1 breakpoint 2 chế độ (Hầu hết các trường hợp sẽ thế này)
  * Breakpoint
    * Mobile đến `768px` : PC từ `769px`
  * Thông số chiều rộng
    * Mobile `Có thể biến đổi chiều rộng 100%`
    * Kết hợp PC dưới đây
      a) `1100px` chiều rộng cố định toàn màn hình (dưới cái này cho show scroolbar ngang như dưới)
		  a+) `xxxpx` min-width cố định dưới, chiều ngang có thể thay đổi, cố định có thể từ đó trở lên
		  a+) `xxxpx` max-width có thể thay đổi, cố định giống trên, cố định từ đó trở lên
* Trường hợp 2 breakpoint 3 mode
  * Breakpoint
    * Mobile đến `480px` : Tablet từ `481px` đến `896px` : PC từ `897px`
  * Spec chiều rộng
    * Mobile `Width có thể thay đổi 100%` : Tablet `Width có thể thay đổi 100%` : PC `Width cố định 1100px`(Tham khảo ở trên)

Chiều ngang cố định 1100px, chỉ định tuỳ theo mỗi project, có trường hợp biến động thì size nhỏ nhất của smartphone (360px)


## Font
* Hãy nhận font list sử dụng cho tất cả page (+Variation bold của text
* Trường hợp chỉ định web font ở ngoài, hãy cố gắng sử dụng `google font`  (（Vì có thể load 1 phần）
  Ví dụ:
  ```
  https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,500,700&display=swap
  ```
* Nếu được yêu cầu thì không thể tránh khỏi, tuy nhiên Web font tiếng Nhật ở ngoài size to nên cố gắng không sử dụng, nếu vẫn dùng thì một font thì tốt hơn.


### Font standard settings (2020/10/08 now)
Nếu không có chỉ định gì đặc biệt thì setting như dưới đây cũng ok.

```CSS
body {
  font-family:
    "Helvetica Neue",
    Arial,
    "Hiragino Kaku Gothic ProN",
    "Hiragino Sans",
    Meiryo,
    sans-serif;
}
```
Nếu muốn sử dụng Yu Gothic, sẽ phát sinh vấn đề font chữ sẽ bị mỏng trên Chrome của Windows nên phải có giải pháp thực hiện. Có một cách làm là thêm Medium vào tên font Windows giống như ví dụ dưới đây nhưng tuỳ dự án hãy tìm thêm có giải pháp nào khác không.
```CSS

body {
  font-family:
    "游ゴシック体",
    YuGothic,
    "游ゴシック Medium",
    "Yu Gothic Medium",
    "游ゴシック",
    "Yu Gothic",
    "メイリオ",
    sans-serif;
}
```

## Favicon
Quyết định hình
* 16x16,file `.ico` đã set 32x32 (Required)
* icon được sử dụng trên home screen của Android hay safari của iPhone/iPad (180x180, Optional)

## OGP
Quyết định hình `og:image`
* Nguyên tắc trên 600 x 315 (Chiều rộng trên 600)
* Trường hợp yêu cầu xử lý cho các thiết bị có độ phân giải cao thì gấp đôi trên 1200 x 630

## Web icon font
* Icon sử dụng trên Website nếu có thể thì cố gắng sử dụng Web icon font và không dùng hình ảnh
* Trường hợp sử dụng Web icon font hãy cố gắng chọn từ 1 set
* Hơn nữa nếu có thể, hãy xử lý để chỉ load icon sẽ sử dụng

## Quyết định có cần xử lý AMP không


# Design comp (Design Comprehensive Layout)
Sau khi share project spec trên, hãy thực hiện design.
Ngoài ra nếu có thể, hãy thực hiện bằng AdobeXD.

## Các yêu cầu dành cho PM, Designer

### Liên quan đến việc convert image
* Phần hình ảnh hãy chỉ định một cách rõ ràng. Nếu có thể, hãy xem xét yêu cầu file size hỗ trợ size x2
* Nếu hình ảnh có thể vector hoá bằng hình học (không phải ảnh chụp) hãy yêu cầu có thể convert thành hình vector không
* Text giả định thành hình ảnh hoá thì không để nguyên font mà vector hoá nếu có thể （Vì font có thể thay đổi khi mở file design hoặc thực hiện bất kỳ thao tác nào）
* Có xử lý cho WebP không

### Responsive/Other
* Có bản smartphone design responsive không. Nếu không hãy yêu cầu overview làm như thế nào.
* Table design responsive sẽ thay thôi cách làm rất nhiều ví dụ scroll ngang, vertical alignment nên hãy xác định ngay từ đầu.


