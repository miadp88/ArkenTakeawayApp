<template>
  <div>
    <header>
      <NavBarOrder />
    </header>

    <main>
      <HeroAll />

      <!-- Section for Side Order Cards -->
      <section>
        <h1 class="mt-20 text-5xl font-extrabold tracking-tight text-center leading-none text-white md:text-5xl lg:text-6xl dark:text-white tracking-wider">
          Vælg Side Orders
        </h1>
        <div class="flex items-center justify-center min-h-screen px-6">
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
  // Add more side orders as needed
]);

const getSideOrders = () => {
  return sideOrders.value.map(sideOrder => ({ ...sideOrder }));
};
</script>
