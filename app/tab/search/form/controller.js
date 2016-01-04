define(function(){

  var Controller = function(widget){

    var context = {};

    $("search").on("submit","form",function(e){
      var keyword,args;

      e.preventDefault();

      keyword = $(this).children("[name=keyword]").val();
      args = [ keyword.replace(" ","-") ];

      __Controller.dispatch("tab.search",args);

    });

    View.render(
      widget.module,
      context,
      widget.dom
    );
  }

  return Controller;
})
