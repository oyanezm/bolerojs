define(["system/core/route"],function(Route){

  return new Route({
    url: "artista/([0-9]+)",
    name: "artist.tabs",
    controller: "artist.tabs",
    title: "Tablaturas",
    callback : function(args){
      return "artista/" + args[0];
    }
  });

});
