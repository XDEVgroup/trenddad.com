<script lang="ts" setup>
interface Props {
  productId: number;
}
const props = defineProps<Props>();
const review = ref("");
const { data } = useFetch(`/api/get-reviews?productid=${props.productId}`);
</script>
<template>
  <div class="flex flex-col gap-2">
    <div
      class="border border-groove border-gray-300 border-0.5 py-2 pb-10 px-4 flex flex-col"
      v-for="review in data"
    >
      <div>
        <div class="flex">
          <div v-for="rev of Number(review.stars)">
            <div class="i-mdi-star text-xl text-yellow" />
          </div>
          <span class="text-sm">({{ review.stars }})</span>
        </div>
      </div>
      <span class="font-bold">{{ review?.name }}</span>
      <span>{{ review?.review }}</span>
    </div>

    <div>
      <textarea
        :disabled="true"
        v-model="review"
        class="w-full h-20 bg-gray-100 border-gray-300 rounded-xl py-2 cursor-not-allowed"
      ></textarea>
      <button
        :disabled="true"
        class="bg-black text-white disabled:bg-gray-300 disabled:text-gray-400 py-2 px-4 border-none mt-4 cursor-not-allowed hover:bg-gray-900"
      >
        Sign in
      </button>
    </div>
  </div>
</template>
