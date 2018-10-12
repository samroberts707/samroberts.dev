$(window).on("load", function() {
  // This is for when I implement a loading screen.
  $('body').css('overflow', 'auto');
  $('#loader').addClass('loaded');
  setTimeout(function () {
    $('#loader').css('display', 'none');
  }, 600);
});

$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav').addClass("shrink");
  } else {
    $('nav').removeClass("shrink");
  }
});
