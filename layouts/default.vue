<script lang="ts" setup>
import "normalize.css";
import Upheader from "~/components/headers/upheader.vue";
import Downheader from "~/components/headers/downheader.vue";
import Popupcookie from "@/components/popupcookie.vue";
useHead({
  title: "Trend Dad, Acquire the latest trends you're looking for.",
  meta: [
    {
      name: "description",
      content:
        "Get the latest stash items with trend dad, buy products and stay trending. We sell products that are trending on tiktok. Hide valuable items directly.",
    },
  ],
});
</script>

<template>
  <div class="min-h-screen font-inter w-screen">
    <ClientOnly><Upheader /></ClientOnly>
    <ClientOnly><Downheader /></ClientOnly>
    <slot />
    <Footer />

    <ClientOnly><Cookie /></ClientOnly>
    <ClientOnly><Popupcookie /></ClientOnly>
  </div>
</template>
