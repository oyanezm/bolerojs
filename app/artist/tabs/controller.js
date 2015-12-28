define([
  "app/artist/model"
],
function(
  Artist
){

  var Controller = function(){

    var id = 1;

    var context = {
      artist: Artist.get(id)
    }

    View.render("artist.tabs",context);
  }

  return Controller;
})
