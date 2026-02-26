<script setup>
import { store } from '@/stores/counter';
import TheWelcome from '../components/TheWelcome.vue'

console.log(store.nail.map(n => n.name));



// if (store.nail.map(n => n.name) !== "Vieux aiguillon"){
  
// }

const nameNail = store.nail.slice(1).map(n => n.name)
const nameNailArt = store['nail-arts'].map(n => n.name)
const nameSpells = store.spells.map(n => n.name)


</script>

<template>
  <main>
    <h1>Progression</h1>

    <div class="categories">
      <h2>Aiguillon 4%</h2>


      <div class="cate-items">
        <p v-for="name in nameNail">{{ name }}</p>
      </div>
    </div>

    <div class="categories">
      <h2>Art de l'Aiguillon 3%</h2>

      <div class="cate-items">
        <p v-for="name in nameNailArt">{{ name }}</p>
      </div>
    </div>

    <div class="categories">
      <h2>Sorts 6%</h2>

      <div class="cate-items">
        <p v-for="name in nameSpells">{{ name }}</p>
      </div>
    </div>

    <div class="categories">
      <h2>Sorts 6%</h2>

      <div class="cate-items">
        <p v-for="name in nameSpells">{{ name }}</p>
      </div>
    </div>

  </main>
</template>
