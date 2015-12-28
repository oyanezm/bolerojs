define([
  "system/core/route"
],
function(
  Route
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
        $("main").html(html);
        $("main").fadeIn();
      }

      Route.replace();

    });

  }

  return View;
});
