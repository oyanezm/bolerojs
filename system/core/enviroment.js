define(function(){

  var Enviroment = function(){

    this.host = window.location.host;

    this.setup = false;

    this.state = {
      dev : false,
      test: false,
      live: false
    }

    if( this.host == "http://www.js.superdt.cl:8080"){
      this.state.live = true;
      this.setup = true;
    }

    if( !this.setup ) this.state.dev = true;

  }

  Statement.prototype.is_dev = function(){
    return this.state.dev == true;
  }

  Statement.prototype.is_live = function(){
    return this.state.live == true;
  }

  return Enviroment;
})
