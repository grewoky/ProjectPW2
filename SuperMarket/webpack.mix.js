const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
   .react()  // Ensure this is included if you're working with React
   .options({
       processCssUrls: false
   })
   .webpackConfig({
       module: {
           rules: [
               {
                   test: /\.js$/,
                   loader: 'esbuild-loader',
                   options: {
                       loader: 'jsx', // Add this to handle JSX in .js files
                       target: 'es2015'
                   }
               }
           ]
       }
   });
