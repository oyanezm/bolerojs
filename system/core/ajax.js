define([
  "system/core/route",
  "system/core/controller",
  "system/core/spinner"
],
function(
  Route,
  Controller,
  Spinner
){

  var Ajax = function(){}

  Ajax.bind = function(){

    var spinner = new Spinner();

    $(document).on("click","a",function(e){

      e.preventDefault();

      var link = $(this);

      $("main").fadeOut(function(){

        var url = link.attr("href");
        var tag = link.attr("route");

        spinner.attach($(this));

        // Get Rout & Controller
        var route = Route.get(tag);
        var controller = new Controller(route);

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
