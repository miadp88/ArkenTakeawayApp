<!-- src/components/Layout/CardComponent.vue -->
<template>
  <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 px-2 mb-4">
    <div class="w-full max-w-md mx-auto bg-welcomebtnbackground rounded-3xl shadow-xl overflow-hidden">
      <!-- Image at the top -->
      <div class="h-40 bg-cover" :style="{ backgroundImage: 'url(' + menu.image + ')' }"></div>

      <div class="p-4 sm:p-6">
        <!-- h1 element -->
        <h1 class="font-bold text-white text-center text-2xl leading-7 mb-1">{{ menu.name }}</h1>

        <!-- h2 element in the next line -->
        <h2 class="text-white text-center text-lg">{{ menu.price }} DDK</h2>

        <button
          class="text-black block mt-6 w-full justify-center items-center px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-btnBlue rounded-[14px] hover:bg-btnBlueHover focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
          @click.prevent="addToCart"
        >
          Bestil
        </button>
      </div>

      <Notification v-if="showNotification" :message="notificationMessage" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Notification from '../../components/Layout/Notification.vue';
import { useCartStore } from '../../stores/index';

// Import the image
import menuImage from '../../assets/images/Menu1.jpeg';

const props = defineProps(['menu']);

const showNotification = ref(false);
const notificationMessage = ref('');

// Use the imported image
const menu = { ...props.menu, image: menuImage };

const addToCart = () => {
  useCartStore().addMenu(menu);

  // Set notification message
  notificationMessage.value = 'Your order is successfully added to the cart!';
  showNotification.value = true;

  // Hide notification after 3 seconds (adjust as needed)
  setTimeout(() => {
    showNotification.value = false;
  }, 3000);
};

</script>
