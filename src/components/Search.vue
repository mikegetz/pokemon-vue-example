<script setup lang="ts">
import { ref } from 'vue';
import { pokemonRequest, genericPokemonAPIRequest } from '../api/pokemon-request';
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

const loadDescription = async (url) => {
  const speciesResult = await genericPokemonAPIRequest(url);
  let descriptions = speciesResult.data.flavor_text_entries;
  descriptions = descriptions.filter((description) => description.language.name === "en");
  descriptions = descriptions.slice(0, 5);
  descriptions = descriptions.map((description) => description.flavor_text);
  descriptions = descriptions.filter((description, index) => descriptions.indexOf(description) === index);
  descriptions = descriptions.map((description) => description.replace(/[^a-z0-9]/gim, " ").trim());
  const description = descriptions.join(". ").concat(".");
  return description;
};
</script>

<template>
    <div class="ml-20 mt-24">
    <div class="grid grid-cols-8 gap-4">
      <div class="col-start-3 col-span-3">
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