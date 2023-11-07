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

// useHead({script: [`<script>
// !function (w, d, t) {
//   w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};

//   ttq.load('CL54V43C77UCAD77M3S0');
//   ttq.page();
// }(window, document, 'ttq');
// </script>`]})

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
        <div class="md:w-40 w-0"></div>
        <div>
          <div class="flex">
            <h1
              class="text-black md:text-5xl text-sm text-purple-300 border border-groove p-4 border-gray-300 font-bold drop-shadow-xl shadow-black font-400 font-satoshi"
            >
              The number
              <span class="md:text-6xl text-xl text-sky-500">#1</span> stash
              store
            </h1>
            <div class="flex m-2 flex-col items-center">
              <nuxt-img src="/gold.webp" alt="gold" :height="43" :width="30" />
              <span class="text-xs font-semibold">2023</span>
            </div>
          </div>
          <div class="text-xs font-bold w-5/6 md:text-2xl text-black p-1.5">
            Stack
            <span class="text-sky-400 md:text-3xl text-xl font-bold"
              >valuable</span
            >
            items inside our products and be safe for intruders, festival guards
            or (unwanted) guests.
          </div>
        </div>
        <div>
          <NuxtLink
            to="/#products"
            class="border hidden w-25 text-center md:flex xl:flex-shrink-0 border-groove border-purple-500 transition hover:bg-purple-500 py-1 px-2 md:text-xl text-xs no-underline bg-purple-400 cursor-pointer decoration-none text-white"
            >Shop-now</NuxtLink
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
