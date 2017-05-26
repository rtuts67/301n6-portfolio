'use strict';

(function(module) {
  var homeController = {};

  homeController.show = function () {
    $('#About').hide();
    $('#Home').fadeIn(1000)
    $('#Projects').hide();
  };

  module.homeController = homeController;
})(window);
