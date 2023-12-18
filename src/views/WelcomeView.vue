<template>
     <header>
    <NavBar />
  </header>

  <main>
    <HeroWelcome />
    <section class="SpacerHandler"></section>
    <a href="" class="scroll-down-link scroll-down-arrow" data-iconfont="ETmodules" data-icon>
</a>
  </main>

  <footer>
    <Footer />
  </footer>

  <router-view />
</template>

<script setup>

/*imports*/

import NavBar from '@/components/Layout/NavBarComponent.vue'
import Footer from '@/components/Layout/FooterComponent.vue'
import HeroWelcome from '@/components/Layout/HeroWelcomeComponent.vue'

</script>

