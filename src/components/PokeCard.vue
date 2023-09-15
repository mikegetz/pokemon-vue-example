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
      <div class="col-start-2 col-span-6 card-image">
        <img v-bind:src="pokemonImg"/>
      </div>
    </div>
    <div class="grid grid-cols-4 justify-items-center">
      <div class="col-start-2 col-span-2 title">
        {{ pokemonName }}
      </div>
      <div class="col-span-4 border-t horizontal-rule">
      </div>
      <div class="col-span-4 description">
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
  padding-bottom: 4px;
  padding-top: 4px;
}
.description {
  padding: 5px 12px 12px 12px;
  font-size: 14px;
}
.horizontal-rule {
  border-color:black;
  padding-bottom: 5px;
  width: 100%;
}
.card-image {
  padding-top: 5px;
}
</style>