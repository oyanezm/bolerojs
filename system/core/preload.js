(function(){

  // Set Base
  var link;
  link = document.createElement('base');
  link.href = "http://" + document.location.host;
  document.getElementsByTagName('head')[0].appendChild(link);

  // Add Preload Css
  link = document.createElement( "link" );
  link.href = "static/css/preload.css";
  link.type = "text/css";
  link.rel = "stylesheet";
  link.media = "screen,print";

  document.getElementsByTagName( "head" )[0].appendChild( link );

})()
