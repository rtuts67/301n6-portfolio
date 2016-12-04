'use strict';
var handleTheNavMenue = function() {
  $('.navigation').on('click', '.navigation-item', function(e) {
    $('.tab-content').hide();
    $(`#${$(this).data('content')}`).fadeIn(400);
  });
  ('.navigation .navigation-item:first').click();
};

handleTheNavMenue();
