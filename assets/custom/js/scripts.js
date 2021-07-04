
(function ($) {
  'use strict';

  window.onpageshow = function (event) { if (event.persisted) { window.location.reload() } };

  $(window).on("load", function () {

    $('.section-menu span').click(function () {
      if ($('header').hasClass('active')) {
        $('header').removeClass('active');
        $('.footer .soc').fadeIn();
        $('body').addClass('loaded');
        if ($('.video-bg').length) {
          $('body').addClass('background-enabled');
        }
      }
    });

    $(window).on('scroll', function () {

      /* add/remove header fixed class */
      if (($(this).scrollTop() >= 100) && ($('.section').length > 1)) {
        $('.header').addClass('fixed');
        $('.mouse-btn').fadeOut();
      }
      if (($(this).scrollTop() <= 100) && ($('.section').length > 1)) {
        $('.header').removeClass('fixed');
        $('.mouse-btn').fadeIn();
      }

    });

    $('header').on('click', '.menu-btn', function () {
      if ($('header').hasClass('active')) {
        $('header').removeClass('active');
        $('.footer .soc').fadeIn();
        $('body').addClass('loaded');
        if ($('.video-bg').length) {
          $('body').addClass('background-enabled');
        }
      } else {
        $('header').addClass('active');
        $('.footer .soc').hide();
        $('body').removeClass('loaded');
        $('body').removeClass('background-enabled');
      }

      return false;
    });

  });

})(jQuery);
