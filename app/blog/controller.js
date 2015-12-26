define(function(){

    var Controller = function(){

        var user = {
            name: "oyanezm",
            signature: "hello yo broda"
        };

        var context = {
            user: user
        };

        View.render(
            "blog",
            context
        );
    }

    return Controller;

});
