<script setup lang="ts">

defineProps({
  pokemonImg: String,
  pokemonName: String,
  pokemonDescription: String,
})

</script>

<template>
  <div class="card">
    <div class="grid grid-cols-8">
      <div class="col-start-2 col-span-6">
        <img v-bind:src="pokemonImg"/>
      </div>
    </div>
    <div class="grid grid-cols-4 justify-items-center title">
      <div class="col-start-2 col-span-2">
        {{ pokemonName }}
      </div>
      <div class="col-span-4">
        {{ pokemonDescription }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.4);
}
.title {
  margin-bottom: 10px;
  margin-top: 4px;
}
</style>