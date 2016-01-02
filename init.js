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
  "app/artist/route",
  "app/artist/tab/route",
  "app/artist/popular/route",
  "app/blog/route",

  "mustache",
  "jquery"
],
function(

  // Core
  Framework,
  View,

  // Routes
  Artist,
  Tab,
  Popular,
  Blog,

  Mustache
){

  // Globals
  window.Mustache = Mustache;
  window.View = View;

  var routes = [
    Tab,
    Artist,
    Popular,
    Blog
  ];

  f = new Framework(routes);
  f.run();

});
