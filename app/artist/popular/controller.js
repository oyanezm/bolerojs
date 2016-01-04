define([
  "app/artist/model",
  "app/tab/model"
],function(
  Artist,
  Tab
){

  var Controller = function(){

    var context = {
      recent: Tab.get_recent(3),
      artists: Artist.get_popular()
    };

    View.render("artist.popular",context);
  }

  return Controller;

});
