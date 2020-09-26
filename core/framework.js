define([
  "core/ajax",
  "core/menu",
  "core/widget",
  "core/static"
], function (
  Ajax,
  Menu,
  Widget,
  Static
) {

  /**
   * Constructor
   **/
  Framework = function (routes) {

    this.routes = routes;

  }

  /**
   * Initialize Framework
   **/
  Framework.prototype.run = function () {


    Static.load();

    var route = __Route.get_current();
    var controller = new __Controller(route);

    controller.run();

    Ajax.bind();
    Menu.bind();

    Widget.initialize();

  }

  return Framework;
});