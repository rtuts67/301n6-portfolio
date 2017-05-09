'use strict';
// var handleTheNavMenue = function() {
//   $('#visible').show();
//   $('.navigation').on('click', '.navigation-item', function(e) {
//     $('.tab-content').hide();
//     $(`#${$(this).data('content')}`).fadeIn(400);
//   });
//   $('.navigation .navigation-item:first').click();
// };
//handleTheNavMenue();
function(module) {
  var projectView = {};
  MyProject.showProjects = function (data) {
    MyProject.allProjects.forEach(function(proj) {
      $('#Projects').append(proj.toHtml())
    });
  }

  MyProject.getAll()

  module.projectView = projectView;
})(window);
