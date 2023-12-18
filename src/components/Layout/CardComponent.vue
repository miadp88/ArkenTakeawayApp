<!-- src/components/Layout/CardComponent.vue -->
<template>
  <div class='w-full max-w-md mx-auto bg-welcomebtnbackground rounded-3xl shadow-xl overflow-hidden'>
    <div class='max-w-md mx-auto'>
      <div class='h-[236px] bg-cover' style='background-image:url(../../src/assets/images/Menu1.jpeg)'>
      </div>
      <div class='p-4 sm:p-6'>
        <p class='font-bold text-white text-center text-[42px] leading-7 mb-1'>Sæsonmenu</p>
        <div class='flex flex-row'>
          <p class='text-white text-center text-[27px] w-full'>Pris DDK</p>
        </div>
        <p class='text-[#7C7C80] font-[15px] mt-6'>Some text telling something about the menu </p>

        <button
          class='text-black block mt-10 w-full justify-center items-center px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-btnBlue rounded-[14px] hover:bg-btnBlueHover focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'
          @click.prevent="addToCart"
        >
          Bestil
        </button>

      </div>
    </div>
    <Notification v-if="showNotification" :message="notificationMessage" />
  </div>
</template>

<script>
import { ref } from 'vue';
import Notification from '@/components/Layout/Notification.vue';
import { useCartStore } from '@/stores/index';

export default {
  components: {
    Notification,
  },
  setup() {
    const showNotification = ref(false);
    const notificationMessage = ref('');

    const addToCart = () => {
      const menu = {
        name: 'Dummy Menu', // Replace with actual menu data
        price: 10, // Replace with actual menu data
        image: 'menu.jpg', // Replace with actual menu data
      };
      useCartStore().addMenu(menu);

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
      showNotification,
      notificationMessage,
    };
  },
};
</script>
