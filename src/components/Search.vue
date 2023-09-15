<script setup lang="ts">
import { ref } from 'vue';
import { pokemonRequest, loadDescription } from '../api/pokemon-request';
import PokeCard from './PokeCard.vue';

const searchInput = ref('');
const pokemonImg = ref('');
const pokemonName = ref('');
const pokemeonDescription = ref('');

const makeRequest = async () => {
  try {
    const pokemonResult = await pokemonRequest(searchInput.value.toLowerCase());
    pokemonImg.value = pokemonResult.data.sprites.other["official-artwork"].front_default;
    pokemonName.value = pokemonResult.data.name;
    pokemeonDescription.value = await loadDescription(pokemonResult.data.species.url);
  } catch (e) {
    //TODO: banner
  }
  searchInput.value = "";
};

</script>

<template>
    <div class="m-24">
    <div class="grid grid-cols-10 gap-4">
      <div class="col-start-4 col-span-3">
        <input type="text" v-model="searchInput" v-on:keyup.enter="makeRequest" placeholder="search pokemon"/>
      </div>
        <button @click="makeRequest" class="btn btn-blue">Search</button>
    </div>
    <div v-if="pokemonImg" class="grid grid-cols-4 gap-2">
      <PokeCard :pokemonImg="pokemonImg" :pokemonName="pokemonName" :pokemonDescription="pokemeonDescription"/>
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