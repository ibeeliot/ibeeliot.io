const easeInOutCubic = require('./ease-in-out-cubic');

function animatedScrollTo(scrollTo, duration, element, callback) {
  const scrollFrom = element.scrollTop;
  const scrollDiff = scrollTo - scrollFrom;
  let currentTime = 0;
  const increment = 20;

  (function animateScroll() {
    currentTime += increment;
    const newScrollPos = easeInOutCubic(currentTime, scrollFrom, scrollDiff, duration);
    element.scrollTop = newScrollPos;

    if (currentTime > duration) {
      return callback();
    }

    setTimeout(animateScroll, increment);
  })();
}

module.exports = animatedScrollTo;
