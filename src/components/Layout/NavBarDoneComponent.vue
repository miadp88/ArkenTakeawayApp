
  <template>
    <nav class="bg-NavColor">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <div class="flex-shrink-0 flex items-center">
            </div>
          </div>
          <div class="flex justify-center w-full">
            <div class="flex-shrink-0 flex items-center">
              <img src="../../assets/images/13694_logo.jpg" alt="Logo" class="h-12 w-auto">
            </div>
          </div>
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
    background-color: black!important;
  }
</style>