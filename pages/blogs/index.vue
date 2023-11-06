<script setup lang="ts">
import dayjs from "dayjs";
const blogs = await $fetch(`/api/getBlogs?title=index`, {
  method: "POST",
  body: { title: "" },
});

const { data, error, refresh } = await useAsyncData("getProducts", () =>
  $fetch("/api/getProducts", {
    method: "POST",
    body: {
      cartItems: [],
    },
  })
);
const products = data.value?.data;

useHead({
  title: "Trend Dad, Blogs about stash items, and hide cash cards gold.",
  meta: [
    {
      name: "description",
      content:
        "Blog page, stash your valuable items after reading our blogs about hiding stuff",
    },
  ],
});
</script>

<template>
  <div class="grid min-h-screen grid-cols-1 gap-2 text-black lg:flex">
    <div class="w-full justify-center p-2 lg:w-4/6 lg:p-4">
      <div>
        <article class="m-auto w-full lg:w-8/12">
          <header>
            <div class="flex justify-between">
              <div class="flex items-center">
                <NuxtImg
                  loading="eager"
                  height="{600}"
                  width="{600}"
                  src="/mark.jpeg"
                  alt="mark"
                  class="h-10 w-10 rounded-full object-cover lg:h-14 lg:w-14"
                />

                <div class="flex flex-col">
                  <span class="ml-2 text-sm font-medium lg:text-base">
                    {{ blogs?.blogs[0]?.author }}
                  </span>
                  <span
                    class="ml-2 text-sm font-normal text-black lg:text-base"
                  >
                    {{ dayjs(blogs?.blogs[0]?.date).format("YYYY-MM-DD") }}
                  </span>
                </div>
              </div>
              <div class="mt-2 flex space-x-2">
                <NuxtLink
                  href="https://www.facebook.com/rubyfinance"
                  class="text-black"
                >
                  <!-- {/* <BsFacebook class="h-4 w-4 lg:h-6 lg:w-6" /> */} -->
                </NuxtLink>
                <NuxtLink
                  href="https://www.linkedin.com/company/rubyfinance/"
                  class="text-black"
                >
                  <!-- {/* <BsLinkedin class="h-4 w-4 lg:h-6 lg:w-6" /> */} -->
                </NuxtLink>
                <NuxtLink
                  href="https://www.instagram.com/rubyfinance/"
                  class="text-black"
                >
                  <!-- {/* <BsInstagram class="h-4 w-4 lg:h-6 lg:w-6" /> */} -->
                </NuxtLink>
              </div>
            </div>
            <div class="mt-4 flex items-center text-black">
              <h1 class="text-2xl font-bold text-black lg:text-4xl">
                {{ blogs.blogs[0]?.title }}
              </h1>
            </div>
          </header>
          <main>
            <div class="flex h-52 max-w-4xl">
              <NuxtImg
                loading="eager"
                height="{600}"
                width="{600}"
                :src="`/${blogs.blogs[0]?.image}`"
                alt="blog_banner"
                class="mt-4 w-full object-cover"
              />
            </div>

            <p
              class="m-auto mt-10 flex w-full flex-col justify-center text-2xl font-bold text-black"
            >
              {{ blogs.blogs[0]?.intro }}
            </p>
            <p
              class="m-auto mt-2 flex w-full flex-col justify-center text-xl text-black"
            >
              {{ blogs.blogs[0]?.text1 }}
            </p>
            <p
              class="m-auto mt-2 flex w-full flex-col justify-center text-xl text-black"
            >
              {{ blogs.blogs[0]?.text2 }}
            </p>
            <h2
              class="m-auto mt-8 flex w-full flex-col justify-center text-3xl font-bold text-black"
            >
              {{ blogs.blogs[0]?.header1 }}
            </h2>
            <p
              class="m-auto mt-2 flex w-full flex-col justify-center text-xl text-black"
            >
              {{ blogs.blogs[0]?.text3 }}
            </p>
            <p
              class="m-auto mt-2 flex w-full flex-col justify-center text-xl text-black"
            >
              {{ blogs.blogs[0]?.text4 }}
            </p>
            <h2
              class="m-auto mt-8 flex w-full flex-col justify-center text-3xl font-bold text-black"
            >
              {{ blogs.blogs[0]?.header2 }}
            </h2>
            <p
              class="m-auto mt-2 flex w-full flex-col justify-center text-xl text-black"
            >
              {{ blogs.blogs[0]?.text5 }}
            </p>
            <p
              class="m-auto mt-2 flex w-full flex-col justify-center text-xl text-black"
            >
              {{ blogs.blogs[0]?.text6 }}
            </p>
            <p
              class="m-auto mt-2 flex w-full flex-col justify-center text-xl text-black"
            >
              {{ blogs.blogs[0]?.text7 }}
            </p>
          </main>
        </article>
      </div>
    </div>
    <div class="w-full p-6 lg:w-2/12 lg:p-0">
      <Link href="/#pricing">
        <div class="flex p-6 lg:p-0">
          <button
            class="mt-4 w-full rounded-full border bg-purple-300 p-2 text-black transition"
          >
            Check stash products
          </button>
        </div>
      </Link>

      <div class="-ml-0 hidden lg:-ml-40 lg:grid">
        <div class="flex-col items-center">
          <NuxtImg
            loading="eager"
            height="{600}"
            width="{600}"
            src="/mark.jpeg"
            alt="mark"
            class="mt-6 h-20 w-20 rounded-full object-cover"
          />

          <div class="mt-4">
            <p class="font-semibold">{{ blogs.blogs[0]?.author }}</p>
          </div>
        </div>
        <span class="mb-4 mt-6 text-lg font-semibold">More blogs</span>
      </div>

      <div
        :key="i"
        v-for="(blog, i) in blogs.blogs"
        class="-ml-0 mt-6 lg:-ml-40"
      >
        <NuxtLink class="no-underline" :href="`/blogs/${blog?.title}`">
          <div class="flex">
            <div class="w-4/6">
              <div class="flex items-center">
                <NuxtImg
                  loading="eager"
                  height="{600}"
                  width="{600}"
                  src="/mark.jpeg"
                  alt="mark"
                  class="h-6 w-6 rounded-full object-cover"
                />

                <span class="ml-2 font-semibold text-black">{{
                  blog.author
                }}</span>
              </div>
              <div class="">
                <span class="text-md mt-2 font-extrabold text-black">
                  {{ blog.title }}
                </span>
              </div>
            </div>

            <div class="w-2/6">
              <NuxtImg
                loading="eager"
                height="{600}"
                width="{600}"
                :src="`/${blog.image}`"
                alt="blog_banner_nieuw"
                class="ml-6 h-14 w-14 rounded-md object-cover"
              />
            </div>
          </div>
        </NuxtLink>
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
</template>
