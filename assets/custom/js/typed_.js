(function ($) {
  window.onpageshow = function (event) { if (event.persisted) { window.location.reload() } };

  $(window).on("load", function () {
    if (($('.typed-subtitle').length) && ($('.h-subtitle p').length > 1)) {
      $('.typed-subtitle').each(function () {
        $(this).typed({
          stringsElement: $(this).prev('.typing-subtitle'),
          loop: true
        });
      });
    }
  })

})( jQuery );
