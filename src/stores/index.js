// index.js (path: C:\Users\miadp\Desktop\ArkenFoodDevApp\ArkenTakeawayApp\src\stores\index.js)
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    selectedMenus: [],
    clickCount: 0,
  }),
  actions: {
    addMenu(menu) {
      const existingMenu = this.selectedMenus.find((m) => m.id === menu.id);

      if (existingMenu) {
        existingMenu.quantity += 1;
      } else {
        this.selectedMenus.push({ ...menu, quantity: 1 });
      }
    },
    getMenuCount() {
      return this.selectedMenus.length;
    },
    getTotalAmount() {
      return this.selectedMenus.reduce((total, item) => total + item.price * item.quantity, 0);
    },
    incrementClickCount() {
      this.clickCount += 1;
    },
    incrementQuantity(menuId) {
      const menu = this.selectedMenus.find((m) => m.id === menuId);
      if (menu) {
        menu.quantity += 1;
      }
    },
    decrementQuantity(menuId) {
      const menu = this.selectedMenus.find((m) => m.id === menuId);
      if (menu && menu.quantity > 1) {
        menu.quantity -= 1;
      }
    },
    removeItem(menuId) {
      this.selectedMenus = this.selectedMenus.filter((menu) => menu.id !== menuId);
    },
  },
});
