<template>
    <Header />

    <!-- main-visual -->
    <div class="main-visual">
      <picture>
        <source media="(min-width: 768px)" srcset="~/assets/images/pc_main-visual.jpg">
        <img class="w-full h-auto" src="~/assets/images/sp_main-visual.jpg" alt="複数の青いカップのコーヒー">
      </picture>
    </div>
    <!-- /main-visual -->

    <Nav />

    <main class="content mx-5 font-hiragino md:mx-40">

      <!-- concept -->
      <section class="concept">
        <div class="container md:flex">
          <div class="img">
            <img src="~/assets/images/concept.jpg" alt="青いカップのコーヒー" width="750" height="759">
          </div>
          <div class="desc py-8 px-5">
            <div class="subtitle">Concept</div>
            <h2 class="title text-main-font text-2xl font-semibold pt-4 pb-5 tracking-wider">心静かにコーヒーを</h2>
            <div class="text leading-7 font-light">
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
          <div class="list md:flex md:flex-wrap">
            <card />
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
