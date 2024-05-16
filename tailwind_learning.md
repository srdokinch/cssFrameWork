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

[Loop使う方法](https://tailwindcss.com/docs/reusing-styles#loops)
さらにはmapを使う方法もあるみたい、これはnavとかで使えそうなイメージ

##ホバー時のスタイルについて
hoverについての公式ドキュメントは[ここ](https://tailwindcss.com/docs/hover-focus-and-other-states#hover)
以下のように書くことでその要素をホバーしたときにどのような挙動になるか決めれる。
```
<div class="bg-black hover:bg-white ...">
  <!-- ... -->
</div>
```
ただこれだと地域情報で使っているaタグをホバーするとその子要素のimgをopacityかけるcssが使えないので```@apply```を使用する。
Tailwindではbase > components > utilities の順でcssの優先度がつけれるらしい
```
<a href="hoge">
  <img class="img-hover" src="sample.png">
</a>

.img-hover{
  @apply hover:oapacity-8;
}
```

##よくある矢印表示について
以下のようなパーツを作成したいときに右側にある矢印をどう作るか迷った話
![alt text](<スクリーンショット 2024-05-16 11.38.26.png>)
個人的にすぐ思いついた実装方法は
- 擬似要素を使いcssで矢印を作成する
- 矢印を画像で書き出して背景画像として組み込む

ただ、そうすると独自のcssが多くなってしまい個人的にあまりtailwindの良さを活かしきれていないのかなと思ったので今回は以下で実装してみることにしました。
- 画像をsvgでマークアップ側に記述する
```
<a class="text-main-colour border-solid border rounded-sm border-main-colour w-full block" href="#">
  <span>ブログ一覧</span>
  <span>
    <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.5 4L0.75 7.89711V0.102886L4.5 4Z" fill="#24A8BF"/>
    </svg>
  </span>
</a>
```
Tailwindで作られているサイトを参考にしてみたが、同じようにsvgで構築する方法が多かった。
参考サイト1はニュースセクションの「ニュース一覧をみる」のボタンがsvgの実装
参考サイト2はNewsセクションの各アイテムの右にボタンがありその矢印で使われている
[参考サイト1](https://corp.infomart.co.jp/)
[参考サイト2](https://cipicipi.jp/)




##メモ
✍️Tailwindのクラスを付与するときに一応規則性がある方がよい（特にチームなどで使用する場合）
並べ方の規則は「カスタムクラス > ベースレイヤークラス > コンポーネントクラス > ユーティリティクラス」の順番で記述するといいらしい。
そしてそれを規則的にしてくれるのが[Prettier plugin for Tailwind CSS](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier)
これを使うといい感じにしてくれるらしい

✍️当たり前だけどクラス名が多いので慣れるまで少し大変かも。チートシート必須だが普段からemmetを使っていると似ているところが多々あるので慣れるスピードは早い。
