# sails-boilerplate

A [Sails](http://sailsjs.org) application boilerplate.

##Updates
Updated to include `sails-hook-autoreload` which is a Sails JS hook to autoreload controllers and models when changed.
Updated to include LiveReload support. [Download the extension](http://livereload.com/extensions/) for your browser.
Updated to support node v5.0.0 and npm v3. You can use `sails lift` (ignore warnings) or alternatively `npm start`.

This boilerplate is setup to use Jade for templating, Sass for styles and includes [Vue.js](http://vuejs.org/) out of the box. I'm working on replacing Jade with Nunjucks, and have it working locally except for reliable reloading without restarting the server. :(

## Usage
Clone this repo, `cd` into the directory, `npm install` then `sails lift`.
Frontend assets will recompile automatically, backend assets will not, so simply restart the server.