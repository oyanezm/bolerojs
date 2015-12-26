define([
    "system/core/route",
    "system/core/ajax"
],
function(
    Route,
    Ajax
){

    function preload(images,callback){
        images.each(function(){
            $('<img/>')[0].src = $(this).attr("src");
        }).promise().done(function(){
            callback();
        });
    }


    var View = function(){};

    /**
     * Render View Usign Mustache
     **/
    View.render = function(
        name,
        context,
        dom
    ){

        var path = "app/" + name + "/view.mst";
        var url = require.toUrl(path);

        $.get(url,function(data){

            var html = Mustache.render(
                data,
                context
            );

            if( typeof(dom) !== "undefined" ){
                dom.html(html);
            }else{

                $("main").html(html);
                preload($("main img"),function(){;
                    Route.replace();
                    Ajax.bind();
                    $("main").fadeIn();
                });

            }

        });
    }

    return View;
});
