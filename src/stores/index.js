import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    selectedMenus: [],
    clickCount: 0,
  }),
  actions: {
    addMenu(menu) {
      this.selectedMenus.push(menu);
    },
    getMenuCount() {
      return this.selectedMenus.length;
    },
    incrementClickCount() {
      this.clickCount += 1;
    },
  },
});
