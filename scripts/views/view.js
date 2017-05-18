'use strict';

(function(module) {
  var projectView = {};
  projectView.handleTheNavMenue = function() {
    $('#visible').show();
    $('.navigation').on('click', '.navigation-item', function(e) {
      $('.tab-content').hide();
      //$(`#${$(this).data('content')}`).fadeIn(400);
    });
    $('.navigation .navigation-item:first').click();
  };


  projectView.showProjects = function(data) {
    MyProject.allProjects.forEach(function(proj) {
      $('#Projects').append(proj.toHtml())
    });
  }

  MyProject.getAll(projectView.showProjects)

  module.projectView = projectView;
})(window);
