module.exports = {
  content: [
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}',
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  plugins: [
      require('flowbite/plugin')
  ],
  theme: {
    colors:{
      footerColor: 'rgba(247, 247, 247, 0.84)',
      welcomebtnbackground: 'rgba(247, 247, 247, 0.15)'
    }
  }
}