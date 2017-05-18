'use strict';

(function(module) {
  var projectController = {};

  projectController.show = function () {
    $('#Home').fadeIn(1000)
    $('#About').hide();
    $('#Projects').fadeIn(1000);

  };

  module.projectController = projectController;
})(window);
