define([
  "app/artist/model"
],function(
  Artist
){

  var Controller = function(){


    var context = {
        artists: Artist.get_popular()
    };

    View.render("artist.popular",context);
  }

  return Controller;

});
