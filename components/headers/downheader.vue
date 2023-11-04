<script lang="ts" setup>
const isOpenCollections = ref(false);

const { data, signOut } = useAuth();
</script>

<template>
  <div
    class="h-10 flex bg-white md:w-4/6 w-full mx-auto justify-between items-center text-black mb-1"
  >
    <div class="flex items-center md:space-x-4 ml-1">
      <div
        @click="isOpenCollections = !isOpenCollections"
        class="group flex items-center"
      >
        <button
          class="bg-white md:text-md lg:text-xl text-sm text-black border-none cursor-pointer group-hover:text-gray-600"
        >
          Top Collections
        </button>
        <i
          class="-ml-2 cursor-pointer i-mdi-chevron-down group-hover:text-gray-600"
        />
      </div>
      <!-- Dropdown menu -->
      <div
        v-if="isOpenCollections"
        class="absolute z-30 p-2 top-27 font-normal bg-white divide-y divide-gray-100 shadow w-44"
      >
        <NuxtLink
          @click="isOpenCollections = false"
          href="/collections/home"
          class="block text-black hover:text-white hover:bg-black decoration-none px-1 py-2 cursor-pointer"
          >home</NuxtLink
        >
      </div>

      <div>
        <NuxtLink @click="isOpenCollections = false" href="/trending"
          ><button
            class="bg-white border-none text-black md:text-md lg:text-xl text-sm hover:text-gray-600 cursor-pointer"
          >
            Trending
          </button></NuxtLink
        >
      </div>
      <div>
        <NuxtLink @click="isOpenCollections = false" href="/account"
          ><button
            class="bg-white border-none text-black md:text-md lg:text-xl text-sm hover:text-gray-600 cursor-pointer"
          >
            Account
          </button></NuxtLink
        >
      </div>
    </div>

    <div class="flex items-end space-x-2 md:mr-0 mr-1">
      <div>
        <NuxtLink
          to="/account"
          class="cursor-pointer md:text-lg text-xs bg-black text-white md:px-5 px-3 flex-shrink-0 py-1.5 hover:bg-gray-900 border-none"
        >
          Sign In / Sign Up
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
