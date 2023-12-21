<template>
    <div class="header">
      <!-- Left side with search bar and date picker -->
      <div class="left-side">
        <SearchBarComponent />
        <div class="date-checkables">
          <DatePickerComponent />
          <div class="DateCheckMargin"></div>
          <CheckablesComponent />
        </div>
      </div>
  
      <!-- Center with title and subtitle -->
      <div class="center-side">
        <h1 class="title">BESTILLINGER</h1>
        <h2 class="subtitle">(ADMIN)</h2>
      </div>
  
      <!-- Right side with red box -->
      <div class="right-side">
        <InfoBoxComponent />
      </div>
    </div>
    <hr>
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
    align-items: flex-start; /* Align items at the start (top) */
    padding: 10px;
    margin-top: 3vh;
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
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center;
    margin-top: -3vh; 
    margin-left: -15vw;
    .title{
        font-size: 5em;
    }
    .subtitle{
        font-size: 3em;
    }
  }
  hr{
        border: 4px solid rgb(228, 228, 228); 
  }

  
  .DateCheckMargin {
    margin-right: 2vw;
  }
  </style>
  