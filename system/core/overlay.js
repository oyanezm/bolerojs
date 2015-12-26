define(function(){

    var Overlay = function(){
        return $(".overlay");
    }

    Overlay.replace = function(){
        $("main").html("<div class='loader'></div>");
    }

    return Overlay;
});
