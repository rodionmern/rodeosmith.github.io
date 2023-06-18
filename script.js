function makeEaseInOut(timing) {
  return function(timeFraction) {
    if (timeFraction < .5)
      return timing(2 * timeFraction) / 2;
    else
      return (2 - timing(2 * (1 - timeFraction))) / 2;
  }
}


function bounce(timeFraction) {
  for (let a = 0, b = 1; 1; a += b, b /= 2) {
    if (timeFraction >= (7 - 4 * a) / 11) {
      return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
    }
  }
}

let bounceEaseInOut = makeEaseInOut(bounce);

click_to_animation.onclick = function() {
  animate({
    duration: 3000,
    timing: bounceEaseInOut,
    draw: function(progress) {
      brick.style.left = progress * 500 + 'px';
    }
  });
};