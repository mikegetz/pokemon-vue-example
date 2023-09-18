
<script setup lang="ts">
import { onMounted } from 'vue';
import { Pokemon } from '../types/pokemon';
import PokeCard from '../components/PokeCard.vue';

const props = defineProps({
  pokemons: Array<Pokemon>,
})

onMounted(() => {
  console.log(props.pokemons);
});

</script>

<template>
  <div class="grid grid-cols-4 gap-10">
    <div v-for="pokemon in pokemons">
      <PokeCard :pokemon-name="pokemon.name" :pokemon-description="pokemon.description" :pokemon-img="pokemon.img" />
    </div>
  </div>
</template>