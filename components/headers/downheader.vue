<script lang="ts" setup></script>

<template>
  <div
    class="h-10 flex bg-white md:w-4/6 w-full mx-auto justify-between items-center text-black mb-1"
  >
    <nav class="flex items-center md:space-x-4 pl-4">
      <li>
        <NuxtLink href="/"
          ><button
            class="bg-white border-none underline text-black md:text-md lg:text-xl text-sm hover:text-gray-600 cursor-pointer"
          >
            Stash
          </button></NuxtLink
        >
      </li>
      <li>
        <NuxtLink href="/trending"
          ><button
            class="bg-white border-none underline text-black md:text-md lg:text-xl text-sm hover:text-gray-600 cursor-pointer"
          >
            Trending
          </button></NuxtLink
        >
      </li>
    </nav>

    <div class="flex items-end space-x-2 md:mr-0 mr-1">
      <!-- <div>
        <NuxtLink
          to="/account"
          class="cursor-pointer md:text-lg text-xs bg-black text-white md:px-5 px-3 flex-shrink-0 py-1.5 hover:bg-gray-900 border-none"
        >
          Sign In
        </NuxtLink>
      </div> -->
    </div>
  </div>
</template>
