
define(function(){

  var Controller = function(widget){

    var context = {
    };

    __View.render(
      widget.module,
      context,
      widget.dom
    );
  }

  return Controller;

});
