<template>
  <div class="menu-view">
    <NavBarOrder />
    <main class="main-content">
      <HeroAll />
      <section class="CardSection">
        <h1 class="mt-20 text-5xl font-extrabold tracking-tight text-center leading-none text-white md:text-5xl lg:text-6xl dark:text-white tracking-wider">
        Vælg Sæson Menu</h1>
        <div class="CardWrapper flex flex-wrap mt-10 justify-center min-h-fit px-6">
          <Card v-for="menu in getMenu()" :key="menu.id" :menu="menu" :imagePath="menu.image" />
          <a href="" class="scroll-down-link scroll-down-arrow" data-iconfont="ETmodules" data-icon></a>
        </div>
        
        <div class="btnNext m-20 flex items-center justify-center">
          <router-link to="/menuAddView" class="p-4 bg-transparent text-center text-white rounded-full hover:text-btnBlue flex items-center">
            <span>Next</span>
            <span class="ml-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-5 w-5">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </span>
          </router-link>
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

.btnNext {
  border: solid 3px white;
  color: white;
  width: 8em;
  border-radius: 22em;
  margin: auto;
  margin-top: 8vh;
  margin-bottom: 8vh;
  font-size: x-large;
  height: 2em;
  letter-spacing: 5px;
  text-align: center;
}
</style>
