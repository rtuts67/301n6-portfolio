'use strict';

(function(module) {
  var aboutController = {};

  aboutController.show = function () {
    $('#Home').fadeIn(1000)
    $('#About').fadeIn(1000);
    $('#Projects').hide();

  };

  module.aboutController = aboutController;
})(window);
