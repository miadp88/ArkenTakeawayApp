
  <template>
    <nav class="flex items-center justify-between p-3 px-6 bg-NavColor">
    <!-- Arrow pointing left on the left side -->
    <div class="w-8 h-8 text-transparent" @click="goBack">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15.75 19.5 8.25 12l7.5-7.5"
        ></path>
      </svg>
    </div>

    <!-- Logo in the middle -->
    <router-link to="/">
      <img class="h-20" src="../../assets/images/ArkenLogoBlaa.png" alt="Logo" />
    </router-link>

    <!-- Cart in the top right corner -->
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
          d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
        ></path>
      </svg>

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