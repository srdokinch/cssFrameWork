<template>
  <Header />

  <!-- main-visual -->
  <div>
    <picture>
      <source media="(min-width: 768px)" srcset="~/assets/images/pc_main-visual.jpg">
      <img class="w-full h-auto" src="~/assets/images/sp_main-visual.jpg" alt="複数の青いカップのコーヒー">
    </picture>
  </div>
  <!-- /main-visual -->

  <Nav />

  <main class="mx-5 font-hiragino md:mx-40">

    <!-- concept -->
    <section>
      <div class="md:flex">
        <div>
          <img src="~/assets/images/concept.jpg" alt="青いカップのコーヒー" width="750" height="759">
        </div>
        <div class="py-8 px-5">
          <div>Concept</div>
          <h2 class="text-main-colour text-2xl font-semibold pt-4 pb-5 tracking-wider">心静かにコーヒーを</h2>
          <div class="leading-7 font-light">
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
    <section>
      <div>
        <h2>blog<span>ブログ</span></h2>
        <ul class="md:grid md:gap-8 md:grid-cols-3">
          <card />
        </ul>
        <a class="text-main-colour border-solid border rounded-sm border-main-colour w-full block relative p-4 text-center" href="#">
          <span>ブログ一覧</span>
          <span class="absolute bottom-[45%] right-6">
            <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.5 4L0.75 7.89711V0.102886L4.5 4Z" fill="#24A8BF"/>
            </svg>
          </span>
        </a>
      </div>
    </section>
    <!-- /blog -->
    
  </main>

  <Footer />
</template>