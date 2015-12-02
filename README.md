# sails-boilerplate

A [Sails](http://sailsjs.org) application boilerplate.

*Updates*
Updated to include LiveReload support. [Download the extension](http://livereload.com/extensions/) for your browser.
Updated to support node v5.0.0 and npm v3. You can use `sails lift` (ignore warnings) or alternatively `npm start`.


This boilerplate is setup to use Jade for templating, Sass for styles and includes [Vue.js](http://vuejs.org/) out of the box.

__Note:__ Sails doesn't seem to play nicely with `npm 3` just yet, so I recommend using `node 4.2.2` with `npm 2.14.7`.

## Usage
Clone this repo, `cd` into the directory, `npm install` then `sails lift`.
Frontend assets will recompile automatically, backend assets will not, so simply restart the server.