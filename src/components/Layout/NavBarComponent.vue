
  <template>
    <nav class="NavBar bg-NavColor justify-between p-3 px-6 bg-NavColor">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between">
          <div class="flex">
            <div class="flex-shrink-0 flex items-center">
              
            </div>
          </div>
          <div class="flex justify-center w-full">
            <div class="flex-shrink-0 flex items-center">
              <img class="h-20" src="../../assets/images/ArkenLogoBlaa.png" alt="Logo" />
            </div>
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:items-center">
            
            <router-link to="/" class=" text-white px-3 py-2 rounded-md text-sm font-medium" active-class="bg-black">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
              </svg>

            </router-link>
          </div>
          <div class="-mr-2 flex items-center sm:hidden">
            <button @click="toggleMenu" type="button" class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
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
          <router-link to="#" class="text-white block px-3 py-2 rounded-md text-base font-medium" active-class="bg-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
              </svg>
          </router-link>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default {
    setup() {
      const router = useRouter();
      const menuOpen = ref(false);
  
      const goBack = () => {
        router.go(-1);
      };
  
      const toggleMenu = () => {
        menuOpen.value = !menuOpen.value;
      };
  
      return {
        goBack,
        menuOpen,
        toggleMenu,
      };
    },
  }
  </script>
  
  <style>
  /* Add any custom styles for the navbar here */
  </style>

<style>
  .NavBar{
    height: 11.5vh;
  }
</style>