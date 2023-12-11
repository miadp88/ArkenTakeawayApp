<template>
    <fwb-navbar class="bg-black">
      <template #logo>
        <fwb-navbar-logo alt="Arkens Logo" image-url="/src/assets/images/13694_logo.jpg" link="../../views/WelcomeView.vue"></fwb-navbar-logo>
      </template>
      <template #default="{isShowMenu}">
      </template>
      <template #right-side>
        <fwb-button color="light">
          Log ind
        </fwb-button>
      </template>
    </fwb-navbar>
  </template>
  
  <script setup>
  import {
    FwbButton,
    FwbNavbar,
    FwbNavbarLogo,
  } from 'flowbite-vue'
  </script>

<style>
  .NavBar{
    background-color: black!important;
  }
</style>