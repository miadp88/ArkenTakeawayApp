<template>
  <div class="menu-view">
      <header>
      <NavBar />
    </header>
    <div main-content-weapper>
      <main class="main-content">
        <HeroWelcome />
       
        <a href="" class="scroll-down-link scroll-down-arrow" data-iconfont="ETmodules" data-icon>
        </a>
      </main>

      <footer class="FooterWelcome">
        <Footer />
      </footer>
    </div>
    <router-view />
  </div>
</template>

<script setup>

/*imports*/

import NavBar from '@/components/Layout/NavBarComponent.vue'
import Footer from '@/components/Layout/FooterComponent.vue'
import HeroWelcome from '@/components/Layout/HeroWelcomeComponent.vue'

</script>

<style scoped>
.menu-view {
  position: relative;
}

.main-content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1

}




</style>