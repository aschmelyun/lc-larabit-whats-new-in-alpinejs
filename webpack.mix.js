const mix = require('laravel-mix');

mix.postCss('resources/css/app.css', 'css', [
    require('tailwindcss')
]);