<script lang="ts" setup>
import { useCartStore } from "../stores/cart-store";

const store = useCartStore();

const cartItems = ref();

const total = ref<number | undefined>(500);

const totalShippingCosts = ref(4.5);

const totalToPay = ref(0);
cartItems.value = store.cart;

const { data, refresh } = await useAsyncData("getCartItems", () =>
  $fetch("/api/getCartItems", {
    method: "POST",
    body: {
      cartItems: cartItems?.value,
    },
  })
);
const allPrices = data.value?.products.map((item) => {
  return Number(item?.price);
});
total.value = allPrices?.reduce((a: number, b: number) => a + b, 0);

totalToPay.value = total.value! + totalShippingCosts.value;

const removeCartItem = async (uuid: string) => {
  store.removeFromCart(uuid);
  cartItems.value = [...store.cart];
  await refresh();
  const allPrices = data.value?.products.map((item) => {
    return Number(item?.price);
  });
  total.value = allPrices?.reduce((a: any, b: any) => a + b, 0);
  totalToPay.value = total.value! + totalShippingCosts.value;
};

useHead({
  title: `Trend Dad, Cart`,
  meta: [
    {
      name: "description",
      content: `Cart page, continue to fulfill your payment. `,
    },
  ],
});
</script>

<template>
  <div class="flex flex-col w-screen items-center min-h-screen">
    <div class="w-11/12">
      <div class="flex gap-1 items-center">
        <div class="i-mdi-shopping-outline text-2xl text-black" />
        <h1>Cart items</h1>
      </div>

      <div class="md:flex grid grid-cols-1 gap-2">
        <div class="flex flex-col gap-2 md:w-screen w-full md:w-7/12 w-11/12">
          <div
            class="relative border border-groove border-1 border-gray-200 flex"
            v-for="item in data?.products"
          >
            <span class="absolute top-2 right-2"
              >€ {{ Number(item?.price)?.toFixed(2) }},-</span
            >
            <div class="p-8">
              <nuxt-img
                :height="500"
                class="h-20"
                :src="`/productimages/${item?.image}.webp`"
                alt=""
              />
            </div>
            <div class="flex flex-col py-8">
              <span class="font-bold mt-1">{{ item?.name }}</span>
              <div class="flex">
                <div class="i-mdi-star text-xl text-yellow" />
                <div class="i-mdi-star text-xl text-yellow" />
                <div class="i-mdi-star text-xl text-yellow" />
                <div class="i-mdi-star text-xl text-yellow" />
                <div class="i-mdi-star-half text-xl text-yellow" />
              </div>

              <div class="flex mt-2 gap-2">
                <span
                  class="text-green-700 py-1 px-2 border border-1 border-groove border-green-700"
                  >Available</span
                >
                <div
                  class="i-mdi-bin-outline text-2xl cursor-pointer hover:text-gray-500"
                  @click="removeCartItem(item.uuid)"
                />
              </div>
              <div class="mt-2">
                <span class="">Order today, delivered within 2-5 days</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="md:w-5/12 mt-4 mb-4 w-11/12 border h-80 border-groove border-1 border-gray-200"
      >
        <div class="p-4 flex flex-col gap-1">
          <span class="font-bold">Overview</span>
          <div class="flex justify-between">
            <span class="text-sm text-gray-700"
              >Articles ({{ cartItems?.length }})</span
            >
            <span>€ {{ Number(total)?.toFixed(2) }},-</span>
          </div>
          <div class="flex justify-between">
            <span class="text-sm text-gray-700">Shippingcosts</span>
            <span>€ {{ Number(totalShippingCosts)?.toFixed(2) }},-</span>
          </div>
          <div class="py-2">
            <div class="h-0.2 bg-black w-full"></div>
          </div>

          <div
            class="mt-6 py-4 px-2 bg-gray-200 font-bold flex justify-between"
          >
            <span class="text-sm">Total to pay</span>
            <span>€ {{ Number(totalToPay)?.toFixed(2) }},-</span>
          </div>
          <NuxtLink to="/choose-payment-account">
            <button
              :disabled="cartItems?.length === 0"
              class="bg-black no-underline w-full py-4 text-white disabled:bg-gray-300 disabled:text-gray-400 py-2 px-4 border-none mt-4 cursor-pointer disabled:cursor-default hover:bg-gray-900"
            >
              {{
                cartItems?.length === 0
                  ? "No items in cart"
                  : "Continue with payment"
              }}
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
