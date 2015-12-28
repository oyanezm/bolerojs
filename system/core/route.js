define([],function(){

  /**
   * Constructor
   *
   * @param {string} url
   * @param {string} name
   * @param {string} controller
   **/
  var Route = function(
    data
  ){
    this.url = data.url;
    this.name = data.name;
    this.controller = data.controller;
    this.title = data.title;
    this.callback = data.callback;
  }

  /**
   * Get url based on route name
   * @param {string} name
   **/
  Route.url = function(name,args){
    var url = "";

    f.routes.forEach(function(route){
      if(route.name == name){
        url = route.url;
        if( typeof(route.callback) == "function")
          url = route.callback(args);
      }
    });
    return url;
  }

  /**
   * Get route based on route name
   * @param {string} name
   **/
  Route.get = function(name){

    var routematch;

    f.routes.forEach(function(route){
      if(route.name == name)
        routematch = route;
    });

    return routematch;
  }


  /**
   * Get Current Route
   **/
  Route.get_current = function(){

    var routematch;
    var path = window.location.pathname;
    var name = path.replace(/^\/|\/$/g, '');

    f.routes.forEach(function(route){
      if(route.url == name)
        routematch = route;
    });

    return routematch;
  }

  /**
   * Collect Routes from Modules
   * @param {array} modules
   **/
  Route.collect = function(modules){

    var path = "";
    var routes = [];

    modules.forEach(function(module){

      path = module + "/route";
      require([path],function(r){
        route.push(r);
      })
    });

    return routes;
  }

  /**
   * Replace route for links
   **/
  Route.replace = function(){
    $("a[route]").each(function(){

      var name = $(this).attr("route");
      var args = $(this).attr("args");
      var url = Route.url(name,args);

      $(this).attr("href",url);
    });
  }

  return Route;
});
