
<template>
  <div class="w-full h-fit sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 px-2 mb-4">
    <div class="w-full max-w-md mx-auto bg-welcomeCardbackground rounded-3xl shadow-xl overflow-hidden">
     
      <div class="h-40 bg-cover bg-no-repeat" :style="{ backgroundImage: 'url(' + imagePath + ')' }"></div>

      <div class="p-4 sm:p-6">
     
        <h1 class="font-bold text-white text-center text-2xl leading-7 mb-1">{{ menu.name }}</h1>

        <h2 class="text-white text-center text-lg">{{ menu.price }} DDK</h2>

        <button
          class=" btnBestil text-black block mt-6 w-full justify-center items-center px-4 py-3  tracking-wide text-center capitalize transition-colors duration-300 transform bg-btnBlue rounded-[14px] hover:bg-btnBlueHover focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
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

const props = defineProps(['menu', 'imagePath']);

const showNotification = ref(false);
const notificationMessage = ref('');

const menu = { ...props.menu, image: props.imagePath };

const addToCart = () => {
  useCartStore().addMenu(menu);


  notificationMessage.value = 'Your order is successfully added to the cart!';
  showNotification.value = true;

  setTimeout(() => {
    showNotification.value = false;
  }, 3000);
};
</script>

<style>
  .btnBestil{
    font-size:medium;
  }
</style>