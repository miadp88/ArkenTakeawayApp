<!-- src/views/MenuView.vue -->
<template>
  <div>
    <NavBarOrder />
    <main>
      <HeroAll />
      <section>
        <h1 class="mt-20 text-5xl font-extrabold tracking-tight text-center leading-none text-white md:text-5xl lg:text-6xl dark:text-white tracking-wider">Vælg Sæson Menu</h1>
        <div class="flex items-center justify-center min-h-screen px-6">
          <Card v-for="menu in getMenu()" :key="menu.id" :menu="menu" :imagePath="menu.image" />
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
    name: "Menu 1",
    price: 275,
    image: "../../src/assets/images/Menu1.jpeg", 
  },
  {
    id: 2,
    name: "Menu 2",
    price: 150,
    image: "../../src/assets/images/Menu2.jpeg", 
  },
  {
    id: 3,
    name: "Menu 3",
    price: 150,
    image: "../../src/assets/images/Menu5.jpg", 
  },
  {
    id: 4,
    name: "Menu 4",
    price: 150,
    image: "../../src/assets/images/Menu6.jpg", 
  },
]);

const getMenu = () => {
  return menus.value.map(menu => ({ ...menu }));
};

</script>
