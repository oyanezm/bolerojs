define([
  "system/core/route",
  "system/core/widget"
],
function(
  Route,
  Widget
){

  var View = function(){};

  /**
   * Render View Usign Mustache
   **/
  View.render = function(
    name,
    context,
    dom
  ){

    var module = name.split('.').join('/');
    var path = "app/" + module + "/view.mst";
    var url = require.toUrl(path);

    $.get(url,function(data){

      // Render View
      var html = Mustache.render(
        data,
        context
      );

      if( typeof(dom) !== "undefined" ){
        dom.html(html);
      }else{
        var container;

        container = $("main");
        container.html(html);
        container.fadeIn();

        Widget.initialize(container);
      }

      Route.replace();

    });

  }

  return View;
});
