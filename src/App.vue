<template>
  <header>
    <NavBar />
  </header>
  
  <router-view />
</template>

<script setup>

/*imports*/

import NavBar from '@/components/Layout/NavBar.vue'
</script>

<style>
  @import '../node_modules/bulma/css/bulma-rtl.min.css';
 
</style>