'use strict';

(function(module) {
  var homeController = {};

  homeController.show = function () {
    $('#About').hide();
    $('#Projects').hide();
    $('#Home').fadeIn(1000)
  };

  module.homeController = homeController;
})(window);