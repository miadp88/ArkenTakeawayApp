<!-- CartView.vue -->

<template>
  <div class="cart-view">
    <NavBarOrder />
    <main class="main-content-cart m-auto">
      <section class="cart-section">
        <h1 class="text-5xl font-extrabold text-center mb-8 text-white">
          Indkøbskurv
        </h1>
        <div v-if="cartItems.length === 0" class="text-white text-center">
          Du har intet i indkøbskurven
        </div>
        <div v-else>
          <div v-for="item in cartItems" :key="item.id" class="cart-item-card text-white mb-4">
            <div class="flex items-center relative">
              <div class="w-20 h-20 bg-cover bg-no-repeat rounded-lg" :style="{ backgroundImage: 'url(' + item.image + ')' }"></div>
              <div class="flex flex-col ml-4">
                <div class="text-lg font-bold">{{ item.name }}</div>
                <div>{{ item.price }} DDK</div>
                <div class="flex items-center mt-2">
                  <button @click="decrement(item)" class="cart-counter-btn">-</button>
                  <div class="mx-2">{{ item.quantity }}</div>
                  <button @click="increment(item)" class="cart-counter-btn">+</button>
                </div>
              </div>
              <button @click="confirmRemoveItem(item)" class="delete-btn">
                <span>&#128465;</span>
              </button>
            </div>
          </div>

          <div class="text-white text-center mt-4">
            Betales ved afhentning i restaurenten Total: {{ totalAmount }} DDK
          </div>

          <div class="mt-8 flex hover">
            <button @click="checkout" class="btnCheckout">
              Bestil
            </button>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import NavBarOrder from "@/components/Layout/NavBarOrderComponent.vue";
import { useCartStore } from "@/stores/index";
import { ref, computed } from "vue";

const cartStore = useCartStore();
const cartItems = computed(() => cartStore.selectedMenus);
const totalAmount = computed(() => {
  return cartItems.value.reduce((total, item) => total + item.price * item.quantity, 0);
});

const checkout = () => {
  // Perform checkout logic, e.g., navigate to a checkout page
  // You can also trigger a success notification here if needed
};

const increment = (item) => {
  cartStore.incrementQuantity(item.id);
};

const decrement = (item) => {
  cartStore.decrementQuantity(item.id);
};

const confirmRemoveItem = (item) => {
  const isConfirmed = window.confirm("Er du sikker på at du vil slette alle bestillingerne af denne menu? brug plus og minus knapperne hvis du vil tilføje eller fjerne antal bestillinger af denne menu?");

  if (isConfirmed) {
    cartStore.removeItem(item.id);
  }
};
</script>

<style scoped>
.cart-item-card {
  position: relative;
  background-color: rgba(112, 112, 112, 0.3);
  padding: 1rem;
  border-radius: 8px;
  max-width: 50vw;
  margin: 0 auto;
}

.cart-counter-btn {
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem;
  cursor: pointer;
}

.delete-btn {
  position: absolute;
  top: 0;
  right: 0;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem;
  cursor: pointer;
}

.cart-view {
  position: relative;
  height: 100vh;
}

.main-content-cart {
  padding-top: 64px;
  min-height: 100vh;
}

.btnCheckout {
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
