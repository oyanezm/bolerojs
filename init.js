var baseUrl = "http://" + window.location.host;

/**
 * Configure RequireJs
 **/
requirejs.config({

  baseUrl: baseUrl,

  paths: {
    "mustache": "system/lib/mustache",
    "jquery": "system/lib/jquery-1.11.3.min"
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

  // Lib
  "mustache",
  "jquery",

  // Controller
  "app/header/controller",
  "app/menu/controller",
  "app/artist/controller",
  "app/artist/tab/controller",
  "app/artist/tab/search/controller",
  "app/artist/popular/controller"
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
