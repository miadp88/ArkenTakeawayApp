<template>
  <nav class="flex items-center justify-between p-6 bg-NavColor">
    <router-link to="/">
      <img class="h-8" src="../../assets/images/13694_logo.jpg" alt="Logo" />
    </router-link>

    <div class="relative" @click="showCart">
      <svg
        class="w-8 h-8 cursor-pointer text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path>
      </svg>




      <div class="absolute top-0 right-0 -mt-1 -mr-1">
        <div class="bg-red-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
          {{ cartCount }}
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref, computed } from 'vue';
import { useCartStore } from '@/stores/index';

export default {
  setup() {

    const cartCount = computed(() => useCartStore().getMenuCount());

    // Existing code ...

    return {
      // Existing return values ...
      cartCount,
    };
  },
};
</script>

