<template>
  <div class="app">
    <header>
      <NavBar />
    </header>

    <div class="content-wrapper">
      <main>
        <HeroWelcome />
        
      </main>

      <router-view />
    </div>

    <footer class="FooterWelcome">
      <Footer />
    </footer>
  </div>
</template>

<script setup>
/* imports */
import NavBar from '@/components/Layout/NavBarComponent.vue'
import Footer from '@/components/Layout/FooterComponent.vue'
import HeroWelcome from '@/components/Layout/HeroWelcomeComponent.vue'
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  z-index: 1; /* Ensure the header stays on top */
}

.content-wrapper {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  margin-top: -10px; /* Remove white space between header and main */
}

main {
  flex-grow: 1;
  padding-bottom: 20vh;
}

.FooterWelcome {
  margin-top: -19vh; 
}
</style>
