<template>
  <section class="hero hero_0 bg-black dark:bg-gray-900 w-full">
    <div class="py-2 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1 class="mb-5 mt-20 pt-20 text-5xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white tracking-wider ">Restaurant</h1>
        <h1 class="mb-5 text-5xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white tracking-wider ">Arken</h1>
        <p class="mb-10 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Child component</p>
        <div class="lex mb-1 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">  
        </div>
    </div>
        
  
        <div class="bg-welcomebtnbackground py-10 text-center flex flex-col items-center mx-auto w-full">
            
            <fwb-button-group class="text-center items-center mx-auto mb-8 ">
              <fwb-button outline class="welcomeBtn">Sæson</fwb-button>
              <fwb-button outline class="welcomeBtn">Menu</fwb-button>
            
          </fwb-button-group>

          <fwb-button-group>
            
              <fwb-button outline class="welcomeBtn">Bordbestilling</fwb-button>
              <fwb-button outline class="welcomeBtn">Kontakt</fwb-button>
          </fwb-button-group>

            
            </div>
   
  <div class="heroSpacer py-8">

    </div>
  </section>
</template>
<style>
  .hero{
    background-image: url('/src/assets/images/TopBagrundGradient.png');
    background-repeat: no-repeat;
      background-position: top center;
      background-size:cover;
      h1{
        font-family: "cooper-black-std", serif;
        font-weight: 400;
        font-style: normal;
        font-size: 6em;
      }
      p{
        font-family: Arial, Helvetica, sans-serif;
      }
  }

  main{
    background-color: black;
  }

  .welcomeBtn{
    border: solid 3px white;
    color: white;
    width: 13em;
    border-radius: 22em;
    margin-left: 2vw;
    font-size: x-large;
    height: 2em;
    letter-spacing: 5px;
  }

  .heroSpacer{
    height: 20px;
    margin-top: 20px;
  }

</style>

<script setup>
import { FwbButtonGroup, FwbButton,  } from 'flowbite-vue'
</script>