<script setup lang="ts">
import { useStore } from '@/store';

const store = useStore();

const handleIncrease = () => {
  store.count++;
}
</script>

<template>
  <div class="home">
    首页{{ store.count }}
    <a-button @click="handleIncrease">+1</a-button>
  </div>
</template>

<style lang="less" scoped>
.home {
  
}
</style>