define([
  "system/lib/less"
],function(){

  var Static = function(){}

  /**
   * Load static files
   **/
  Static.load = function(){

    var css_compiled = "static/css/styles.css?version=" + Enviroment.version;
    var css_mods = [
      "https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
    ];

    var less_mods = [
      "static/less/styles.less"
    ];

    var dev = Enviroment.is_dev();
    if( dev )   Static.less(less_mods);
    else        css_mods.push(css_compiled);

    Static.css(css_mods);

  }

  /**
   * Load less files or compiled
   * TODO: less async load because high weight
   **/
  Static.less = function(modules){

    var link;
    var less = require("system/lib/less");

    modules.forEach(function(module){
      link = document.createElement( "link" );
      link.href = module;
      link.type = "text/css";
      link.rel = "stylesheet/less";
      document.getElementsByTagName( "head" )[0].appendChild( link );
      less.sheets.push(link);
    });

    less.refresh();

  }

  /**
   * Append Css modules to header
   * @param Array {modules}
   **/
  Static.css = function(modules){

    var link;

    modules.forEach(function(module){
      link = document.createElement( "link" );
      link.href = module;
      link.type = "text/css";
      link.rel = "stylesheet";
      document.getElementsByTagName( "head" )[0].appendChild( link );
    });

  }

  return Static;

})
