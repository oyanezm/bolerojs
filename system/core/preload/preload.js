(function(){

  /**
   * Enviroment Constructor
   **/
  var Env = function(){

    this.version = "0.0.0.0";
    this.host = window.location.host;

    this.setup = false;

    this.state = {
      dev : false,
      test: false,
      live: false
    }

    if( this.host == "www.js.superdt.cl:8080"){
      this.state.live = true;
      this.setup = true;
    }

    if( !this.setup ) this.state.dev = true;

  }

  /**
   * Dev Validator
   **/
  Env.prototype.is_dev = function(){
    return this.state.dev == true;
  }

  /**
   * Live Validator
   **/
  Env.prototype.is_live = function(){
    return this.state.live == true;
  }

  /**
   * Preloader Constructor
   **/
  var Preload = function(){}

  /**
   * Preload Css
   **/
  Preload.css = function(){
    var link;

    link = document.createElement( "link" );
    link.href = "static/css/preload.css";
    link.type = "text/css";
    link.rel = "stylesheet";

    document.getElementsByTagName( "head" )[0].appendChild( link );
  }

  /**
   * Preload requireJs
   **/
  Preload.requireJs= function(){
    var script;

    script = document.createElement( "script" );

    if( Enviroment.is_dev() ){
      script.src = "require.js";
      script.setAttribute("data-main","init");
    }else{
      script.src = "all.js?version=" + Enviroment.version;
    }

    document.getElementsByTagName("head")[0].appendChild( script );
  }

  // Enviroment Setup
  window.Enviroment = new Env();

  // Preload
  Preload.css();
  Preload.requireJs();

})()
