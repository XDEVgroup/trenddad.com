<script lang="ts" setup>
import { useCartStore } from "../stores/cart-store";
const store = useCartStore();
const cartItems: Ref<number[]> = ref([]);

cartItems.value.push(...store.cart);

if (cartItems.value.length === 0) {
  navigateTo("/home");
}
const isLoading = ref(false);

const isAccount = ref(false);

const choosePaymentAccountOption = () => {
  isLoading.value = true;
  if (isAccount.value) {
    navigateTo("/shipping");
    isLoading.value = false;
  } else {
    navigateTo("/shipping-no-account");
  }

  isLoading.value = false;
};
</script>
<template>
  <form
    @submit.prevent="choosePaymentAccountOption"
    class="w-screen min-h-screen flex flex-col items-center mt-20"
  >
    <h1>Choose method</h1>
    <span class="text-gray-600 px-6"
      >Please select how you want to proceed</span
    >
    <div class="md:w-3/12 w-5/6 mt-20 flex flex-col">
      <select v-model="isAccount">
        <option :value="false">Continue without account (Only option)</option>
      </select>
      <button
        :disabled="isLoading"
        class="bg-black text-white disabled:bg-gray-300 disabled:text-gray-400 py-2 px-4 border-none mt-4 cursor-pointer hover:bg-gray-900"
        type="submit"
      >
        {{ isLoading ? "Loading.." : "Select option" }}
      </button>
    </div>
  </form>
</template>
