var baseUrl = "http://" + window.location.host;

/**
 * Configure RequireJs
 **/
requirejs.config({

  baseUrl: baseUrl,

  paths: {
    "mustache": "system/lib/mustache",
    "jquery": "//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min"
  },

  shim: {
    'mustache': {
      exports: 'Mustache'
    }
  }

});

/**
 * Initialize RequireJs
 **/
requirejs([
  // CORE
  "system/core/framework",
  "system/core/view",

  // Routes
  "app/artist/popular/route",
  "app/artist/tabs/route",
  "app/blog/route",

  "mustache",
  "jquery"
],
function(

  // Core
  Framework,
  View,

  // Routes
  Popular,
  Artist,
  Blog,

  Mustache
){

  // Globals
  window.Mustache = Mustache;
  window.View = View;

  f = new Framework();

  // Add Routes
  f.routes.push(Popular);
  f.routes.push(Artist);
  f.routes.push(Blog);

  f.run();

});
