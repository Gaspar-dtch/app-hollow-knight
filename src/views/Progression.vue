<script setup>
import { state, itemsSelected } from '@/stores';
import { normalizeModuleId } from 'vite/module-runner';
import { reactive, ref } from 'vue';

// const itemsSelected = reactive([])

// let percentage = 0

// const selected = (item) => {

//   const isItemSelected = (element) => element === item.name

//   if(parseInt(itemsSelected.findIndex(isItemSelected)) === -1){
//     itemsSelected.push(item.name)
//     percentage += item.percentage

//   } else {
//     itemsSelected.splice(isItemSelected, 1)
//     percentage -= item.percentage
//   }
//   localStorage.setItem("itemSelected", itemsSelected)
// }


</script>

<template>
  <main>
    <h1>Progression {{ percentage + "%" }}</h1>
    <div>{{ itemsSelected }}</div>

    <div v-for="cat in state" class="categories">
      <h2>{{ cat.catName }}</h2>

      <div v-for="item in cat.items" class="cate-items">
        <input type="checkbox" :id="item.name" :value="item.name"  v-model="itemsSelected" />
        <label :for="item.name" @click="selected(item)" :key="item" >{{ item.name }}</label>
      </div>
    </div>
  </main>
</template>

<style>
  label{
    user-select: none;
    cursor: pointer;
  }
</style>