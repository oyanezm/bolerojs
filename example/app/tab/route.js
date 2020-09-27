define(["node_modules/bolerojs/src/route"], function (Route) {

  return new Route({
    url: "tablatura/([0-9]+)",
    name: "tab",
    controller: "tab",
    title: "Tablaturas",
    callback: function (args) {
      return "tablatura/" + args[0];
    }
  });

});
