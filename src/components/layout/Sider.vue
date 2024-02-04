<script setup lang="ts">
import { reactive, ref, watch } from 'vue';
import { type RouteRecordRaw, useRouter, useRoute } from 'vue-router';
import type { MenuProps, ItemType } from 'ant-design-vue';

import { routes } from '@/router';

function getMenuItem(_routes: RouteRecordRaw[]): ItemType[] {
  return _routes
    .filter(route => route.meta?.visible)
    .map(route => {
      return {
        key: route.name,
        icon: route.meta?.icon || null,
        label: route.meta?.label,
        type: route.meta?.type,
        children: route.children ? getMenuItem(route.children) : null
      } as ItemType
    })
}

const menuItem = getMenuItem(routes);

const items: ItemType[] = reactive(menuItem);

const route = useRoute();
const router = useRouter();

const selectedKeys = ref<string[]>([]);
const routeNameWatch = watch(() => route.name, (newName) => {
  if (selectedKeys.value.length > 0) {
    routeNameWatch();
  }

  selectedKeys.value = [ newName as string ];
}, {
  immediate: true
});

const openKeys = ref<string[]>(['sub1']);

const handleClick: MenuProps['onClick'] = e => {
  router.push({
    name: e.key as string
  });
}
</script>

<template>
  <div class="sider">
    <div class="sider-header">
      <img class="sider-header-logo" src="@/assets/images/logo.png" alt="">
    </div>

    <a-menu
      class="sider-menu"
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      theme="dark"
      :items="items"
      @click="handleClick"
    />
  </div>
</template>

<style lang="less" scoped>
.sider {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .sider-header {
    padding: 12px;
    height: @headerHeight;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    .sider-header-logo {
      height: 100%;
    }
  }

  .sider-menu {
    padding-top: @siderMenuVerticalPadding;
    padding-bottom: @siderMenuVerticalPadding;
    flex: auto;
    overflow: auto;
  }
}
</style>