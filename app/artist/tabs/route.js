define(["system/core/route"],function(Route){

  return new Route({
    url: "artista/(d)",
    name: "artist.tabs",
    controller: "artist.tabs",
    title: "Tablaturas",
    callback : function(id){
      return "artista/" + id;
    }
  });

});
