define([
    "system/core/route",
    "system/core/ajax"
],
function(
    Route,
    Ajax
){

    var View = function(){};

    /**
     * Render View Usign Mustache
     **/
    View.render = function(name,context){

        var url = require.toUrl("app/" + name + "/view.mst");

        $.get(url,function(data){
            var html = Mustache.render(data,context);
            $("main").html(html);
            Route.replace();
            Ajax.bind();
        });
    }

    return View;
});
