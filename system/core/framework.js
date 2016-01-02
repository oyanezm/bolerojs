define([
    "system/core/route",
    "system/core/ajax",
    "system/core/menu",
    "system/core/controller",
    "system/core/overlay",
    "system/core/widget",
    "system/core/static",
    "system/core/enviroment"
],function(
    Route,
    Ajax,
    Menu,
    Controller,
    Overlay,
    Widget,
    Static,
    Enviroment
){

    /**
     * Constructor
     **/
    Framework = function(routes){

      this.routes = routes;

    }

    /**
     * Initialize Framework
     **/
    Framework.prototype.run = function(){

      window.Enviroment = new Enviroment();

      Static.load();

      var route = Route.get_current();
      var controller = new Controller(route);

      controller.run();

      Ajax.bind();
      Menu.bind();

      Widget.initialize();

      Overlay().fadeOut();

    }

    return Framework;
});
