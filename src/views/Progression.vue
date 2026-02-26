<script setup>
import { store } from '@/stores';
import TheWelcome from '../components/TheWelcome.vue'


</script>

<template>
  <main>
    <h1>Progression</h1>

    <div v-for="cat in store" class="categories">
      <h2 >{{ cat.catName }}</h2>

      <div class="cate-items">
        <ul v-for="item in cat.items">{{ item.name }}</ul>
      </div>
    </div>
    
  </main>
</template>
