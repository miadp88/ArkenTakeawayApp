<template>
  <section class="hero bg-black dark:bg-gray-900 w-full">
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
       
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white tracking-wider">Restaurant Arken</h1>
        <p class="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Child component</p>
        <div class="py-4 lex mb-1 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">  
        </div>
        
    </div>
    <div class="bg-welcomebtnbackground py-5 text-center flex flex-col">
        

        <div class="flex flex-row justify-center my-12 w-full">

          <div>
            <a a href="#" class="mx-2 text-white Welcomebtn justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Link  Side Link  Side</a>
          </div>
          <div>
            <a href="#" class="mx-2 text-white Welcomebtn  justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Link  Side Link  Side</a> 
          </div>

        </div>


        <div class="flex flex-row justify-center w-full">
          <div>
            <a href="#" class="mx-2 text-white Welcomebtn  justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
              Link  Side Link  Side</a> 
          </div>
          <div>
            <a href="#" class="mx-2 text-white Welcomebtn  justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
              Link  Side Link  Side</a> 
          </div>
        </div>   
          
           
    </div>
    <div class="heroSpacer py-8">
      <div class="py-20 inline-flex items-center justify-center w-full">
          <hr class="bg-welcomebtnbackground w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
          <span class="absolute px-3 font-medium -translate-x-1/2 bg-black left-1/2 text-black">-------------------------------------------------------------------</span>
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
    background-image: url('/src/assets/images/TopBaground.jpeg');
    background-repeat: no-repeat;
      background-position: top center;
      background-size: cover;
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