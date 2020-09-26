define(["core/route"], function (Route) {

  return new Route({
    url: "artista/([0-9]+)",
    name: "artist",
    controller: "artist",
    title: "Tablaturas",
    callback: function (args) {
      return "artista/" + args[0];
    }
  });

});
