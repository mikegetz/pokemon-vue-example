<script setup lang="ts">
import { ref } from 'vue';
import { pokemonRequest } from '../api/pokemon-request';

const searchInput = ref('');
const pokemonImg = ref('');

const makeRequest = async () => {
  try {
    const result = await pokemonRequest(searchInput.value.toLowerCase());
    pokemonImg.value = result.data.sprites.other["official-artwork"].front_default
  } catch (e) {
    //TODO: banner
  }
  searchInput.value = "";
};
</script>

<template>
    <div class="max-w-screen-lg m-auto mt-24">
    <div class="grid grid-cols-6 gap-4">
      <div class="col-start-2 col-span-3">
        <input type="text" v-model="searchInput" v-on:keyup.enter="makeRequest" placeholder="search pokemon"/>
      </div>
      <button @click="makeRequest" class="btn btn-blue">Search</button>
    </div>
    <div class="grid grid-cols-4 gap-2">
      <img v-bind:src="pokemonImg"/>
    </div>
  </div>
</template>

<style scoped>

input[type=text] {
  padding: 5px;
  border: 2px solid #ccc;
  border-radius: 6px;
  width: 100%;
}

.btn {
  @apply font-bold py-2 px-4 rounded;
}
.btn-blue {
  @apply bg-blue-500 text-white;
}
.btn-blue:hover {
  @apply bg-blue-700;
}
</style>