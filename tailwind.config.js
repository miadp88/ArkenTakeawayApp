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
      welcomebtnbackground: 'rgba(112, 112, 112, 0.65)',
      welcomeCardbackground: 'rgba(112, 112, 112, 0.3)',
      btnBlue: 'rgba(122, 228, 245)',
      btnBlueHover: 'rgba(122, 228, 245, 0.65)',
      NavColor: 'rgba(0, 0, 0, 0.75)',
      Formbackground: 'rgba(112, 112, 112, 0.25)',
      Whitebtn: '255, 255, 255'
    },
  }
}