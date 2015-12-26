define(function(){

    var Controller = function(widget){

        var categories = [
            { name: "Lo + Buscado"},
            { name: "Nuevas Partituras"},
            { name : "Mejores Partituras" },
            { name : "Afinador" },
            { name : "Favoritas" },
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
