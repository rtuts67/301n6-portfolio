'use strict';

(function(module) {
  var aboutController = {};

  aboutController.show = function () {
    $('#Home').hide();
    $('#About').fadeIn(1000);
    $('#Projects').hide();

  };

  module.aboutController = aboutController;
})(window);
