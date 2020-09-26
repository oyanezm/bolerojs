define(function(){

    var Spinner = function(){
        this.dom = "<div class='loader small'></div>";
    };

    Spinner.prototype.attach = function(dom){
        dom.html(this.dom);
    }

    return Spinner;
});
