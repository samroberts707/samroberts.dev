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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJCh3aW5kb3cpLm9uKFwibG9hZFwiLCBmdW5jdGlvbigpIHtcbiAgLy8gVGhpcyB0dXJucyBvZmYgdGhlIGxvYWRpbmcgZGl2IG9uY2UgYWxsIHJlc291cmNlcyBoYXZlIGxvYWRlZFxuICAkKCdib2R5JykuY3NzKCdvdmVyZmxvdycsICdhdXRvJyk7XG4gICQoJyNsb2FkZXInKS5hZGRDbGFzcygnbG9hZGVkJyk7XG4gIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICQoJyNsb2FkZXInKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICB9LCA2MDApO1xufSk7XG5cbiQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG4gIGlmICgkKGRvY3VtZW50KS5zY3JvbGxUb3AoKSA+IDUwKSB7XG4gICAgJCgnbmF2JykuYWRkQ2xhc3MoXCJzaHJpbmtcIik7XG4gIH0gZWxzZSB7XG4gICAgJCgnbmF2JykucmVtb3ZlQ2xhc3MoXCJzaHJpbmtcIik7XG4gIH1cbn0pO1xuXG4vKiBUb2dnbGUgYmV0d2VlbiBhZGRpbmcgYW5kIHJlbW92aW5nIHRoZSBcInJlc3BvbnNpdmVcIiBjbGFzcyB0byB0b3BuYXYgd2hlbiB0aGUgdXNlciBjbGlja3Mgb24gdGhlIGljb24gKi9cbmZ1bmN0aW9uIG15RnVuY3Rpb24oKSB7XG4gIGlmKCQoXCIjbmF2aWdhdGlvblwiKS5oYXNDbGFzcyhcInJlc3BvbnNpdmVcIikpIHtcbiAgICAkKFwiI25hdmlnYXRpb25cIikucmVtb3ZlQ2xhc3MoXCJyZXNwb25zaXZlXCIpO1xuICB9IGVsc2Uge1xuICAgICQoXCIjbmF2aWdhdGlvblwiKS5hZGRDbGFzcyhcInJlc3BvbnNpdmVcIik7XG4gIH1cbn1cbiJdfQ==
