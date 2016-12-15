$(function () {
  'use strict';

  $('.portfolio-box-v1').find('.portfolio-box-v1-in a').click(function () {
    const imgTitle = $(this).data('title');
    $('.cbp-l-grid-gallery').find('.cbp-item a[data-title="' + imgTitle + '"]').trigger('click');
  });
});
