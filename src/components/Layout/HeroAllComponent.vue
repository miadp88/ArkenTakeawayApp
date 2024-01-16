<template>
  <div class="hero hero_0 bg-black dark:bg-gray-900 w-full">
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
      <h1
        class="head1 mb-10 mt-20 pt-20 text-5xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white tracking-wider"
      >
        Restaurant
      </h1>
      <h1
        class="head2 mb-10 text-5xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white tracking-wider"
      >
        Arken
      </h1>
      <p
        class="mb-10 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
      >
        Child component
      </p>
      <div
        class="py-4 lex mb-1 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"
      ></div>
    </div>
  </div>
</template>

<style>
.head1,
.head2 {
  margin-top: 10vh !important;
  font-size: 5em !important;
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
  .head1 {
    margin-top: 12vh !important;
    font-size: 3em !important;
  }
}

@media screen and (max-width: 511px) {
  .head1 {
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
  .head2 {
    margin-top: 0 !important;
    font-size: 3em !important;
  }
}

@media screen and (max-width: 511px) {
  .head2 {
    margin-top: 0 !important;
    font-size: 2em !important;
  }
}
</style>
