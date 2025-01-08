const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js') // Compiles app.js
   .react()  // Ensure this is included if you're working with React
   .sass('resources/sass/app.scss', 'public/css') // Compiles app.scss if using SASS
   .css('resources/css/app.css', 'public/css') // Compiles app.css if using plain CSS
   .options({
       processCssUrls: false
   })
   .postCss('resources/css/app.css', 'public/css', [
    require('postcss-import'),
    require('tailwindcss'),
]);