<script lang="ts" setup>
import { useCartStore } from "@/stores/cart-store";

const { params, query } = useRoute();

useHead({
  title: `Trend Dad, ${params.name}`,
  meta: [
    {
      name: "description",
      content: `Hide gold, money, or watches inside the ${params.name}, stash items directly with our products  `,
    },
  ],
});
const store = useCartStore();

const { data, refresh } = useAsyncData("getproduct", async () => {
  return await $fetch("/api/getProduct", {
    method: "POST",
    body: { id: query.id },
  });
});

const handleAddToCart = (id: number) => {
  store.addToCart(id);
  const input = document.getElementById("first_name");
  setTimeout(() => {
    input?.blur();
  }, 1500);
};

await refresh();

const chosenImage = ref(
  `/productimages/${data?.value?.data?.image as string}.webp`
);
</script>

<template>
  <div class="relative h-20 mt-20 mb-10 flex items-center justify-center"></div>
  <div class="w-screen flex justify-center items-center min-h-screen">
    <div
      class="w-11/12 md:flex md:mb-10 mb-40 grid md:mt-0 grid-cols-1 gap-20 md:gap-0"
    >
      <div class="">
        <div class="mb-6">
          <h1 class="mt-1 text-4xl">{{ data?.data?.name }}</h1>
        </div>
        <div class="">
          <nuxt-img
            v-if="data?.data?.image"
            :height="500"
            :width="500"
            class="w-80 h-80 mx-auto p-0.5 border bg-gray-100 border-groove transition hover:scale-102 duration-700"
            :src="chosenImage"
            :alt="(data?.data?.name as string)"
          />
          <div
            v-else
            class="h-80 w-80 border-1 border-groove border-black"
          ></div>
          <div class="flex gap-2">
            <nuxt-img
              @click="
                chosenImage = `/productimages/${
                  data?.data?.image as string
                }.webp`
              "
              v-if="data?.data?.image"
              :height="500"
              class="w-20 h-20 p-0.5 border bg-gray-100 border-groove transition hover:scale-102 duration-700"
              :src="`/productimages/${(data?.data?.image as string)}.webp`"
              :alt="(data?.data?.name as string)"
            />
            <nuxt-img
              @click="
                chosenImage = `/productimages/${
                  data?.data?.image as string
                }2.webp`
              "
              v-if="data?.data?.image"
              :height="500"
              class="w-20 h-20 p-0.5 border bg-gray-100 border-groove transition hover:scale-102 duration-700"
              :src="`/productimages/${(data?.data?.image as string)}2.webp`"
              :alt="(data?.data?.name as string)"
            />
            <nuxt-img
              @click="
                chosenImage = `/productimages/${
                  data?.data?.image as string
                }3.webp`
              "
              v-if="data?.data?.image"
              :height="500"
              class="w-20 h-20 p-0.5 border bg-gray-100 border-groove transition hover:scale-102 duration-700"
              :src="`/productimages/${(data?.data?.image as string)}3.webp`"
              :alt="(data?.data?.name as string)"
            />
          </div>
        </div>
      </div>
      <div class="6/12">
        <div class="md:px-16 px-2 flex flex-col">
          <span class="mt-4 text-lg font-bold">{{
            data?.data?.descriptiontitle
          }}</span>
          <span class="">{{ data?.data?.description }}</span>
          <span
            v-if="data?.data?.descriptiontitle2 !== 'null'"
            class="mt-4 text-lg font-bold"
            >{{ data?.data?.descriptiontitle2 }}</span
          >
          <span v-if="data?.data?.description2 !== 'null'" class="">{{
            data?.data?.description2
          }}</span>
          <div class="flex gap-2 mt-10 items-end">
            <div
              class="text-2xl px-4 py-3 bg-gray-900 text-white font-bold mt-2"
            >
              <span>€ {{ Number(data?.data?.price)?.toFixed(2) }},-</span>
            </div>
            <div>
              <button
                id="first_name"
                @click="handleAddToCart(data?.data?.id as number)"
                class="focus:animate-fade-in bg-black no-underline py-4 text-white disabled:bg-gray-300 disabled:text-gray-400 py-2 px-4 border-none mt-4 cursor-pointer disabled:cursor-default hover:bg-gray-900"
              >
                Add to cart
              </button>
            </div>
          </div>
          <div class="mt-10 flex flex-col">
            <span class="text-lg font-bold mt">Product properties</span>
            <div class="grid grid-cols-2 w-full gap-1">
              <span v-if="data?.data?.spec1 !== 'null'">Name:</span>
              <span v-if="data?.data?.spec1 !== 'null'">{{
                data?.data?.spec1
              }}</span>
              <span v-if="data?.data?.spec2 !== 'null'">Type:</span>
              <span v-if="data?.data?.spec2 !== 'null'">{{
                data?.data?.spec2
              }}</span>
              <span v-if="data?.data?.spec3 !== 'null'">Properties:</span>
              <span v-if="data?.data?.spec3 !== 'null'">{{
                data?.data?.spec3
              }}</span>
              <span v-if="data?.data?.spec4 !== 'null'">Characteristics:</span>
              <span v-if="data?.data?.spec4 !== 'null'">{{
                data?.data?.spec4
              }}</span>
              <span v-if="data?.data?.spec5 !== 'null'">Color:</span>
              <span v-if="data?.data?.spec5 !== 'null'">{{
                data?.data?.spec5
              }}</span>
              <span v-if="data?.data?.spec6 !== 'null'">Packaging:</span>
              <span v-if="data?.data?.spec6 !== 'null'">{{
                data?.data?.spec6
              }}</span>
              <span v-if="data?.data?.spec7 !== 'null'">Dimensions:</span>
              <span v-if="data?.data?.spec7 !== 'null'">{{
                data?.data?.spec7
              }}</span>
              <span v-if="data?.data?.spec8 !== 'null'">Weight:</span>
              <span v-if="data?.data?.spec8 !== 'null'">{{
                data?.data?.spec8
              }}</span>
            </div>
          </div>
          <section class="mt-6">
            <product-review :product-id="Number(query.id)" />
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
