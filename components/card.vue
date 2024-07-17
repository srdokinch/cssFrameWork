<script setup>
// カード情報
const cards = [
  {
    id: 1,
    imageUrl: '/images/thumbnail01.jpg',
    altText: '青いトラック',
    title: 'コーヒーカー始めました。',
    date: '2030.08.08',
    href: '#',
  },
  {
    id: 2,
    imageUrl: '/images/thumbnail02.jpg',
    altText: '牛乳',
    title: '濃厚クリーミーなミルクをどうぞ',
    date: '2030.08.05',
    href: '#',
  },
  {
    id: 3,
    imageUrl: '/images/thumbnail03.jpg',
    altText: '音楽アプリ',
    title: 'Sky Coffeeのオリジナル曲が完成！無料ダウンロード可能です。',
    date: '2030.08.02',
    href: '#',
  },
  {
    id: 4,
    imageUrl: '/images/thumbnail04.jpg',
    altText: '山々',
    title: 'ハイキング用のコーヒーを販売中です。',
    date: '2030.07.28',
    href: '#',
  },
  {
    id: 5,
    imageUrl: '/images/thumbnail05.jpg',
    altText: '青とピンクのグラデーション',
    title: 'ショップの壁を塗ってみました。',
    date: '2030.07.27',
    href: '#',
  },
  {
    id: 6,
    imageUrl: '/images/thumbnail06.jpg',
    altText: 'コーヒーと手帳',
    title: 'ブログをはじめました。',
    date: '2030.07.26',
    href: '#',
  },
];
</script>

<template>
  <ul class="md:grid md:gap-8 md:grid-cols-3">
    <li v-for="card in cards" :key="card.id" class="mb-5">
      <a :href="card.href">
        <div>
          <img :src="card.imageUrl" :alt="card.altText" class="md:img-hover" />
        </div>
        <div class="ms:text-sm font-semibold pt-3 pb-1.5">{{ card.title }}</div>
        <div class="text-xs">{{ card.date }}</div>
      </a>
    </li>
  </ul>
</template>