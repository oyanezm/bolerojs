!function(){var e=function(){this.version="0.0.0.0",this.host=window.location.host,this.setup=!1,this.state={dev:!1,test:!1,live:!1},"www.js.superdt.cl:8080"==this.host&&(this.state.live=!0,this.setup=!0),this.setup||(this.state.dev=!0)};e.prototype.is_dev=function(){return 1==this.state.dev},e.prototype.is_live=function(){return 1==this.state.live};var t=function(){};t.baseUrl=function(){var e;e=document.createElement("base"),e.href="http://"+document.location.host,document.getElementsByTagName("head")[0].appendChild(e)},t.css=function(){var e;e=document.createElement("link"),e.href="static/css/preload.css",e.type="text/css",e.rel="stylesheet",document.getElementsByTagName("head")[0].appendChild(e)},t.requireJs=function(){var e;e=document.createElement("script"),Enviroment.is_dev()?(e.src="require.js",e.setAttribute("data-main","init")):e.src="all.js?version="+Enviroment.version,document.getElementsByTagName("head")[0].appendChild(e)},window.Enviroment=new e,t.baseUrl(),t.css(),t.requireJs()}();
