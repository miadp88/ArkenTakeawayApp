<template>
  <div class="menu-view">
    <header>
      <NavBarOrder />
    </header>

    <main class="main-content">
      <HeroAll />

      <!-- Section for Side Order Cards -->
      <section>
        <h1 class="mt-20 text-5xl font-extrabold tracking-tight text-center leading-none text-white md:text-5xl lg:text-6xl dark:text-white tracking-wider">
          Vælg Side Orders
        </h1>
        <div class="CardWrapper flex flex-wrap mt-10 justify-center min-h-fit px-6">
          <!-- Use Card component for side orders -->
          <Card v-for="sideOrder in getSideOrders()" :key="sideOrder.id" :menu="sideOrder" :imagePath="sideOrder.image" />
        </div>
        <div class="btnNext m-20 flex items-center justify-center">
          <router-link to="/userInfoView" class="p-4 bg-transparent text-center text-white rounded-full hover:text-btnBlue flex items-center">
            <span>Next</span>
            <!-- Add an SVG icon to the right -->
            <span class="ml-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-5 w-5">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </span>
          </router-link>
        </div>
      </section>
    </main>

    <router-view />
  </div>
</template>

<script setup>
import HeroAll from "@/components/Layout/HeroAllComponent.vue";
import Card from "@/components/Layout/CardComponent.vue";
import NavBarOrder from "@/components/Layout/NavBarOrderComponent.vue";
import { ref } from "vue";

const sideOrders = ref([
  {
    id: 1,
    name: "Side Order 1",
    price: 50,
    image: "../../src/assets/images/Menu6.jpg",
  },

  {
    id: 2,
    name: "Side Order 2",
    price: 50,
    image: "../../src/assets/images/Menu5.jpg",
  }, 
  {
    id: 3,
    name: "Side Order 3",
    price: 50,
    image: "../../src/assets/images/Menu1.jpeg",
  },
  {
    id: 4,
    name: "Side Order 4",
    price: 50,
    image: "../../src/assets/images/Menu2.jpeg",
  },
  

  
  // Add more side orders as needed
]);

const getSideOrders = () => {
  return sideOrders.value.map(sideOrder => ({ ...sideOrder }));
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
