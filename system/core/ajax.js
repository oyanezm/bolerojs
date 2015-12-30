define([
  "system/core/route",
  "system/core/menu",
  "system/core/controller",
  "system/core/spinner"
],
function(
  Route,
  Menu,
  Controller,
  Spinner
){

  var Ajax = function(){}

  Ajax.bind = function(){

    var spinner = new Spinner();

    $(document).on("click","a[route]",function(e){

      e.preventDefault();

      Menu.hide();

      var link = $(this);

      $("main").fadeOut(function(){

        var args = link.attr("args");
        var url = link.attr("href");
        var tag = link.attr("route");

        spinner.attach($(this));

        // Get Route & Controller
        var route, controller;

        route = Route.get(tag);
        route.args = eval(args);
        controller = new Controller(route);

        controller.run();

        window.history.pushState(
          route.name,
          route.title,
          requirejs.toUrl(url)
        );
      });

    });
  }

  return Ajax;

});
