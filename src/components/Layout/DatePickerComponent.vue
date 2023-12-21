<template>
  <div class="date-picker">
    <label>Dato:</label>
    <input type="date" v-model="selectedDate" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const selectedDate = ref('');

// You can add any additional logic related to the date picker

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
