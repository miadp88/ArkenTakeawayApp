<!-- src/views/MenuView.vue -->
<template>
  <div class="menu-view">
    <NavBarOrder />
    <main class="main-content">
      <HeroAll />
      <section class="CardSection">
        <h1 class="mt-20 text-5xl font-extrabold tracking-tight text-center leading-none text-white md:text-5xl lg:text-6xl dark:text-white tracking-wider">Vælg Sæson Menu</h1>
        <!-- Use flex and flex-wrap classes for responsiveness -->
        <div class="CardWrapper flex flex-wrap mt-10 justify-center min-h-fit px-6">
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

<style scoped>
.menu-view {
  position: relative;
}

.main-content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
}

.nav-bar-order {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1!important; 
}

.head1, .head2 {
  margin-top: 10vh !important;
  font-size: 5em !important;
}

@media screen and (max-width: 511px) {
  h1 {
    font-size: 2em !important;
  }
}
</style>
