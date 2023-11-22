<script lang="ts" setup>
import { useCartStore } from "@/stores/cart-store";
const store = useCartStore();

interface Props {
  name: string;
  image: string;
  id: number;
  price: number;
  descriptionTitle: string;
}
defineProps<Props>();
</script>
<template>
  <div class="flex relative flex-col">
    <NuxtLink
      class="text-black decoration-none no-underline"
      :to="`/products/${name}?id=${id}`"
    >
      <nuxt-img
        :height="400"
        :width="400"
        class="relative h-40 w-40 md:h-60 md:w-60"
        :src="`/productimages/${image}.webp`"
        alt="image"
      />
      <div class="absolute top-25 md:top-40 right-4 flex flex-col">
        <span class="md:text-2xl text-sm md:px-4 md:py-3 px-2 py-1.5 bg-gray-900 text-white font-bold mt-2"
          >€ {{ price?.toFixed(2) }}</span
        >
      </div>
    </NuxtLink>
    <div class="py-2 flex flex-col">
      <span class="font-bold">{{ name }}</span>
      <span>{{ descriptionTitle }}</span>
    </div>
  </div>
</template>
