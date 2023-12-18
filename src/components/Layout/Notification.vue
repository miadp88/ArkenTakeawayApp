<!-- src/components/Notification.vue -->
<template>
    <div v-if="show" class="notification">
      <p>{{ message }}</p>
      <button @click="closeNotification">Close</button>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    props: {
      message: String,
    },
    setup(props) {
      const show = ref(true);
  
      const closeNotification = () => {
        show.value = false;
      };
  
      return {
        show,
        closeNotification,
      };
    },
  };
  </script>
  
  <style scoped>
  .notification {
    position: fixed;
    top: 16px;
    right: 16px;
    background-color: #4caf50;
    color: white;
    padding: 16px;
    border-radius: 4px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 300px;
  }
  </style>
  