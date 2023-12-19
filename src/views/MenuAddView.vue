<template>
  <div class="menu-view">
    <header>
      <NavBarOrder />
    </header>

    <main class="main-content">
      <HeroAll />

      <!-- Section for Side Order Cards -->
      <section>
        <h1 class="head1 mt-20 text-5xl font-extrabold tracking-tight text-center leading-none text-white md:text-5xl lg:text-6xl dark:text-white tracking-wider">
          Vælg Side Orders
        </h1>
        <div :class="'head2 flex items-center justify-center min-h-screen px-6'">
          <!-- Use Card component for side orders -->
          <Card v-for="sideOrder in getSideOrders()" :key="sideOrder.id" :menu="sideOrder" :imagePath="sideOrder.image" />
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
    name: "Side Order 1",
    price: 50,
    image: "../../src/assets/images/Menu5.jpg",
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