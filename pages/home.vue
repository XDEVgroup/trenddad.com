<script lang="ts" setup>
import Products from './../components/products.vue';


definePageMeta({
  layout: "default",
});
const hoverImage = ref(false);

</script>
<template>
  <div>
    <div
      @mouseover="hoverImage = true"
      class="relative lg:h-40 h-40 w-screen bg-sky-900 flex items-center justify-center"
    >
      <nuxt-img
        v-if="!hoverImage"
        :height="400"
        :width="400"
        :quality="100"
        class="lg:h-40 h-40 object-cover md:w-10/12 w-full"
        src="/banner.webp"
        alt="dadbanner"
      />
      <nuxt-img
        v-else
        :height="400"
        :width="400"
        :quality="40"
        class="lg:h-40 h-40 object-cover md:w-10/12 w-full"
        src="/banner.gif"
        alt="dadbanner"
      />

      <div
        class="absolute lg:h-40 h-40 z-10 w-full bg-gradient-to-t from-white/30 opacity-100 to-transparent"
      ></div>
    </div>
    <div class="flex bg-sky-900 flex-col px-2 md:px-40 py-6">
      <div class="flex items-end md:gap-0 gap-10 justify-between">
        <div class="md:w-40 w-0"></div>
        <div>
          <div class="flex">
            <h1
              class=" md:text-5xl text-sm text-white border border-groove p-4 border-gray-300 font-bold drop-shadow-xl shadow-black font-400 font-satoshi"
            >
              The number
              <span class="md:text-6xl text-xl text-yellow">#1</span> stash
              store
            </h1>
            <div class="flex m-2 flex-col items-center">
              <!-- <nuxt-img src="/gold.webp" alt="gold" :height="43" :width="30" /> -->
              <span class="text-xl text-white font-semibold">2023</span>
            </div>
          </div>
          <div class="text-xs font-bold w-5/6 md:text-2xl text-white p-1.5">
            Stack
            <span class=" md:text-3xl text-xl font-bold"
              >valuable</span
            >
            items inside our products and be safe for intruders, festival guards
            or (unwanted) guests.
          </div>
        </div>
        <div>
          <NuxtLink
            to="/home#products"
            class="border hidden w-25 text-center md:flex xl:flex-shrink-0 border-groove border-black transition hover:bg-black py-1 px-2 md:text-xl text-xs no-underline bg-slate-900 cursor-pointer decoration-none text-white"
            >Shop-now</NuxtLink
          >
        </div>
      </div>
    </div>
   <Products/>
    <div id="reviews" class="pt-20">
     <div class="md:w-3/6 w-scree p-6">
      <h2 class="font-inter text-4xl">Buyer reviews</h2>
      
      <ProductReviews /></div>
    </div>
  </div>
</template>
