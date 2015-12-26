define([
    "system/core/route",
    "system/core/controller",
    "system/core/overlay"
],
function(
    Route,
    Controller,
    Overlay
){

    var Ajax = function(){}

    Ajax.bind = function(){

        $("a").on("click",function(e){

            e.preventDefault();

            var link = $(this);

            $("main").fadeOut(function(){

                var url = link.attr("href");
                var tag = link.attr("route");

                Overlay.replace();

                // Get Rout & Controller
                var route = Route.get(tag);
                var controller = new Controller(route);

                controller.run();
            });

        });
    }

    return Ajax;

});
