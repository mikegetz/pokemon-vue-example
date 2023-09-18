<script setup lang="ts">

defineProps({
  bannerOpen: Boolean,
})

</script>

<template>
  <div v-if="bannerOpen" class="col-start-4 col-span-4 bg-[#f44336] rounded-lg box-shadow-error">
    <div class="flex justify-center">
      <div class="py-2">
        <p>Error - no Pokemon found</p>
      </div>
    </div>
  </div>
  <div v-if="!bannerOpen" class="col-start-4 col-span-4">
    <div class="flex justify-center">
      <div class="py-5"></div>
    </div>
  </div>
</template>

<style scoped>
.box-shadow-error {
  box-shadow: 0 3px 6px rgb(0 0 0 / 0.4);
}

p {
  color: #333333;
  font-family: sans-serif;
}
</style>