<script setup lang="ts">

defineProps({
  bannerOpen: Boolean,
})

</script>

<template>
  <div v-if="bannerOpen" class="col-start-4 col-span-4 bg-[#f44336] rounded-lg box-shadow-error error-banner">
    <div class="flex justify-center">
      <p>Error - no Pokemon found</p>
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
  padding: 8px;
}
</style>