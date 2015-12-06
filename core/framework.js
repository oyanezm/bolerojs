define(["core/route","core/ajax"],function(Route,Ajax){

    Framework = function(){

        this.routes = [];

    }

    Framework.prototype.run = function(){

        Route.replace();

        Ajax.bind();
    }

    return Framework;
});
