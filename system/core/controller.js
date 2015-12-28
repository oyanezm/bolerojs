define(function(){

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

    require([path],function(controller){
      controller(args);
    });

  }

  return Controller;
});
