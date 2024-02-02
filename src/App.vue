<script setup lang="ts">
import Layout from '@/components/layout/Layout.vue';
</script>

<template>
  <Layout>
    <router-view v-slot="{ Component, route }">
      <transition mode="out-in">
        <keep-alive v-if="route.meta.keepAlive">
          <component :is="Component" />
        </keep-alive>
        <component v-else :is="Component" />
      </transition>
    </router-view>
  </Layout>
</template>

<style scoped>

</style>
