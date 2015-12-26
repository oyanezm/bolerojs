define([
    "system/core/route",
    "system/core/ajax",
    "system/core/controller",
    "system/core/overlay",
    "system/core/widget"
],function(
    Route,
    Ajax,
    Controller,
    Overlay,
    Widget
){

    /**
     * Constructor
     **/
    Framework = function(){

        this.routes = [];

    }

    /**
     * Initialize Framework
     **/
    Framework.prototype.run = function(){

        var route = Route.get_current();
        var controller = new Controller(route);

        controller.run();

        Ajax.bind();

        Widget.initialize();

        Overlay().fadeOut();

    }

    return Framework;
});
