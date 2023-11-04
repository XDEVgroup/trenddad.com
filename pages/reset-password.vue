<script lang="ts" setup>
const email = ref();
const openPopup = ref(false);
const isLoading = ref(false);
const confirmPassword = ref("");
const password = ref("");
const isWrongPasswordsMatch = ref(false);
const isWrongPasswordMatch = ref(false);

const route = useRoute();

const handleConfirmEmail = async () => {
  isLoading.value = true;
  const isMatchPasswords = password.value === confirmPassword.value;
  const regexPassword =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
  const isMatchPassword = password.value.match(regexPassword);
  if (!isMatchPassword) {
    isWrongPasswordMatch.value = true;
    setTimeout(() => {
      isWrongPasswordMatch.value = false;
    }, 10000);
    isLoading.value = false;
  } else if (!isMatchPasswords) {
    isWrongPasswordsMatch.value = true;
    confirmPassword.value = "";
    setTimeout(() => {
      isWrongPasswordsMatch.value = false;
    }, 3000);
    isLoading.value = false;
  }
  await $fetch("/api/confirm-reset-password", {
    method: "POST",
    body: {
      email: route.query.email,
      password: password.value,
      code: route.query.code,
    },
  });
  isLoading.value = false;
  openPopup.value = true;
  setTimeout(() => {
    navigateTo("/sign-in");
  }, 2000);
};

useHead({
  title: `Reset Password`,
  meta: [
    {
      name: "description",
      content: `Reset your password`,
    },
  ],
});
</script>

<template>
  <div
    v-if="openPopup"
    class="fixed top-0 left-0 right-0 z-40 h-screen flex items-center justify-center bg-gray-800 bg-opacity-50"
  >
    <div
      class="relative py-16 z-50 px-16 bg-white border border-groove border-gray-300"
    >
      <span
        @click="openPopup = false"
        class="absolute top-2 right-2 cursor-pointer text-xl"
        >X</span
      >
      <div class="flex flex-col">
        <span class="font-bold"
          >Your password has been reset, you will be redirected.</span
        >
      </div>
    </div>
  </div>
  <div class="min-h-screen flex items-center justify-center">
    <div
      class="px-16 py-20 flex flex-col border-groove border-black border-0.5 rounded-sm"
    >
      <span class="font-bold font-melodrama text-xl">Reset your password</span>

      <form
        @submit.prevent="handleConfirmEmail"
        autocomplete="off"
        class="flex flex-col gap-2 mt-2"
      >
        <label>Password:</label>
        <input
          required
          v-model="password"
          placeholder="Your password"
          type="password"
          class="py-1.5 px-4 w-46 rounded-lg hover:border-2 hover:border-groove hover:border-sky-600 focus:border-sky-600"
        />
        <label>Confirm password:</label>
        <input
          required
          v-model="confirmPassword"
          placeholder="Your password"
          type="password"
          class="py-1.5 px-4 w-46 rounded-lg hover:border-2 hover:border-groove hover:border-sky-600 focus:border-sky-600"
        />
        <span class="w-60 text-sm text-red-500" v-if="isWrongPasswordMatch"
          >Password must have minimum eight characters, at least one upper case
          English letter, one lower case English letter, one number and one
          special character</span
        >
        <span class="w-60 text-sm text-red-500" v-if="isWrongPasswordsMatch"
          >Passwords do not match.</span
        >
        <button
          :disabled="isLoading"
          type="submit"
          class="bg-black text-white disabled:bg-gray-300 disabled:text-gray-400 py-2 px-4 border-none mt-4 cursor-pointer hover:bg-gray-900"
        >
          Reset password
        </button>
      </form>
    </div>
  </div>
</template>
