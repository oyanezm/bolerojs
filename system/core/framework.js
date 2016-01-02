define([
    "system/core/route",
    "system/core/ajax",
    "system/core/menu",
    "system/core/controller",
    "system/core/widget",
    "system/core/static"
],function(
    Route,
    Ajax,
    Menu,
    Controller,
    Widget,
    Static
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

      Static.load();

      var route = Route.get_current();
      var controller = new Controller(route);

      controller.run();

      Ajax.bind();
      Menu.bind();

      Widget.initialize();

    }

    return Framework;
});
