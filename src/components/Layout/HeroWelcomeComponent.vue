<template>
  <section class="hero hero_0 bg-black dark:bg-gray-900 w-full">
    <div class="hero hero_0 bg-black dark:bg-gray-900 w-full">
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
      <h1 class="head1 mb-10 mt-20 pt-20 text-5xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white tracking-wider ">Restaurant</h1>
      <h1 class="head2 mb-10 text-5xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white tracking-wider ">Arken</h1>
      <p class="mb-10 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Child component</p>
      <div class="py-4 lex mb-1 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">  
      </div>
    </div>
  </div>

    <div class="btnWrapper bg-welcomebtnbackground py-10 text-center flex flex-col items-center mx-auto w-full">
      <fwb-button-group class="text-center items-center mx-auto mb-8 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <fwb-button href="/menuView" outline tag="router-link" class="welcomeBtn bg-transparent hover:text-btnBlueHover hover:bg-black">Sæson</fwb-button>
        <fwb-button href="https://www.restaurant-arken.dk/menukort/menukort.aspx" class="welcomeBtn bg-transparent hover:text-btnBlueHover hover:bg-black">Menuer</fwb-button>
      </fwb-button-group>

      <fwb-button-group class="text-center items-center mx-auto flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <fwb-button href="https://book.easytablebooking.com/book/?id=8a2c4&lang=da" class="welcomeBtn bg-transparent hover:text-btnBlueHover hover:bg-black">Bestil Bord</fwb-button>
        <fwb-button href="https://www.restaurant-arken.dk/kontakt.aspx" class="welcomeBtn bg-transparent hover:text-btnBlueHover hover:bg-black">Kontakt</fwb-button>
      </fwb-button-group>
    </div>

    <div class="heroSpacer py-8"></div>
  </section>
</template>

<style>

  .heroLogo img {
    max-width: 200px;
    margin: 0 auto;
  }

  .heroText {
    max-width: 600px;
    margin: 0 auto;
  }
  

  .fwb-button-hero {
    min-width: 160px;
  }

  .head1, .head2 {
  margin-top: 10vh !important;
  font-size: 5em !important;
}
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
    border: solid 3px white!important;
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


  @media screen and (max-width: 928px) {
    .hero {
      .btnWrapper {
        padding: 1rem;
      }

      .text-center {
        max-width: 100%;
      }

      .fwb-button-hero {
        width: 100%;
        margin-bottom: 1rem;
      }
    }
  }

  /* Responsive styles for smaller screens */
@media screen and (max-width: 968px) {
  .head1 {
    margin-top: 8vh !important;
    font-size: 4em !important;
    margin-bottom: 0;
  }
}

/* Responsive styles for even smaller screens */
@media screen and (max-width: 680px) {
  .head1{
    margin-top: 12vh !important;
    font-size: 3em !important;
  }
}

@media screen and (max-width: 511px) {
  .head1{
    margin-top: 10vh !important;
    font-size: 2em !important;
    margin-bottom: 0;
  }
}
@media screen and (max-width: 968px) {
  .head2 {
    margin-top: 0 !important;
    font-size: 4em !important;
  }
}

/* Responsive styles for even smaller screens */
@media screen and (max-width: 680px) {
  .head2{
    margin-top: 0 !important;
    font-size: 3em !important;
  }
}

@media screen and (max-width: 511px) {
  .head2{
    margin-top: 0 !important;
    font-size: 2em !important;
  }
}

  
</style>

<script setup>
import { FwbButtonGroup, FwbButton } from 'flowbite-vue';

const navigateToLogin = () => {
  // Existing function to navigate to the login page
};

const navigateToSignUp = () => {
  // Existing function to navigate to the sign-up page
};

const navigateToFeatures = () => {
  // Existing function to navigate to the features page
};

const navigateToContact = () => {
  // Existing function to navigate to the contact page
};
</script>
