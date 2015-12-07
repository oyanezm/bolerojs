define([
    "system/core/route",
    "system/core/controller"
],
function(
    Route,
    Controller
){

    var Ajax = function(){}

    Ajax.bind = function(){

        $("a").on("click",function(e){

            e.preventDefault();

            var url = $(this).attr("href");
            var tag = $(this).attr("route");
            var route = Route.get(tag);
            var controller = new Controller(route);

            controller.run();
        });
    }

    return Ajax;

});
