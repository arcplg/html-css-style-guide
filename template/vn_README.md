# SCSS Build Setup

# Môi trường cần thiết để Build
``` bash
# Version khi xây dựng môi trường
# node = 12.18.2
# npm = 6.14.5
# yarn = 1.22.4

# Package manager của project này không dùng npm mà dùng yarn
# Global install yarn bằng npm
$ npm install -g yarn
```

gulp sẽ được install trong local nên không cần global

# Build

Sau khi move sang folder này

``` bash
# install modlule
$ yarn install
```


# Run gulp

Nếu chỉ local install thì không command gulp trực tiếp mà run thông qua yarn script

``` bash
#Build + server + file monitoring
$ yarn gulp

# Only build
$ yarn gulp:sass
```
