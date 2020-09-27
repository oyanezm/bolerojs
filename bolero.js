(function () {


  if (typeof require != "undefined") return;

  /**
   * Enviroment Constructor
   **/
  var Env = function () {

    this.version = "0.0.0.0";
    this.host = window.location.host;

    this.setup = false;

    this.state = {
      dev: false,
      test: false,
      live: false
    }

    if (this.host == "www.js.superdt.cl:8080") {
      this.state.live = true;
      this.setup = true;
    }

    if (!this.setup) this.state.dev = true;

  }

  /**
   * Dev Validator
   **/
  Env.prototype.is_dev = function () {
    return this.state.dev == true;
  }

  /**
   * Live Validator
   **/
  Env.prototype.is_live = function () {
    return this.state.live == true;
  }

  /**
   * Preloader Constructor
   **/
  var Preload = function () { }

  /**
   * Preload Css
   **/
  Preload.css = function () {
    var link;

    link = document.createElement("link");
    link.href = "static/css/preload.css";
    link.type = "text/css";
    link.rel = "stylesheet";

    document.getElementsByTagName("head")[0].appendChild(link);
  }

  /**
   * Preload requireJs
   **/
  Preload.requireJs = function () {
    var script;

    script = document.createElement("script");

    if (Enviroment.is_dev()) {
      script.src = "node_modules/requirejs/require.js";
      script.setAttribute("data-main", "app");
    } else {
      script.src = "all.js?version=" + Enviroment.version;
    }

    document.getElementsByTagName("head")[0].appendChild(script);
  }

  // Enviroment Setup
  window.Enviroment = new Env();

  // Preload
  Preload.css();
  Preload.requireJs();

})()

var exports = {

  load: function (routes, controllers) {
    var baseUrl = "http://" + window.location.host;

    /**
     * RequireJS Base Dependencies
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

    /*
    * Initialize RequireJs
    **/
    requirejs([
      "node_modules/bolerojs/src/framework",
      "node_modules/bolerojs/src/view",
      "node_modules/bolerojs/src/controller",
      "node_modules/bolerojs/src/route",
    ].concat(routes).concat([
      // Lib
      "mustache",
      "jquery",
    ]).concat(controllers)
      ,
      function (

        // src
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

        debugger;
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

      }
    )
  }
}

if (typeof define != "undefined") define([], function () { return exports });

