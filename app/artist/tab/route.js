define(["system/core/route"],function(Route){

  return new Route({
    url: "artista/tablatura/([0-9]+)",
    name: "artist.tab",
    controller: "artist.tab",
    title: "Tablaturas",
    callback : function(args){
      return "artista/tablatura/" + args[0];
    }
  });

});
