$(window).on("load", function() {
  // This turns off the loading div once all resources have loaded
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

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  if($("#navigation").hasClass("responsive")) {
    $("#navigation").removeClass("responsive");
  } else {
    $("#navigation").addClass("responsive");
  }
}
