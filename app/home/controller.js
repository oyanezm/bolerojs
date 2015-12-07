define(function(){

    var Controller = function(){

        var framework = {
            name: "mvc-js",
            version: "1.0.0"
        };

        var context = {
            framework: framework
        };

        View.render("home",context);
    }

    return Controller;

});
