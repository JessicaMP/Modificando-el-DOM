var animatedElement = document.getElementById("animate");
var animationId = -1;
var position = 0;

function animate() {
    if (position === 350) {
        clearInterval(id);
    } else {
        position++;
        animatedElement.style.top = position + 'px';
        animatedElement.style.left = position + 'px';
    }
}

function startAnimation() {
  id = setInterval(animate, 5);
}
