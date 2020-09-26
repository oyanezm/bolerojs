var baseUrl = "http://" + window.location.host;

/**
 * Configure RequireJs
 **/
requirejs.config({

  baseUrl: baseUrl,

  paths: {
    "mustache": "node_modules/mustache/mustache",
    "jquery": "node_modules/jquery/dist/jquery.min"
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
  "core/framework",
  "core/view",
  "core/controller",
  "core/route",

  // Routes
  "example/tab/route",
  "example/tab/search/route",
  "example/artist/route",
  "example/artist/popular/route",

  // Lib
  "mustache",
  "jquery",

  // Controller
  "example/header/controller",
  "example/menu/controller",
  "example/tab/controller",
  "example/tab/search/controller",
  "example/tab/search/form/controller",
  "example/artist/controller",
  "example/artist/popular/controller"
],
  function (

    // Core
    Framework,
    View,
    Controller,
    Route,

    // Routes
    Tab,
    Tab_Search,
    Artist,
    Popular,

    Mustache
  ) {

    // Globals
    window.__Mustache = Mustache;
    window.__View = View;
    window.__Controller = Controller;
    window.__Route = Route;

    var routes = [
      Tab,
      Tab_Search,
      Artist,
      Popular
    ];

    f = new Framework(routes);
    f.run();

  });
