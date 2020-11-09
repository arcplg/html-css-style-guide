# SCSS Build Setup

# Buildに必要な環境
``` bash
# 環境構築時のversionは
# node = 12.18.2
# npm = 6.14.5
# yarn = 1.22.4

# 本プロジェクトのパッケージマネージャーは npm ではなく yarn を利用します。
# npm で yarn をグローバルインストール
$ npm install -g yarn
```

gulpはローカルにインストールされますので、グローバルは必要ありません。

# Build

このフォルダに移動してから

``` bash
# install modlule
$ yarn install
```


# Run gulp

ローカルインストールのみだと、直接gulpコマンドではなく、yarn script 経由で起動します。

``` bash
#ビルド+サーバー＋ファイル監視
$ yarn gulp

# ビルドのみ
$ yarn gulp:sass
```
