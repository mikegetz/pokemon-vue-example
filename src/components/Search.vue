<script setup lang="ts">
import { ref } from 'vue';
import { pokemonRequest, loadDescription } from '../api/pokemon-request';
import Banner from './Banner.vue';

const props = defineProps({
  method: {
    type: Function,
  }
});
const searchInput = ref('');
const bannerOpen = ref(false);

const makeRequest = async () => {
  try {
    const pokemonResult = await pokemonRequest(searchInput.value.toLowerCase());
    const img = pokemonResult.data.sprites.other["official-artwork"].front_default;
    const name = pokemonResult.data.name;
    const description = await loadDescription(pokemonResult.data.species.url);
    props.method!(img, name, description);
  } catch (e) {
    bannerOpen.value = true;
    setTimeout(() => { bannerOpen.value = false; }, 3000);
  }
  searchInput.value = "";
};

</script>

<template>
  <div class="m-24">
    <div class="grid grid-cols-10 gap-4">
      <div class="col-start-4 col-span-3">
        <input type="text" v-model="searchInput" v-on:keyup.enter="makeRequest" placeholder="search pokemon" />
      </div>
      <button @click="makeRequest" class="btn btn-blue">Search</button>
      <Banner :bannerOpen="bannerOpen"/>
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