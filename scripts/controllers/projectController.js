'use strict';

(function(module) {
  var projectController = {};

  projectController.show = function () {
    $('#Home').hide()
    $('#About').hide();
    $('#Projects').fadeIn(1000);

  };

  module.projectController = projectController;
})(window);
