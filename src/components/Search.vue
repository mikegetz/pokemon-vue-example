<script setup lang="ts">
import { ref } from 'vue';
import { pokemonRequest } from '../api/pokemon-request';

const searchInput = ref('');
const pokemonImg = ref('');

const makeRequest = async () => {
  console.log(searchInput.value);
  const result = await pokemonRequest(searchInput.value);
  pokemonImg.value = result.data.sprites.other["official-artwork"].front_default
};
</script>

<template>
    <div class="max-w-screen-lg m-auto mt-24">
    <div class="flex flex-wrap justify-center">
      <input type="text" v-model="searchInput" v-on:keyup.enter="makeRequest" placeholder="search pokemon"/>
      <div class="ml-6">
        <button @click="makeRequest" class="btn btn-blue">Search</button>
      </div>
    </div>
    <img v-bind:src="pokemonImg"/>
  </div>
</template>

<style scoped>

input[type=text] {
  padding: 5px;
  border: 2px solid #ccc;
  border-radius: 6px;
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