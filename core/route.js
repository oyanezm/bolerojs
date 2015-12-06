define([],function(){

    /**
     * Constructor
     **/
    var Route = function(url,name){
        this.url = url;
        this.name = name;
    }

    /**
     * Get url based on route name
     **/
    Route.url = function(name){
        var url = "";

        f.routes.forEach(function(route){
            if(route.name == name)
                url = route.url;
        });
        return url;
    }

    /**
     * Collect Routes from Modules
     **/
    Route.collect = function(modules){

        var path = "";
        var routes = [];

        modules.forEach(function(module){

            path = module + "/route";
            require([path],function(r){
                route.push(r);
            })
        });

        return routes;
    }

    /**
     * Replace route for links
     **/
    Route.replace = function(){
        $("a").each(function(){
            var name = $(this).attr("route");
            var url = Route.url(name);
            $(this).attr("href",url);
        });
    }

    return Route;
});
