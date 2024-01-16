<template>
  <div class="search-bar">
    <label for="searchInput" class="sr-only">Search:</label>
    <span class="search-text">Søg :</span>
    <input
      id="searchInput"
      type="text"
      v-model="searchValue"
      placeholder="Sriv et søgeord"
      class="search-input"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const searchValue = ref('')
</script>

<style scoped>
.search-bar {
  display: flex;
  align-items: center;
}

.search-text {
  margin-right: 8px;
}

.search-input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  flex: 1;
}
</style>
