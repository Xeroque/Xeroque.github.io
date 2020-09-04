/* THIS IS THE CODE FOR THE PARALLAX, IT'S BEING CALLED ON LOOP BUT IT SHOULD ONLY BE CALLED WHEN THE SCROLL IS ACTIVE, OPS!
COMPUTERS THESE DAYS HAVE MEMORY FOR THIS RIGHT?*/
window.addEventListener("DOMContentLoaded", scrollLoop, false);

var productphotography1 = document.querySelector('.productphotography2');
var xScrollPosition
var yScrollPosition

function scrollLoop(e){
    xScrollPosition = window.scrollX;
    yScrollPosition = window.scrollY;

    setTranslate(0, yScrollPosition * -0.5, productphotography2);
    requestAnimationFrame(scrollLoop)
}

function setTranslate(xPos, yPos, el ){
    el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0";
}
