<script setup lang="ts">
import { useStore } from '@/store';
import { getUserInfo } from './service';
import { onMounted } from 'vue';

const store = useStore();

const handleIncrease = () => {
  store.count++;
}

onMounted(async () => {
  try {
    const data = {
      userId: 11
    }

    const res = await getUserInfo(data);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
});
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