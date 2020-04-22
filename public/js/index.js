$(window).scroll(function(e) {
  parallax();
});

function parallax() {
  var scrolled = $(window).scrollTop();
  $('.heading-background').css('top', -(scrolled * 0.15) + 'px');
}
