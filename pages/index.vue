<script lang="ts" setup>
definePageMeta({
  layout: "default",
});
const hoverImage = ref(false);
const { data, error, refresh } = await useAsyncData("getProducts", () =>
  $fetch("/api/getProducts", {
    method: "POST",
    body: {
      cartItems: [],
    },
  })
);
const products = data.value?.data;
</script>

<template>
  <div>
    <div
      @mouseover="hoverImage = true"
      class="relative lg:h-40 h-40 w-screen bg-black flex items-center justify-center"
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
    <div class="flex flex-col px-2 md:px-40 py-6">
      <div class="flex items-end md:gap-0 gap-10 justify-between">
        <div class="w-40"></div>
        <div>
          <div class="flex">
            <h1
              class="text-black md:text-5xl text-sm text-purple-300 border border-groove p-4 border-gray-300 font-bold drop-shadow-xl shadow-black font-400 font-satoshi"
            >
              The number #1 stash store
            </h1>
            <div class="flex flex-col items-center">
              <nuxt-img src="/gold.webp" alt="gold" :height="43" :width="30" />
              <span class="text-xs font-bold">2023</span>
            </div>
          </div>
          <span class="text-xs md:text-xl text-black p-1.5"
            >Hide <span class="text-yellow-400 font-bold">valuable</span> items
            inside our products and be safe.</span
          >
        </div>
        <div>
          <NuxtLink
            to="/#products"
            class="border hidden md:flex border-groove border-purple-500 transition hover:bg-purple-500 py-1 px-2 md:text-xl text-xs no-underline bg-purple-400 cursor-pointer decoration-none text-white"
            >Shop now</NuxtLink
          >
        </div>
      </div>
    </div>
    <div id="products" class="flex flex-col items-center md:mt-6 mt-0 px-4">
      <div
        class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6"
      >
        <div
          class="flex relative justify-center w-80"
          :key="i"
          v-for="(item, i) in products"
        >
          <product-block
            :name="(item.name as string)"
            :image="(item.image as string)"
            :id="item.id"
            :price="Number(item.price)"
            :descriptionTitle="(item.descriptiontitle as string)"
          />
        </div>
      </div>
    </div>
  </div>
</template>
