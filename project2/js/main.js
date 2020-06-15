$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
      $('#mainNav').addClass('navbar-shrink');
    } else {
      $('.back-to-top').fadeOut('slow');
      $('#mainNav').removeClass('navbar-shrink');
    }
  });