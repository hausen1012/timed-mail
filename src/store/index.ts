import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
  state: () => ({
    count: 0
  }),
  getters: {

  },
  actions: {

  },
  persist: {
    key: 'mainStore',
    storage: window.sessionStorage,
    // 部分持久化状态的点符号路径数组，[]意味着没有状态被持久化(默认为undefined，持久化整个状态)
    paths: ['count','save.[].me'],
    beforeRestore: (ctx) => {
      console.log(`about to restore '${ctx.store.$id}'`)
    },
    afterRestore: (ctx) => {
      console.log(`just restored '${ctx.store.$id}'`)
    }
  },
});