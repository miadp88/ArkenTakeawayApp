<!-- src/components/Layout/NavBarOrderComponent.vue -->
<template>
  <nav class="flex items-center justify-between p-6 bg-NavColor">
    <!-- ... (existing code) ... -->

    <!-- Cart Icon with Counter -->
    <div class="relative">
      <!-- Cart SVG Icon -->
      <svg
        class="w-8 h-8 cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        @click="showCart"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 19c-1.816 0-3-1.184-3-3s1.184-3 3-3 3 1.184 3 3-1.184 3-3 3zm13-5V7a3 3 0 0 0-3-3H4a3 3 0 0 0-3 3v7h2a3 3 0 0 0 6 0h4a3 3 0 0 0 6 0h2zM9 16v2a1 1 0 1 0 2 0v-2m6 0v2a1 1 0 1 0 2 0v-2"
        ></path>
      </svg>

      <!-- Counter Circle -->
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
  // ... (existing code) ...

  setup() {
    const cartCount = computed(() => useCartStore().clickCount);

    // ... (existing setup code) ...

    return {
      cartCount,
    };
  },
};
</script>
