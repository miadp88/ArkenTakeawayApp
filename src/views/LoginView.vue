<template>
    <div class="login-container">
      <div class="login-box">
        <h1 class="text-4xl font-extrabold mb-6">Log In</h1>
        <form @submit.prevent="login">
          <div class="mb-4">
            <label for="username" class="block text-sm font-medium text-gray-600">Username</label>
            <input
              v-model="username"
              type="text"
              id="username"
              name="username"
              class="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div class="mb-6">
            <label for="password" class="block text-sm font-medium text-gray-600">Password</label>
            <input
              v-model="password"
              type="password"
              id="password"
              name="password"
              class="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <button type="submit" class="w-full bg-blue-500 text-white p-2 rounded-md">Log In</button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores';
import { useRouter } from 'vue-router';

const username = ref('');
const password = ref('');
const authStore = useAuthStore();
const router = useRouter();

const login = async () => {
  try {
    // Call your authentication logic here
    await authStore.login(username.value, password.value);

    // Redirect to the OrderView after successful login
    router.push({ name: 'orderView' }); // Adjust the name to match your actual route name
  } catch (error) {
    // Handle login error
    console.error('Login failed:', error.message);
  }
};
</script>
  
  <style scoped>
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .login-box {
    max-width: 400px;
    width: 100%;
    padding: 2rem;
    background-color: rgba(112, 112, 112, 0.3);
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  /* Add any other custom styles based on your design */
  </style>
  