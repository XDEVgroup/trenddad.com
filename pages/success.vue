<script lang="ts" setup>
import { useCartStore } from "../stores/cart-store";
const store = useCartStore();
const cartItems: Ref<number[]> = ref([]);
cartItems.value.push(...store.cart);

onMounted(() => {
  store.cart = [];
  setTimeout(() => {
    navigateTo("/");
  }, 4000);
});

useHead({
  title: `Trend Dad, Success`,
  meta: [
    {
      name: "description",
      content: `Success payment`,
    },
    
  ],
  script: [`<script>
!function (w, d, t) {
  w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};

  ttq.load('CL54V43C77UCAD77M3S0');
  ttq.page();
}(window, document, 'ttq');
</script>"})
</script>`]
});
</script>

<template>
  <div class="h-screen w-screen flex justify-center">
    <span class="mt-20"
      >Your order was succesfully placed, you will be redirected to the home
      page..</span
    >
  </div>
</template>
