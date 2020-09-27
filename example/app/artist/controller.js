define([
  "app/artist/model"
],
  function (
    Artist
  ) {

    var Controller = function (args) {

      var id = args[0];

      var context = {
        id: id,
        artist: Artist.get(id),
        videos: Artist.get_videos(3)
      }

      __View.render("artist", context);
    }

    return Controller;
  })
