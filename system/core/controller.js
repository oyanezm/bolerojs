define(function(){

    /**
     * Constructor
     **/
    var Controller = function(route){
        this.route = route;
    }

    /**
     * Executes controller
     **/
    Controller.prototype.run = function(){

        var jscontroller = this.route.controller;

        var path = "app/" + jscontroller.split('.').join('/') + "/controller";

        require([path],function(controller){
            controller();
        });

        window.history.pushState(
            "object or string",
            this.route.title,
            require.toUrl(this.route.url)
        );
    }

    return Controller;
});
