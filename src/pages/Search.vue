
//TODO: create page and separate search component from page

<script setup lang="ts">
import { ref } from 'vue';
import { Pokemon } from '../types/pokemon';
import PokeCards from '../components/PokeCards.vue';
import Search from '../components/Search.vue'

const pokemons = ref<Array<Pokemon>>([]);

const searchCallback = (img, name, description) => {
  pokemons.value.push({
    name: name,
    img: img,
    description: description,
  });
}
</script>

<template>
  <div class="m-24">
    <Search :method="searchCallback" />
    <PokeCards :pokemons="pokemons" />
  </div>
</template>
