<script setup lang="ts">
import Layout from '@/components/layout/Layout.vue';
</script>

<template>
  <router-view v-slot="{ Component, route }">
    <transition mode="out-in">
      <keep-alive v-if="route.meta.keepAlive">
        <Layout v-if="route.meta.visible || route.meta.useLayout">
          <component :is="Component" />
        </Layout>
        <component v-else :is="Component" />
      </keep-alive>

      <template v-else>
        <Layout v-if="route.meta.visible || route.meta.useLayout">
          <component :is="Component" />
        </Layout>
        <component v-else :is="Component" />
      </template>
    </transition>
  </router-view>
</template>

<style scoped>

</style>
