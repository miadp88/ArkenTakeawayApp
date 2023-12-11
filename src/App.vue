<template>
  <header>
    <NavBar />
  </header>

  <main>
    <MainContent />
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
import MainContent from '@/components/Layout/MainContent.vue'
</script>

<style>
  @import '../node_modules/bulma/css/bulma-rtl.min.css';


    main{
      width: 70vw;
      margin: auto;
    }
    footer{
      margin-top: -10vh;
    }

    .SpacerHandler{
      height: 80vh;
      background-image: url('/src/assets/images/BottumBagrund.jpeg');
      background-repeat: no-repeat;
      background-position: bottom center;
      background-size: 60vw 40vh;
    }
  
 
</style>