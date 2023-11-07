<script lang="ts" setup>
const cookie = useCookie("emailfivesecondspopup");
const email = ref("");
const openPopup = ref(false);
const isWrongEmail = ref(false);
const isSendEmail = ref(false);
const isLoading = ref(false);

if (cookie.value === "Declined" || cookie.value === "Accepted") {
  openPopup.value = false;
} else {
  onNuxtReady(() => {
    setTimeout(() => {
      openPopup.value = true;
    }, 10000);
  });
}

const acceptCookies = () => {
  cookie.value = "Accepted";
  openPopup.value = false;
};
const declineCookies = () => {
  cookie.value = "Declined";
  openPopup.value = false;
};

const sendReference = async () => {
  const regex =
    /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/;
  const isMatch = email.value.match(regex);
  if (!isMatch) {
    isWrongEmail.value = true;
    email.value = "";
    setTimeout(() => {
      isWrongEmail.value = false;
    }, 3000);
  } else {
    isLoading.value = true;
    acceptCookies();
    await $fetch("/api/sendreference", {
      body: { email: email.value },
      method: "POST",
    });

    isSendEmail.value = true;
    email.value = "";
    setTimeout(() => {
      isSendEmail.value = false;
    }, 3000);
    isLoading.value = false;
  }
};
</script>

<template>
  <div
    v-if="openPopup"
    class="fixed top-0 left-0 right-0 z-40 h-screen flex items-center justify-center bg-black bg-opacity-50"
  >
    <div
      class="relative py-10 z-50 px-10 bg-white border border-groove border-gray-300"
    >
      <NuxtLink href="/home" class="flex gap-1 items-center decoration-none"
        ><nuxt-img :height="100" class="h-4 w-auto" src="/trend.png" alt="" />
        <nuxt-img
          :height="100"
          class="h-4 w-auto animate-flip"
          src="/snor.png"
          alt="" />
        <nuxt-img :height="100" class="h-4 w-auto" src="/dad.png" alt=""
      /></NuxtLink>
      <span class="py-2 flex text-purple-500"
        >Stay up to date and receive your discount now.</span
      >
      <span
        @click="declineCookies"
        class="absolute top-2 right-2 cursor-pointer text-xl"
        >X</span
      >
      <div class="flex flex-col">
        <label>Email:</label>
        <input
          required
          v-model="email"
          placeholder="Your email"
          type="text"
          class="py-1.5 mt-1 px-4 w-46 rounded-lg hover:border-2 hover:border-groove hover:border-sky-600 focus:border-sky-600"
        />
        <span class="text-red-500" v-if="isWrongEmail"
          >Email is not correct</span
        >
        <span class="text-blue-500" v-if="isSendEmail"
          >Please check your inbox.</span
        >
        <button
          @click="sendReference"
          :disabled="isLoading"
          class="bg-black text-white disabled:bg-gray-300 disabled:text-gray-400 py-2 px-4 border-none mt-4 cursor-pointer hover:bg-gray-900"
        >
          {{ isLoading ? "Sending" : "Send code" }}
        </button>
      </div>
    </div>
  </div>
</template>
