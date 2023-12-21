<template>
  <div class="checkables">
    <label>
      <input type="checkbox" v-model="checkable1" @change="handleChange('Checkable 1')" />
      Checkable 1
    </label>
    <label>
      <input type="checkbox" v-model="checkable2" @change="handleChange('Checkable 2')" />
      Checkable 2
    </label>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const checkable1 = ref(false);
const checkable2 = ref(false);

const handleChange = (checkableName) => {
  // You can implement your logic when a checkable is changed
  console.log(`${checkableName} changed to ${checkableName ? 'checked' : 'unchecked'}`);
};
</script>

<style scoped>
.checkables {
  display: flex;
  margin-top: 8vh;
  padding-top: 1vh;
}

label {
  margin-right: 20px; /* Adjust the margin based on your design */
}
</style>
