<script lang="ts" setup>
const { data } = useAuth();
const user = data.value?.user;

useHead({
  title: "Trend Dad, Vouchers",
  meta: [
    {
      name: "description",
      content: "Vouchers page, check your vouchers.",
    },
  ],
});

const voucherInput = ref("");
const isCorrectVoucher = ref("unknown");
const isLoading = ref(false);

const checkVoucher = async () => {
  isLoading.value = true;
  try {
    await $fetch("/api/activate-voucher", {
      method: "POST",
      body: { input: voucherInput.value },
    });
    isCorrectVoucher.value = "correct";
    isLoading.value = true;
    voucherInput.value = "";
  } catch (error) {
    isCorrectVoucher.value = "incorrect";
    isLoading.value = true;
    voucherInput.value = "";
  }
  voucherInput.value = "";
};

const { data: userData } = await useAsyncData("getUser", () =>
  $fetch("/api/getUser", {
    method: "POST",
    body: {
      name: user?.name,
      email: user?.email,
    },
  })
);
if (!user?.email) {
  navigateTo("/home");
}
</script>

<template>
  <div v-if="user" class="flex md:w-4/6 w-full mx-auto h-screen mt-10">
    <sidebar />
    <form @submit.prevent="checkVoucher" class="md:ml-20 ml-2">
      <h1>Vouchers & credits</h1>
      <div class="space-y-2 mt-4 flex flex-col">
        <label>Voucher-code</label>
        <span v-if="isCorrectVoucher === 'incorrect'" class="text-red-400">
          No luck today, try again later.
        </span>
        <span v-if="isCorrectVoucher === 'correct'" class="text-purple-400">
          No discount this time, try next time.
        </span>
        <input
          required
          placeholder="Your code"
          v-model="voucherInput"
          type="text"
          class="py-1.5 px-4 rounded-lg hover:border-2 hover:border-groove hover:border-sky-600 focus:border-sky-600"
        />

        <button
          :disabled="isLoading"
          class="bg-black text-white disabled:bg-gray-300 disabled:cursor-auto disabled:text-gray-400 py-2 px-4 border-none mt-4 cursor-pointer hover:bg-gray-900"
          type="submit"
        >
          {{ isLoading ? "Checked" : "Check" }}
        </button>
      </div>
    </form>
  </div>
</template>
