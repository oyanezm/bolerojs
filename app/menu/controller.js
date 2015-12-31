define(function(){

  var Controller = function(widget){

    var categories = [
      {
        name: "Lo + Buscado",
        route: "artist.popular"
      },
      { name: "Lo + Reciente"},
      { name : "Lo + Puntuado" },
      { name : "Mis Tabs" },
      { name : "Subir Tab" },
      { name : "Salir" }
    ];

    var context = {
      categories: categories
    };

    View.render(
      widget.module,
      context,
      widget.dom
    );
  }

  return Controller;

});
