<template>
    <div class="search-bar">
      <input v-model="searchTerm" type="text" placeholder="Search..." />
      <button @click="search"></button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const searchTerm = ref('');
  
  const search = () => {
    // You can implement your search logic here
    console.log('Searching for:', searchTerm.value);
  };
  </script>
  
  <style scoped>
  .search-bar {
    display: flex;
    align-items: center;
  }
  
  input {
    padding: 5px;
    margin-right: 5px;
  }
  
  button {
    padding: 5px 10px;
  }
  </style>
  