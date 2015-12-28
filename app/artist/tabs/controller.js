define([
  "app/artist/model"
],
function(
  Artist
){

  var Controller = function(args){

    var id = args[0];

    var context = {
      id: id,
      artist: Artist.get(id)
    }

    View.render("artist.tabs",context);
  }

  return Controller;
})
