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
  * CSS Cache-buster automation（Phía sau file css thêm hash)
* Package manager đề xuất dùng `yarn`
* Dự kiến thực hiện template theo theo yêu cầu phát triển
  * gulp 
    * Chỉ HTML/ CSS tĩnh (trong repo này)：
    * Wordpress
  * WebPack
    * Vue/Nuxt.js

## Cài đặt browser được yêu cầu (browserslist)
Hãy set dưới package.json cho mỗi project.
Dưới đây là các cấu hình default 

```js:package.json
...
"browserslist": [
  ">2% in JP, ie >= 11, ios_saf >= 12, Firefox ESR"
]
...
```

Browser yêu cầu xử lý có thể confirm bằng command bên dưới.
```bash
npx browserslist ">2% in JP, ie >= 11, ios_saf >= 12, Firefox ESR"
```

# Môi trường VSC Editor (Visual Source Code)

## Dùng EditorConfig để thống nhất coding style

Hệ thống để thống nhất coding style như Indent, xuống dòng,...
Editor enabled EditorConfig, nếu `.editorconfig` có trong project directory áp dụng Coding style cho tất cả file trong thư mục đó. Thêm đối tượng quản lý Git.

## Chia sẻ file cấu hình vscode trong git
Đặt folder `.vscode` và  settings.json vào Project root và share bằng git.
## VCS Extensions / Settings

### Required extensions / settings
* EditorConfig for VS Code
  * Các extension hiểu EditorConfig
* ESLint
  * Extension check tool cú pháp realtime JS
  * Không sử dụng khi code HTML/CSS, tuy nhiên đưa vào sau sẽ tốt hơn.
* stylelint
  * Extension check tool cú pháp realtime CSS
  * Vì có nhiều nên publishers cài đặt các thứ có stylelint
* Vetur, Vue 2 Snippets, vuetify-vscode
  * Cần khi code Vue.js
* WordPress Snippet
  * Cần khi code Wordpress
* SVG Viewer
  * Preview hình ảnh SVG
### Recommended extensions / settings

* SCSS IntelliSense
  * Bổ sung `variables`, `mixins`, `functions` trong SCSS
* IntelliSense for CSS class names in HTML
  * Bổ sung tên `class` trong HTML
  * Tuy nhiên nó có thể khá nặng với project lớn
* Bracket Pair Colorizer
  * (), [], {} Thay đổi màu sắc của các dấu ngoặc để dễ nhìn hơn
* zenkaku
  * Trực quan hoá space full width
* "editor.renderWhitespace": "all"
  * Trực quan hoá space halfwidth
* Trailing Spaces
  * Trực quan hoá trường hợp space halfwidth nằm cuối dòng
* "editor.renderIndentGuides": true
  * Vertical line của indent hiện tại
* Excel Viewer, Rainbow CSV
  * Extension dễ đọc text của CSV
* ftp-sync
  * Upload ftp khi save

# Môi trường build SASS(SCSS)

## Môi trường static

Có môi trường sample trong `sample_static`

## Môi trường WordPress

todo

## Môi trườnd Vue/Nuxt

todo

# Debug
* Đảm bảo kiểm tra các device thực tế như smartphones
  * Nếu không có thời gian, sử dụng cloud [Browser Stack](https://www.browserstack.com/) (Đã đăng ký) Khi sử dụng bằng localIP, đặt phần mở rộng dưới đây vào Chrome
  https://chrome.google.com/webstore/detail/browserstack-local/mfiddfehmfdojjfdpfngagldgaaafcfo?hl=ja

  * Nếu trong cùng wifi network, có thể kiểm tra dùng local web trên smartphone.