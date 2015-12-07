define([
    "system/core/route",
    "system/core/ajax",
    "system/core/controller"
],function(
    Route,
    Ajax,
    Controller
){

    Framework = function(){

        this.routes = [];

    }

    Framework.prototype.run = function(){

        var route = Route.get_current();
        var controller = new Controller(route);

        controller.run();

        Ajax.bind();
    }

    return Framework;
});
