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

##クラスの使い回しについて
以下のようなHTMLがありimgのスタイルが同じなので使いまわしたい場合どうするか公式ドキュメントに書いてあった。
```
<div>
  <div class="flex items-center space-x-2 text-base">
    <h4 class="font-semibold text-slate-900">Contributors</h4>
    <span class="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">204</span>
  </div>
  <div class="mt-3 flex -space-x-2 overflow-hidden">
    <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
    <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
    <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt=""/>
    <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
    <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
  </div>
  <div class="mt-3 text-sm font-medium">
    <a href="#" class="text-blue-500">+ 198 others</a>
  </div>
</div>
```



##メモ
✍️Tailwindのクラスを付与するときに一応規則性がある方がよい（特にチームなどで使用する場合）
並べ方の規則は「カスタムクラス > ベースレイヤークラス > コンポーネントクラス > ユーティリティクラス」の順番で記述するといいらしい。
そしてそれを規則的にしてくれるのが[Prettier plugin for Tailwind CSS](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier)
これを使うといい感じにしてくれるらしい

✍️当たり前だけどクラス名が多いので慣れるまで少し大変かも。チートシート必須だが普段からemmetを使っていると似ているところが多々あるので慣れるスピードは早い。

