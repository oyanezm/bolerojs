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
    View.render = function(
        name,
        context
    ){

        var path = "app/" + name + "/view.mst";
        var url = require.toUrl(path);
        var croute = Route.get_current();

        $.get(url,function(data){

            var html = Mustache.render(
                data,
                context
            );

            $("main").html(html);
            $("title").text(croute.title);

            Route.replace();

            Ajax.bind();

            $("main").fadeIn();
        });
    }

    return View;
});
