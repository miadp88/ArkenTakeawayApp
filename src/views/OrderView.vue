<template>
    <div class="header">
      <!-- Left side with search bar and date picker -->
      <div class="left-side">
        <SearchBarComponent />
        <div class="date-checkables">
          <DatePickerComponent />
          <CheckablesComponent />
        </div>
      </div>
  
      <!-- Center with title and subtitle -->
      <div class="center-side">
        <div class="title">Title</div>
        <div class="subtitle">Subtitle</div>
      </div>
  
      <!-- Right side with red box -->
      <div class="right-side">
        <InfoBoxComponent />
      </div>
    </div>
  </template>
  
  <script setup>
  import SearchBarComponent from '@/components/Layout/SearchBarComponent.vue';
  import DatePickerComponent from '@/components/Layout/DatePickerComponent.vue';
  import CheckablesComponent from '@/components/Layout/CheckablesComponent.vue';
  import InfoBoxComponent from '@/components/Layout/InfoBoxComponent.vue';
  </script>
  
  <style scoped>
  /* Add your component-specific styles here */
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
  }
  
  .left-side {
    display: flex;
    flex-direction: column;
  }
  
  .date-checkables {
    display: flex;
    flex-direction: row;
  }
  
  .center-side {
    text-align: center;
  }
  
  .right-side {
    /* Adjust styles as needed for the right side */
  }
  </style>
  