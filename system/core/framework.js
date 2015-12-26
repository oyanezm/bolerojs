define([
    "system/core/route",
    "system/core/ajax",
    "system/core/controller",
    "system/core/overlay"
],function(
    Route,
    Ajax,
    Controller,
    Overlay
){

    Framework = function(){

        this.routes = [];

    }

    Framework.prototype.run = function(){

        var route = Route.get_current();
        var controller = new Controller(route);

        controller.run();

        Ajax.bind();

        Overlay().fadeOut();

    }

    return Framework;
});
