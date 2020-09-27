define([
  "node_modules/bolerojs/src/device",
], function (
  Device
) {

  var Menu = function () {
    return $("menu");
  }

  /**
   * Menu Bindings
   **/
  Menu.bind = function () {

    $(document).on("click", ".menu-trigger", function (e) {

      e.preventDefault();

      Menu().slideToggle();

    })
  }

  /**
   * Preventive hide
   **/
  Menu.hide = function () {

    var menu = Menu();

    if (!Device.is_mobile()) return;

    if (!menu.is(":visible")) return;

    Menu().slideUp();

  }

  return Menu;

})
