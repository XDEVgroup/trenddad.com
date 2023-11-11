<script lang="ts" setup>
import Products from './../components/products.vue';

definePageMeta({
  layout: "default",
});

useHead({
  title: `Trend Dad, Trending stash products `,
  meta: [
    {
      name: "description",
      content: `Trending stash products to hide cash or expensive items.`,
    },
  ],
});
</script>

<template>
  <div>
    <div class="relative h-80  flex items-center justify-center">
      <nuxt-img
        :height="500"
        src="/image4.png"
        alt="image"
        class="object-cover object-center absolute h-80 z-10 w-screen bg-gradient-to-t from-white to-transparent"
      />
      <div
        class="absolute h-80 z-10 flex items-center justify-center w-screen bg-gradient-to-t from-white/90 to-transparent"
      >
        <span class="font-melodrama text-5xl tracking-6 text-black text-shadow"
          >TRENDING</span
        >
      </div>
    </div>
   <Products/>
  </div>
</template>
