<template>
  <div>
    <NavBarOrder />
    <main>
      <HeroAll />
      <section>
        <h1 class="mt-20 text-5xl font-extrabold tracking-tight text-center leading-none text-white md:text-5xl lg:text-6xl dark:text-white tracking-wider">Vælg Sæson Menu</h1>
        <div class="flex items-center justify-center min-h-screen px-6">
          <Card v-for="menu in menus" :key="menu.id" :menu="menu" />
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import HeroAll from "@/components/Layout/HeroAllComponent.vue";
import Card from "@/components/Layout/CardComponent.vue";
import NavBarOrder from "@/components/Layout/NavBarOrderComponent.vue";
import { ref } from "vue";

const menus = ref([
  {
    id: 1,
    name: "Dummy Menu 1",
    price: 10,
    image: "path/to/your/image1.jpg", 
  },
  {
    id: 2,
    name: "Dummy Menu 2",
    price: 15,
    image: "path/to/your/image2.jpg", 
  },
 
]);

</script>
