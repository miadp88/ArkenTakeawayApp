<template>
  <header>
    <NavBarDone />
  </header>
  <main class="InfoMain">
    <HeroDone />
  </main>
</template>

<script setup>
import HeroDone from '@/components/Layout/HeroDoneComponent.vue'
import NavBarDone from '@/components/Layout/NavBarDoneComponent.vue'
</script>

<style>
.InfoMain {
  height: 102vh;
}
</style>
