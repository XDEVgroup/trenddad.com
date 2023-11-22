<script setup lang="ts">

const { data } = await useFetch("/api/getProducts")

</script>

<template>
     <div v-if="data" id="products" class="flex flex-col items-center md:mt-6 mt-0 px-4">
      <div
        class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-6"
      >
        <div
          class="flex relative justify-center"
          :key="i"
          v-for="(item, i) in data"
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