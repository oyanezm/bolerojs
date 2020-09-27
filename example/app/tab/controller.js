define([
  "app/tab/model"
],
  function (
    Tab
  ) {

    var Controller = function (args) {

      var id = args[0];

      var context = {
        id: id,
        tab: Tab.get(id)
      }

      __View.render("tab", context);
    }

    return Controller;
  })
