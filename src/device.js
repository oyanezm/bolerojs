define(function(){

  var Device = function(){}

  /**
   * Check if current device is Mobile
   **/
  Device.is_mobile = function(){
    return $("device mobile").is(":visible");
  }

  return Device;
})
