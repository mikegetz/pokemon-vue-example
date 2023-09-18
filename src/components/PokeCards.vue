
<script setup lang="ts">
import { Pokemon } from '../types/pokemon';
import PokeCard from '../components/PokeCard.vue';

defineProps({
  pokemons: Array<Pokemon>,
})

</script>

<template>
  <div class="grid grid-cols-4 gap-10">
    <div v-for="pokemon in pokemons">
      <PokeCard :pokemon-name="pokemon.name" :pokemon-description="pokemon.description" :pokemon-img="pokemon.img" />
    </div>
  </div>
</template>