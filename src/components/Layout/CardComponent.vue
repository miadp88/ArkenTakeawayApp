<!-- src/components/Layout/CardComponent.vue -->
<template>
  <div class="w-full max-w-md mx-auto bg-welcomebtnbackground rounded-3xl shadow-xl overflow-hidden">
    <!-- ... (existing code) ... -->

    <button
      class="text-black block mt-10 w-full justify-center items-center px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-btnBlue rounded-[14px] hover:bg-btnBlueHover focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
      @click.prevent="addToCart"
    >
      Bestil
    </button>
  </div>
</template>

<script>
import { ref } from 'vue';
import Notification from '@/components/Layout/Notification.vue';
import { useCartStore } from '@/stores/index';

export default {
  // ... (existing code) ...

  setup() {
    // ... (existing setup code) ...

    const addToCart = () => {
      const menu = {
        name: 'Dummy Menu', // Replace with actual menu data
        price: 10, // Replace with actual menu data
        image: 'menu.jpg', // Replace with actual menu data
      };
      
      // Increment the counter in the store
      useCartStore().addMenu(menu);
      useCartStore().incrementClickCount();

      // Set notification message
      notificationMessage.value = 'Your order is successfully added to the cart!';
      showNotification.value = true;

      // Hide notification after 3 seconds (adjust as needed)
      setTimeout(() => {
        showNotification.value = false;
      }, 3000);
    };

    return {
      addToCart,
      // ... (other return values) ...
    };
  },
};
</script>
