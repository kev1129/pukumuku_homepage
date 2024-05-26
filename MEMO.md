
## Update from v2

* V2は外付HDDにて保管
* Nuxtのバージョンを@3->@2にダウングレードしたらエラーが解消された
  * エラーにてNuxtとVuetityの互換性が悪いとでる
  * 理想はNuxtを＠3にアップデートし、それに準じたVuetifyのバージョンを入れる。ただ、レイアウトがVuetify v1系で完成していたため、追加で編集する必要を避けるためNuxtのダウングレードするのがいい。
  * @nuxtjs/vuetify v0.5.7はNuxt.js v2.x向けの設計らしい
  * Vuetify v1.5.2はVue.js＠2と互換性がある→（Nuxtを＠2に変更）`npm install nuxt@2` --> `npm install`

## tasks

- [ ] favicon [ref](https://qiita.com/katu_/items/d3a49de850ac277a78de)
- [ ] font size of menu

## How to deploy to netify

* Netifyでのコマンド`npm run build`
* distディレクトリーは`.gitignore`で隠れファイルに指定されているため、それを解除する必要がある

## if you want to update contents

1. update contents in `run dev`
2. ~~ --> `git push origin master`
3. netify automatically update (catch HEAD of the master branch)

## git (for copy)

[github link pukumuku_v3](https://github.com/kev1129/pukumuku_v3)

```bash
# command list
$ git add -A
$ git commit -m "comment"
$ git push origin master

```