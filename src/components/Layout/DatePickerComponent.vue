<template>
    <div class="date-picker">
      <label for="datepicker">Select Date:</label>
      <input
        v-model="selectedDate"
        type="date"
        id="datepicker"
        @change="dateSelected"
      />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const selectedDate = ref('');
  
  const dateSelected = () => {
    // You can implement your logic when a date is selected
    console.log('Selected Date:', selectedDate.value);
  };
  </script>
  
  <style scoped>
  .date-picker {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }
  
  label {
    margin-bottom: 5px;
  }
  </style>
  