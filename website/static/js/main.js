$(window).on("load", function() {
  console.log('Window Loaded!');
});

$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav').addClass('shrink');
  } else {
    $('nav').removeClass('shrink');
  }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKHdpbmRvdykub24oXCJsb2FkXCIsIGZ1bmN0aW9uKCkge1xuICBjb25zb2xlLmxvZygnV2luZG93IExvYWRlZCEnKTtcbn0pO1xuXG4kKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuICBpZiAoJChkb2N1bWVudCkuc2Nyb2xsVG9wKCkgPiA1MCkge1xuICAgICQoJ25hdicpLmFkZENsYXNzKCdzaHJpbmsnKTtcbiAgfSBlbHNlIHtcbiAgICAkKCduYXYnKS5yZW1vdmVDbGFzcygnc2hyaW5rJyk7XG4gIH1cbn0pO1xuIl19
