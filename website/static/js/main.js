$(window).on("load", function() {
  console.log("Window Loaded!");
});

$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav').addClass("shrink");
  } else {
    $('nav').removeClass("shrink");
  }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKHdpbmRvdykub24oXCJsb2FkXCIsIGZ1bmN0aW9uKCkge1xuICBjb25zb2xlLmxvZyhcIldpbmRvdyBMb2FkZWQhXCIpO1xufSk7XG5cbiQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG4gIGlmICgkKGRvY3VtZW50KS5zY3JvbGxUb3AoKSA+IDUwKSB7XG4gICAgJCgnbmF2JykuYWRkQ2xhc3MoXCJzaHJpbmtcIik7XG4gIH0gZWxzZSB7XG4gICAgJCgnbmF2JykucmVtb3ZlQ2xhc3MoXCJzaHJpbmtcIik7XG4gIH1cbn0pO1xuIl19
