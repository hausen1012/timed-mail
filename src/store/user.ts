import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    username: '阿蛮君',
    token: 'xxxxx'
  }),
  getters: {

  },
  actions: {

  }
});