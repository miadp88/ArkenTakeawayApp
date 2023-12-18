<template>
  <nav class="flex items-center justify-between p-6 bg-NavColor">
    <router-link to="/">
      <img class="h-8" src="../../assets/images/13694_logo.jpg" alt="Logo" />
    </router-link>

    <div class="relative" @click="showCart">
      <svg
        class="w-8 h-8 cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 19c-1.816 0-3-1.184-3-3s1.184-3 3-3 3 1.184 3 3-1.184 3-3 3zm13-5V7a3 3 0 0 0-3-3H4a3 3 0 0 0-3 3v7h2a3 3 0 0 0 6 0h4a3 3 0 0 0 6 0h2zM9 16v2a1 1 0 1 0 2 0v-2m6 0v2a1 1 0 1 0 2 0v-2"
        ></path>
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

