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

function expandNav(x) {
  x.classList.toggle("expand");
  $('#navigation').toggleClass("open");
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQod2luZG93KS5vbihcImxvYWRcIiwgZnVuY3Rpb24oKSB7XG4gIC8vIFRoaXMgaXMgZm9yIHdoZW4gSSBpbXBsZW1lbnQgYSBsb2FkaW5nIHNjcmVlbi5cbiAgJCgnYm9keScpLmNzcygnb3ZlcmZsb3cnLCAnYXV0bycpO1xuICAkKCcjbG9hZGVyJykuYWRkQ2xhc3MoJ2xvYWRlZCcpO1xuICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAkKCcjbG9hZGVyJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgfSwgNjAwKTtcbn0pO1xuXG4kKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuICBpZiAoJChkb2N1bWVudCkuc2Nyb2xsVG9wKCkgPiA1MCkge1xuICAgICQoJ25hdicpLmFkZENsYXNzKFwic2hyaW5rXCIpO1xuICB9IGVsc2Uge1xuICAgICQoJ25hdicpLnJlbW92ZUNsYXNzKFwic2hyaW5rXCIpO1xuICB9XG59KTtcblxuZnVuY3Rpb24gZXhwYW5kTmF2KHgpIHtcbiAgeC5jbGFzc0xpc3QudG9nZ2xlKFwiZXhwYW5kXCIpO1xuICAkKCcjbmF2aWdhdGlvbicpLnRvZ2dsZUNsYXNzKFwib3BlblwiKTtcbn1cbiJdfQ==
