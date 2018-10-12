$(window).on("load", function() {
  // This is for when I implement a loading screen.
  $('body').css('overflow', 'auto');
  $('#loader').addClass('loaded');
});

$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav').addClass("shrink");
  } else {
    $('nav').removeClass("shrink");
  }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJCh3aW5kb3cpLm9uKFwibG9hZFwiLCBmdW5jdGlvbigpIHtcbiAgLy8gVGhpcyBpcyBmb3Igd2hlbiBJIGltcGxlbWVudCBhIGxvYWRpbmcgc2NyZWVuLlxuICAkKCdib2R5JykuY3NzKCdvdmVyZmxvdycsICdhdXRvJyk7XG4gICQoJyNsb2FkZXInKS5hZGRDbGFzcygnbG9hZGVkJyk7XG59KTtcblxuJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcbiAgaWYgKCQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpID4gNTApIHtcbiAgICAkKCduYXYnKS5hZGRDbGFzcyhcInNocmlua1wiKTtcbiAgfSBlbHNlIHtcbiAgICAkKCduYXYnKS5yZW1vdmVDbGFzcyhcInNocmlua1wiKTtcbiAgfVxufSk7XG4iXX0=
