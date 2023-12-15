<template>
  <section class="hero hero_0 bg-black dark:bg-gray-900 w-full">
    <div class="py-2 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1 class="mb-5 mt-20 pt-20 text-5xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white tracking-wider ">Restaurant</h1>
        <h1 class="mb-5 text-5xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white tracking-wider ">Arken</h1>
        <p class="mb-10 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Child component</p>
        <div class="lex mb-1 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">  
        </div>
    </div>
        

    <div class="bg-welcomebtnbackground py-10 text-center flex flex-col">
        

        <div class="flex flex-col sm:flex-row justify-center w-full h-20">

          <div>
            <RouterLink to="/menuView" class="mx-2 text-white Welcomebtn justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
              sæson
            </RouterLink>
          </div>
          <div>
            <a href="#" class="mx-2 text-white Welcomebtn justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
              Link Side Link Side
            </a> 
          </div>

        </div>


        <div class="flex flex-col sm:flex-row justify-center w-full">
          <div>
            <a href="#" class="mx-2 text-white Welcomebtn justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
              Link Side Link Side
            </a> 
          </div>
          <div>
            <a href="#" class="mx-2 text-white Welcomebtn justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
              Link Side Link Side
            </a> 
          </div>
        </div>   
          
           
    </div>
    <div class="heroSpacer py-8">

    </div>
  </section>
</template>
<style>
  .Welcomebtn{
    border-radius: 25px;
    border-width: 3px;
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

  .heroSpacer{
    height: 20px;
    margin-top: 20px;
  }






</style>