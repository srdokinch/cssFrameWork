#Tailwindについて勉強したこと、メモ

BootstrapなどのFWはコンポーネントが事前に用意されているのでデザインを効率的に行うことができる反面同じデザインになることが多い。その反面Tailwindはutility classを使用しデザインするためデザイン性の高いサイトが作成できる。

Tailwindに登録されていない色などを利用したい場合は設定ファイルに登録すると使用できるようになる。また今のバージョンだと設定ファイルに記載することなく```text-[#121212]```といった固定値も設定できる。


とりあえず[このサイト](https://webdesigner-go.com/coding-practice/easy/)の入門編のHTMLを使ってデザイン通りにtailwindで仕上げてみる。
https://webdesigner-go.com/sky-coffee/


##ヘッダー作成
Tailwindはモバイルファーストで特に指定がない場合はモバイルの挙動を表すすことになっているので、まずはスマホ側から作成
スマホを作成したらPCを作成するが、PC版は```md:w-auto```のように記載すると768px以上のスタイルを当てれる。
Paddingの値が50pxなのでそれを指定したいがtailwindはpx指定ができないのかな....?
[こんな記事](https://zenn.dev/akakuro/articles/edf427e9f629ef)を見つけた。

##フォント指定
フォントは```tailwind.config.js```で以下のように指定する。
以下のヒラギノを使いたいのであればクラス名のところに```font-hiragino```といったように指定すると該当箇所にフォントが指定される。
```
fontFamily: {
  hiragino: [
    'Hiragino Sans',
    'ヒラギノ角ゴシック',
  ],
},
```
Googleフォントやメディアクエリと合わせる技は[こっち](https://mai.kosodante.com/tailwindcss-fontfamily/)に書いてあった。

##メモ
Tailwindのクラスを付与するときに一応規則性がある方がよい（特にチームなどで使用する場合）
並べ方の規則は「カスタムクラス > ベースレイヤークラス > コンポーネントクラス > ユーティリティクラス」の順番で記述するといいらしい。
そしてそれを規則的にしてくれるのが[これ](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier)
```Prettier plugin for Tailwind CSS```を使用すると