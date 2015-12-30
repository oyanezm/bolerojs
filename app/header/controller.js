
define(function(){

  var Controller = function(widget){

    var context = {
    };

    View.render(
      widget.module,
      context,
      widget.dom
    );
  }

  return Controller;

});
