<template>
  <div v-if="show" class="notification">
    <svg
      class="checkmark-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#4CAF50"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <p>{{ message }}</p>
    <button @click="closeNotification">Close</button>
  </div>
</template>

<script>
import { ref, watch } from 'vue'

export default {
  props: {
    message: String
  },
  setup(props) {
    const show = ref(true)

    const closeNotification = () => {
      show.value = false
    }

    watch(props.message, (newValue, oldValue) => {
      if (newValue !== oldValue) {
        show.value = true
        setTimeout(() => {
          show.value = false
        }, 3000)
      }
    })

    return {
      show,
      closeNotification
    }
  }
}
</script>

<style scoped>
.notification {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(122, 228, 245, 0.98);
  padding: 30px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.checkmark-icon {
  width: 24px;
  height: 24px;
  color: #4caf50;
}

.notification p {
  margin: 0 10px;
}
</style>
