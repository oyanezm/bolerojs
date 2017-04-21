define([],function(
){

  /**
   * Constructor
   **/
  var Controller = function(route){
    this.route = route;
  }

  /**
   * Executes controller
   **/
  Controller.prototype.run = function(){

    var controller = this.route.controller;
    var module = controller.split('.').join('/');
    var args = this.route.args;

    var path = "app/" + module + "/controller";
    var url = __Route.url(
      this.route.name,
      this.route.args
    );

    window.history.pushState(
      this.route.name,
      this.route.title,
      requirejs.toUrl(url)
    );

    require([path],function(responseController){
      responseController(args);
    });

  }

  /**
   * Controller run wrapper
   * @param string {routename}
   **/
  Controller.dispatch = function(routename,args){
    var route,c;

    route = __Route.get(routename);
    route.args = args;

    c = new __Controller(route);
    c.run();

  }

  return Controller;
});
