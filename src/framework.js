define([
  "node_modules/bolerojs/src/ajax",
  "node_modules/bolerojs/src/menu",
  "node_modules/bolerojs/src/widget",
  "node_modules/bolerojs/src/static"
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
