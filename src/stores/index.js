// src/store/index.js
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    selectedMenus: [],
  }),
  actions: {
    addMenu(menu) {
      this.selectedMenus.push(menu);
    },
    getMenuCount() {
      return this.selectedMenus.length;
    },
  },
});
