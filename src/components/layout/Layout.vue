<script setup lang="ts">
import Header from './Header.vue';
import Footer from './Footer.vue';
import Sider from './Sider.vue';

import { siderWidth } from '@/assets/styles/global.module.less';
</script>

<template>
  <a-layout class="layout">

    <a-layout-sider
      class="layout-sider"
      collapsible 
      :width="siderWidth"
    >
      <Sider />
    </a-layout-sider>
    
    <a-layout>
      <a-layout-header class="layout-header">
        <Header />
      </a-layout-header>

      <a-layout class="layout-content">
        <a-layout-content class="layout-main">
          <slot />
        </a-layout-content>

        <a-layout-footer class="layout-footer">
          <Footer />
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<style lang="less" scoped>
.layout {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  .layout-sider {
    width: @siderWidth;
  }
  .layout-header {
    padding: @headerPadding;
    height: @headerHeight;
    display: flex;
    align-items: center;
  }
  .layout-content {
    overflow: auto;
    .layout-main {
      padding: @contentPadding;
      min-height: unset;
      background-color: @contentBackgroundColor;
    }
    .layout-footer {
      padding: @footerPadding;
      height: @footerHeight;
      flex-shrink: 0;
    }
  }
}
</style>