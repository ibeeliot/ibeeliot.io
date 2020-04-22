$(window).scroll(function(e) {
  parallax();
});

function parallax() {
  var scrolled = $(window).scrollTop();
  $('.heading-background').css('top', -(scrolled * 0.15) + 'px');
}

(function() {
  const cursor = document.querySelector('.cursor');

  const followCursor = e => {
    const { clientX: x, clientY: y } = e;
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
  };

  window.addEventListener('mousemove', followCursor);
})();
