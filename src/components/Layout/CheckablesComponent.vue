<template>
  <div class="checkables">
    <label>
      <input type="checkbox" v-model="checkable1" @change="handleChange('Checkable 1')" />
      Kommentarer 
    </label>
    <label>
      <input type="checkbox" v-model="checkable2" @change="handleChange('Checkable 2')" />
      Kuvert størrelse
    </label>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const checkable1 = ref(false);
const checkable2 = ref(false);

const handleChange = (checkableName) => {
 
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
  margin-right: 20px; 
}
</style>
