define(["core/route"], function (Route) {

  return new Route({
    url: "tablatura/buscar/([a-zA-Z0-9 -]+)",
    name: "tab.search",
    controller: "tab.search",
    title: "Tablaturas",
    callback: function (args) {
      return "tablatura/buscar/" + args[0];
    }
  });

});
