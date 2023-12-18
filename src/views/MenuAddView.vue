<template>
    <header>
     <NavBarOrder />
   
 </header>

   <main>
       <HeroAll />
       <section>
         <h1 class="mt-20 text-5xl font-extrabold tracking-tight text-center leading-none text-white md:text-5xl lg:text-6xl dark:text-white tracking-wider ">Vælg Sæson Menu</h1>
         <div class='flex items-center justify-center min-h-screen px-6'>
           <Card />
           <Card />
         </div>
      </section>
      
   </main>

   <router-view />
</template>

<script setup>
import HeroAll from "@/components/Layout/HeroAllComponent.vue"
import Card from '@/components/Layout/CardComponent.vue'
import NavBarOrder from '@/components/Layout/NavBarOrderComponent.vue'
</script>