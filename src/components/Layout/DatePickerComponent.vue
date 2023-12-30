<template>
  <div class="date-picker">
    <label>Dato:</label>
    <input type="date" v-model="selectedDate" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const selectedDate = ref('');


</script>

<style scoped>
.date-picker {
  display: flex;
  align-items: center;
  margin-top: 8vh;
}

label {
  margin-right: 10px;
}
</style>
