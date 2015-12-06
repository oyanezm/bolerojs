define(function(){

    var Ajax = function(){}

    Ajax.bind = function(){
        $("a").on("click",function(e){

            e.preventDefault();

            var url = $(this).attr("href");
            $.get(url,function(data){
                $("main").html(data);
            });
        });
    }

    return Ajax;

});
