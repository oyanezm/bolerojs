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
  "app/tab/route",
  "app/tab/search/route",
  "app/artist/route",
  "app/artist/popular/route",

  // Lib
  "mustache",
  "jquery",

  // Controller
  "app/header/controller",
  "app/menu/controller",
  "app/tab/controller",
  "app/tab/search/controller",
  "app/tab/search/form/controller",
  "app/artist/controller",
  "app/artist/popular/controller"
],
function(

  // Core
  Framework,
  View,

  // Routes
  Tab,
  Tab_Search,
  Artist,
  Popular,

  Mustache
){

  // Globals
  window.Mustache = Mustache;
  window.View = View;

  var routes = [
    Tab,
    Tab_Search,
    Artist,
    Popular
  ];

  f = new Framework(routes);
  f.run();

});
