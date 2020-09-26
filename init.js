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
