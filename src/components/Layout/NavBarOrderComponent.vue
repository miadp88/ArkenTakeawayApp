<!-- src/components/Layout/NavBarOrderComponent.vue -->
<template>
  <nav class="bg-NavColor">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex-shrink-0 flex items-center">
            <router-link to="/" class="text-white mx-12" @click="goBack">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </router-link>
          </div>
        </div>
        <div class="flex justify-center w-full">
          <div class="flex-shrink-0 flex items-center">
            <img src="../../assets/images/13694_logo.jpg" alt="Logo" class="h-12 w-auto">
          </div>
        </div>
        <div class="hidden sm:ml-6 sm:flex sm:items-center">
          <router-link to="/" class="  text-white px-3 py-2 rounded-md text-sm font-medium" active-class="bg-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
          </router-link>
          <router-link to="/" class=" mr-10 text-white px-3 py-2 rounded-md text-sm font-medium" active-class="bg-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
          </router-link>
        </div>
        <div class="-mr-2 flex items-center sm:hidden">
          <button @click="toggleMenu" type="button" class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            <span class="sr-only">Open main menu</span>
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div class="hidden sm:hidden" :class="{'block': menuOpen, 'hidden': !menuOpen}">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <router-link to="/" class="text-white block px-3 py-2 rounded-md text-base font-medium" active-class="bg-gray-900">Home</router-link>
        <router-link to="/" class="text-white block px-3 py-2 rounded-md text-base font-medium" active-class="bg-gray-900">Basket</router-link>
      </div>
    </div>
    <div class="flex items-center ml-2">
      <span class="text-white ml-2">{{ getMenuCount() }}</span>
      <!-- ... existing code ... -->
    </div>
  </nav>
</template>

<script>
import { useCartStore } from '@/stores/index';

export default {
  methods: {
    getMenuCount() {
      return useCartStore().getMenuCount();
    },
  },
};
</script>
