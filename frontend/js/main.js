window.addEventListener("scroll", function() {
  var scrolledFromTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
  if(scrolledFromTop > 50) {
    document.getElementById('navigation').classList.add('shrink');
  } else {
    document.getElementById('navigation').classList.remove('shrink');
  }
});
