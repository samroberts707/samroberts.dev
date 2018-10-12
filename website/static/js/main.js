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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJCh3aW5kb3cpLm9uKFwibG9hZFwiLCBmdW5jdGlvbigpIHtcbiAgLy8gVGhpcyBpcyBmb3Igd2hlbiBJIGltcGxlbWVudCBhIGxvYWRpbmcgc2NyZWVuLlxuICAkKCdib2R5JykuY3NzKCdvdmVyZmxvdycsICdhdXRvJyk7XG4gICQoJyNsb2FkZXInKS5hZGRDbGFzcygnbG9hZGVkJyk7XG4gIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICQoJyNsb2FkZXInKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICB9LCA2MDApO1xufSk7XG5cbiQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG4gIGlmICgkKGRvY3VtZW50KS5zY3JvbGxUb3AoKSA+IDUwKSB7XG4gICAgJCgnbmF2JykuYWRkQ2xhc3MoXCJzaHJpbmtcIik7XG4gIH0gZWxzZSB7XG4gICAgJCgnbmF2JykucmVtb3ZlQ2xhc3MoXCJzaHJpbmtcIik7XG4gIH1cbn0pO1xuIl19
