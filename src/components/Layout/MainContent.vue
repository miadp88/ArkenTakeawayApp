<template>
  <section class="hero bg-black dark:bg-gray-900 w-full">
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
       
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white">Child component</h1>
        <p class="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Child component</p>
        <div class="py-4 bg-welcomebtnbackground lex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          
            <a href="#" class="text-white Welcomebtn inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">

                Sæson
                <a href="#" class="text-white Welcomebtn inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Menu
                <a href="#" class="text-white Welcomebtn inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Bord Bestilling
                <a href="#" class="text-white Welcomebtn inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Kontakt
            </a> 
            </a> 
            </a> 
            </a>  
        </div>
       
    </div>
</section>
</template>
<style>
  .Welcomebtn{
    border-radius: 25px;
    border-width: 3px;
  }

  .hero{
    background-image: url('../../assets/images//AdobeStock_616295771_Preview.jpeg');
    background-repeat: no-repeat;
      background-position: top center;
  }

  main{
    background-color: black;
  }
</style>