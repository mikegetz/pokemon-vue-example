
//TODO: create page and separate search component from page

<script setup lang="ts">
import { ref } from 'vue';
import PokeCard from '../components/PokeCard.vue';
import Search from '../components/Search.vue'

const pokemonImg = ref('');
const pokemonName = ref('');
const pokemeonDescription = ref('');

const searchCallback = (img, name, description) => {
 pokemonImg.value = img;
 pokemonName.value = name;
 pokemeonDescription.value = description;
}
</script>

<template>
    <div class="m-24">
    <Search :method="searchCallback"/>
    <div v-if="pokemonImg" class="grid grid-cols-4 gap-2">
      <PokeCard :pokemonImg="pokemonImg" :pokemonName="pokemonName" :pokemonDescription="pokemeonDescription"/>
    </div>
  </div>
</template>
