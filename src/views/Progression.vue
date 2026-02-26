<script setup>
import { store, itemsSelected } from '@/stores';
import { reactive } from 'vue';

const selected = (name) => {
  itemsSelected.push(name)

  localStorage.setItem("itemSelected", itemsSelected)
}

let percentage = 0

const increasePercentage = (itemPercentage) => {
  percentage += itemPercentage
  console.log(percentage);
  
}

</script>

<template>
  <main>
    <h1>Progression {{ percentage + "%" }}</h1>
    <div>{{ itemsSelected }}</div>

    <div v-for="cat in store" class="categories">
      <h2>{{ cat.catName }}</h2>

      <div class="cate-items">
        <ul v-for="item in cat.items" @click="selected(item.name), increasePercentage(item.percentage)" :key="item">{{ item.name }}</ul>
      </div>
    </div>
    
  </main>
</template>

<style>
  ul{
    user-select: none;
    cursor: pointer;
  }
</style>