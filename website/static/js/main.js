window.addEventListener("scroll", function() {
  var scrolledFromTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
  if(scrolledFromTop > 50) {
    document.getElementById('navigation').classList.add('shrink');
  } else {
    document.getElementById('navigation').classList.remove('shrink');
  }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBmdW5jdGlvbigpIHtcbiAgdmFyIHNjcm9sbGVkRnJvbVRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IHx8IGRvY3VtZW50LmJvZHkucGFyZW50Tm9kZSB8fCBkb2N1bWVudC5ib2R5KS5zY3JvbGxUb3A7XG4gIGlmKHNjcm9sbGVkRnJvbVRvcCA+IDUwKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdmlnYXRpb24nKS5jbGFzc0xpc3QuYWRkKCdzaHJpbmsnKTtcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2aWdhdGlvbicpLmNsYXNzTGlzdC5yZW1vdmUoJ3NocmluaycpO1xuICB9XG59KTtcbiJdfQ==
