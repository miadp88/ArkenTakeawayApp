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
    import InfoForm from '@/components/Layout/InfoFormComponent.vue'
    import HeroAll from "@/components/Layout/HeroAllComponent.vue"
    import NavBarOrder from '@/components/Layout/NavBarOrderComponent.vue'
</script>

<style>
    .InfoMain{
        height: 102vh;
    }
</style>