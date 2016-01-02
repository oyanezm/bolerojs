define([
  "system/lib/less"
],function(){

  var Static = function(){}

  /**
   * Load static files
   **/
  Static.load = function(){


    var version = "0.0.0.0.0";

    var css_compiled = "static/css/styles.css?" + version;
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
   **/
  Static.less = function(modules){

    var link,less;

    modules.forEach(function(module){
      link = document.createElement( "link" );
      link.href = module;
      link.type = "text/css";
      link.rel = "stylesheet/less";
      document.getElementsByTagName( "head" )[0].appendChild( link );
    });

    less = require("system/lib/less");
    less.registerStylesheetsImmediately();
    less.watch();

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
