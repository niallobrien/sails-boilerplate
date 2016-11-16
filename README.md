# sails-boilerplate

A [Sails](http://sailsjs.org) application boilerplate.

##Updates
Updated to include `sails-hook-autoreload` which is a Sails JS hook to autoreload controllers and models when changed.
Updated to include [sails-grunt-babel](https://gist.github.com/jodyheavener/27a7258b32a9ef80f2fd) so that we can write ES6 for our client-side JS.
Updated to include LiveReload support. [Download the extension](http://livereload.com/extensions/) for your browser.

This boilerplate is setup to use Pug for templating, Sass for styles and includes [Vue.js](http://vuejs.org/) out of the box.

## Usage
Clone this repo, `cd` into the directory, `npm install` or `yarn install` then `sails lift`.
Frontend assets will recompile automatically, but certain backend changes will require that you restart the server.