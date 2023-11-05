<script lang="ts" setup>
const { status, data, signIn, signOut } = useAuth();

const email = ref("");
const password = ref();
const isLoading = ref(false);
const isFalseCredentials = ref(false);

const handleSigninCredentials = async () => {
  isLoading.value = true;
  if (!password.value || !email.value) {
    isFalseCredentials.value = true;
    setTimeout(() => {
      isFalseCredentials.value = false;
    }, 3000);
  }
  const data = await $fetch("/api/checkUserCredentials", {
    method: "POST",
    body: {
      email: email.value.toLowerCase(),
      password: password.value,
    },
  });
  if (!data?.data) {
    isLoading.value = false;
    isFalseCredentials.value = true;
    setTimeout(() => {
      isFalseCredentials.value = false;
    }, 4000);
  } else {
    await signIn("credentials", {
      email: email.value.toLowerCase(),
      password: password.value,
    });
    navigateTo("/account");
    isLoading.value = false;
  }
};

if (status.value === "authenticated") {
  navigateTo("/account");
}

useHead({
  title: `Trend Dad, Sign in`,
  meta: [
    {
      name: "description",
      content: `Sign in`,
    },
  ],
});
</script>

<template>
  <div class="min-h-screen flex items-center justify-center">
    <div
      class="px-16 py-20 flex flex-col border-groove border-black border-0.5 rounded-sm"
    >
      <span class="font-bold font-melodrama text-xl">Sign in to continue</span>

      <form
        @submit.prevent="handleSigninCredentials"
        autosave="on"
        autocomplete="on"
        class="flex flex-col gap-2 mt-2"
      >
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
        <span class="text-red-500" v-if="isFalseCredentials"
          >Incorrect credentials</span
        >
        <NuxtLink class="text-sm mt-4" to="/forgot-password"
          >Forgot your password?</NuxtLink
        >
        <NuxtLink class="text-sm mt-4" to="/sign-up"
          >I don't have an account.</NuxtLink
        >

        <button
          :disabled="isLoading"
          type="submit"
          class="bg-black text-white disabled:bg-gray-300 disabled:text-gray-400 py-2 px-4 border-none mt-4 cursor-pointer hover:bg-gray-900"
        >
          {{ isLoading ? "Signing in.." : "Sign in" }}
        </button>
      </form>
    </div>
  </div>
</template>
