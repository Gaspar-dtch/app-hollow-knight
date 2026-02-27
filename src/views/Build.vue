<script setup>
import { state, charmsSelected } from '@/stores';
import { normalizeModuleId } from 'vite/module-runner';
import { reactive, ref } from 'vue';

</script>

<template>
  <main>
    <h1>Build</h1>
    <div>{{ charmsSelected }}</div>
    <div></div>

      <!-- <div v-for="charm in state[6].items" class="charm-items">
        <input type="checkbox" :id="charm.name" :value="charm.name" />
        <label :for="charm.name" @click="selected(charm)" :key="charm" >{{ charm.name }}</label>
      </div> -->

      <div v-for="charm in state[6].items" class="charm-items">
        <input type="checkbox" :id="charm.name" :value="charm.name" v-model="charmsSelected" />
        <label :for="charm.name" :key="charm" >{{ charm.name }}</label>
      </div>
  </main>
</template>