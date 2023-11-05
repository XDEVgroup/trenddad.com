<script lang="ts" setup>
const { status, data, signIn, signOut } = useAuth();

const email = ref("");
const password = ref("");
const name = ref();
const isError = ref();
const isLoading = ref(false);
const isWrongEmail = ref(false);
const openPopup = ref(false);
const confirmPassword = ref("");
const isWrongPasswordsMatch = ref(false);
const isWrongPasswordMatch = ref(false);

const handleSigninCredentials = async () => {
  const isMatchPasswords = password.value === confirmPassword.value;
  const regexPassword =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
  const isMatchPassword = password.value.match(regexPassword);
  const regexEmail =
    /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/;
  const isMatchEmail = email.value.match(regexEmail);
  if (!isMatchEmail) {
    isWrongEmail.value = true;
    setTimeout(() => {
      isWrongEmail.value = false;
    }, 3000);
  } else if (!isMatchPassword) {
    isWrongPasswordMatch.value = true;
    setTimeout(() => {
      isWrongPasswordMatch.value = false;
    }, 10000);
  } else if (!isMatchPasswords) {
    isWrongPasswordsMatch.value = true;
    confirmPassword.value = "";
    setTimeout(() => {
      isWrongPasswordsMatch.value = false;
    }, 3000);
  } else {
    isLoading.value = true;
    //create the user in the database with hashed password
    await $fetch("/api/confirmEmail", {
      method: "POST",
      body: {
        name: name.value,
        email: email.value.toLowerCase(),
        password: password.value,
      },
    });
    isLoading.value = false;
    setTimeout(() => {
      isError.value = "";
    }, 3000);

    openPopup.value = true;
    email.value = "";
    password.value = "";
    confirmPassword.value = "";
    name.value = "";
  }
};

if (status.value === "authenticated") {
  navigateTo("/");
}

useHead({
  title: `Trend Dad, Sign up`,
  meta: [
    {
      name: "description",
      content: `Sign up`,
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
          >Please check your inbox to confirm your email.</span
        >
      </div>
    </div>
  </div>
  <div class="min-h-screen flex items-center justify-center">
    <div
      class="px-16 py-20 flex flex-col border-groove border-black border-0.5 rounded-sm"
    >
      <span class="font-bold font-melodrama text-xl">Sign up to continue</span>

      <form
        @submit.prevent="handleSigninCredentials"
        class="flex flex-col gap-2 mt-2"
      >
        <label>Name:</label>
        <input
          required
          v-model="name"
          placeholder="Your name"
          type="text"
          class="py-1.5 px-4 w-46 rounded-lg hover:border-2 hover:border-groove hover:border-sky-600 focus:border-sky-600"
        />
        <label>Email:</label>
        <input
          required
          v-model="email"
          placeholder="Your email"
          type="text"
          class="py-1.5 px-4 w-46 rounded-lg hover:border-2 hover:border-groove hover:border-sky-600 focus:border-sky-600"
        />
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
        <span class="w-60 text-sm text-red-500" v-if="isError"
          >User does already exists.</span
        >
        <span class="w-60 text-sm text-red-500" v-if="isWrongPasswordMatch"
          >Password must have minimum eight characters, at least one upper case
          English letter, one lower case English letter, one number and one
          special character</span
        >
        <span class="w-60 text-sm text-red-500" v-if="isWrongPasswordsMatch"
          >Passwords do not match.</span
        >
        <span class="text-red-500" v-if="isWrongEmail"
          >Email is not correct</span
        >
        <NuxtLink class="text-sm mt-4" to="/sign-in"
          >I already have an account.</NuxtLink
        >
        <button
          :disabled="isLoading"
          type="submit"
          class="bg-black text-white disabled:bg-gray-300 disabled:text-gray-400 py-2 px-4 border-none mt-4 cursor-pointer hover:bg-gray-900"
        >
          {{ isLoading ? "Signing up.." : "Sign up" }}
        </button>
      </form>
    </div>
  </div>
</template>
