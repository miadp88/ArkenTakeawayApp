<template>
   <header>
        <NavBarOrder />
   </header>
   <main class="InfoMain">
        <HeroAll />
        <InfoForm />
   </main>


</template>

<script setup>
    import InfoForm from '@/components/Layout/InforForm.vue'
    import HeroAll from "@/components/Layout/HeroAll.vue"
    import NavBarOrder from '@/components/Layout/NavBarOrder.vue'
</script>

<style>
    .InfoMain{
        height: 102vh;
    }
</style>