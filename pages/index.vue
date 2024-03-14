<template>
    <Header />

    <!-- main-visual -->
    <div class="main-visual">
      <picture>
        <source media="(min-width: 768px)" srcset="~/assets/images/pc_main-visual.jpg">
        <img src="~/assets/images/sp_main-visual.jpg" alt="複数の青いカップのコーヒー">
      </picture>
    </div>
    <!-- /main-visual -->

    <Nav />

    <main class="content">

      <!-- concept -->
      <section class="concept">
        <div class="container">
          <div class="img">
            <img src="~/assets/images/concept.jpg" alt="青いカップのコーヒー" width="750" height="759">
          </div>
          <div class="desc">
            <div class="subtitle">Concept</div>
            <h2 class="title">心静かにコーヒーを</h2>
            <div class="text">
              <p>
                立ち止まって、<br>
                空の青さを眺めて、<br>
                一息つきましょう。</p>
            </div>
          </div>
        </div>
      </section>
      <!-- /concept -->

      <!-- blog -->
      <section class="blog">
        <div class="container">
          <h2 class="heading">blog<span class="subtitle">ブログ</span></h2>
          <div class="list">
            <div class="item">
              <a href="#">
                <div class="img"><img src="~/assets/images/thumbnail01.jpg" alt="青いトラック" width="700" height="357" /></div>
                <div class="title">コーヒーカー始めました。</div>
                <div class="date">2030.08.08</div>
              </a>
            </div>
            <div class="item">
              <a href="#">
                <div class="img"><img src="~/assets/images/thumbnail02.jpg" alt="牛乳" width="700" height="357" /></div>
                <div class="title">濃厚クリーミーなミルクをどうぞ</div>
                <div class="date">2030.08.05</div>
              </a>
            </div>
            <div class="item">
              <a href="#">
                <div class="img"><img src="~/assets/images/thumbnail03.jpg" alt="音楽アプリ" width="700" height="357" /></div>
                <div class="title">Sky Coffeeのオリジナル曲が完成！無料ダウンロード可能です。</div>
                <div class="date">2030.08.02</div>
              </a>
            </div>
            <div class="item">
              <a href="#">
                <div class="img"><img src="~/assets/images/thumbnail04.jpg" alt="山々" width="700" height="357" /></div>
                <div class="title">ハイキング用のコーヒーを販売中です。</div>
                <div class="date">2030.07.28</div>
              </a>
            </div>
            <div class="item">
              <a href="#">
                <div class="img"><img src="~/assets/images/thumbnail05.jpg" alt="青とピンクのグラデーション" width="700" height="357" /></div>
                <div class="title">ショップの壁を塗ってみました。</div>
                <div class="date">2030.07.27</div>
              </a>
            </div>
            <div class="item">
              <a href="#">
                <div class="img"><img src="~/assets/images/thumbnail06.jpg" alt="コーヒーと手帳" width="700" height="357" /></div>
                <div class="title">ブログをはじめました。</div>
                <div class="date">2030.07.26</div>
              </a>
            </div>
          </div>
          <a href="#" class="btn">
            ブログ一覧
          </a>
        </div>
      </section>
      <!-- /blog -->

    </main>

    <Footer />

</template>