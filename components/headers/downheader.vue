<script lang="ts" setup>
const search = ref("")
const products = ref()
const isOpen = ref(false)
type DebounceFunction = (func: Function, delay: number) => (...args: any[]) => void;

// Debounce function
const debounce: DebounceFunction = (func, delay) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return (...args: any[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const getProducts = debounce( async (value: string) => {
  const response = await $fetch(`/api/search-products?name=${search.value}`)
  isOpen.value = true
  products.value = response
}, 500); 

</script>

<template>
  <div class="h-10 flex bg-white md:w-4/6 w-full mx-auto justify-between items-center text-black mb-1">
    <nav class="flex items-center md:space-x-4 pl-4">
      <li>
        <NuxtLink href="/home"><button
            class="bg-white border-none underline text-black md:text-md lg:text-xl text-sm hover:text-gray-600 cursor-pointer">
            Stash
          </button></NuxtLink>
      </li>
      <li>
        <NuxtLink href="/trending"><button
            class="bg-white border-none underline text-black md:text-md lg:text-xl text-sm hover:text-gray-600 cursor-pointer">
            Trending
          </button></NuxtLink>
      </li>
    </nav>


    <div class="relative md:flex h-8 hidden">
      <input :onkeydown="getProducts" v-model="search" type="text" class="w-[400px] border h-8 px-2 shadow rounded-full" placeholder="Search products..">
      <button class="absolute bg-transparent border-none  top-2 right-3 ">
        <svg class="text-black h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 56.966 56.966"
        style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve">
        <path
          d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z">
        </path>
      </svg>
      </button>
    </div>
    <div></div>

  </div>
  <div v-if="isOpen" class="hidden absolute z-20 w-screen md:flex justify-center">
    <div @click="isOpen = false" class="bg-white ml-60 -mt-1 h-full w-[400px]">
      <NuxtLink  v-for="product of products" :href="`/products/${product.name}?id=${product.id}`" class="p-1 text-black  flex items-center gap-2 hover:bg-gray-100">
        <NuxtImg width="200" height="200" class="h-10 w-10" :src="`/productimages/${product.image}.webp`" :alt="product.name" />
        <span>{{ product.name }}</span>
      </NuxtLink>
    </div>
  </div>
</template>
