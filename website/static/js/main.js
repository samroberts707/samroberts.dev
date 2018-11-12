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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQod2luZG93KS5vbihcImxvYWRcIiwgZnVuY3Rpb24oKSB7XG4gIC8vIFRoaXMgdHVybnMgb2ZmIHRoZSBsb2FkaW5nIGRpdiBvbmNlIGFsbCByZXNvdXJjZXMgaGF2ZSBsb2FkZWRcbiAgJCgnYm9keScpLmNzcygnb3ZlcmZsb3cnLCAnYXV0bycpO1xuICAkKCcjbG9hZGVyJykuYWRkQ2xhc3MoJ2xvYWRlZCcpO1xuICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAkKCcjbG9hZGVyJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgfSwgNjAwKTtcbn0pO1xuXG4kKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuICBpZiAoJChkb2N1bWVudCkuc2Nyb2xsVG9wKCkgPiA1MCkge1xuICAgICQoJ25hdicpLmFkZENsYXNzKFwic2hyaW5rXCIpO1xuICB9IGVsc2Uge1xuICAgICQoJ25hdicpLnJlbW92ZUNsYXNzKFwic2hyaW5rXCIpO1xuICB9XG59KTtcblxuLyogVG9nZ2xlIGJldHdlZW4gYWRkaW5nIGFuZCByZW1vdmluZyB0aGUgXCJyZXNwb25zaXZlXCIgY2xhc3MgdG8gdG9wbmF2IHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSBpY29uICovXG5mdW5jdGlvbiBteUZ1bmN0aW9uKCkge1xuICBpZigkKFwiI25hdmlnYXRpb25cIikuaGFzQ2xhc3MoXCJyZXNwb25zaXZlXCIpKSB7XG4gICAgJChcIiNuYXZpZ2F0aW9uXCIpLnJlbW92ZUNsYXNzKFwicmVzcG9uc2l2ZVwiKTtcbiAgfSBlbHNlIHtcbiAgICAkKFwiI25hdmlnYXRpb25cIikuYWRkQ2xhc3MoXCJyZXNwb25zaXZlXCIpO1xuICB9XG59Il19
