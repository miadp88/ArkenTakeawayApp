<template>
     <header>
    <NavBar />
  </header>

  <main>
    <HeroWelcome />
    <section class="SpacerHandler"></section>
  </main>

  <footer>
    <Footer />
  </footer>

  <router-view />
</template>

<script setup>

/*imports*/

import NavBar from '@/components/Layout/NavBar.vue'
import Footer from '@/components/Layout/Footer.vue'
import HeroWelcome from '@/components/Layout/HeroWelcome.vue'

</script>

