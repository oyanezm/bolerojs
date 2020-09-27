require(["node_modules/bolerojs/bolero"], function(bolero){

  var routes = [
    "app/tab/route",
    "app/tab/search/route",
    "app/artist/route",
    "app/artist/popular/route",
  ];

  var controllers = [
    "app/header/controller",
    "app/menu/controller",
    "app/tab/controller",
    "app/tab/search/controller",
    "app/tab/search/form/controller",
    "app/artist/controller",
    "app/artist/popular/controller"
  ];

  bolero.load(routes, controllers);
});
