define(function(){

    /**
     * Constructor
     * @param string {module}
     * @param jQuery {dom}
     **/
    var Widget = function(
        module,
        dom
    ){
        this.module = module;
        this.dom = dom;
    };

    /**
     * Initialize Widgets
     **/
    Widget.initialize = function(){

        var widgets = $("[widget]");

        widgets.each(function(){

            var dom = $(this);
            var module = dom.attr("widget");
            var widget = new Widget(module,dom);

            widget.run();

        });

    }

    /**
     * Run widget
     **/
    Widget.prototype.run = function(){

        var path = "app/" + this.module.split('.').join('/') + "/controller";
        var widget = this;

        require([path],function(controller){
            controller(widget);
        });
    }

    return Widget;

});
