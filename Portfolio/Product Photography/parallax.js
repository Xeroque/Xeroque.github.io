/* THIS IS THE CODE FOR THE PARALLAX, IT'S BEING CALLED ON LOOP BUT IT SHOULD ONLY BE CALLED WHEN THE SCROLL IS ACTIVE, OPS!
COMPUTERS THESE DAYS HAVE MEMORY FOR THIS RIGHT?*/
window.addEventListener("DOMContentLoaded", scrollLoop, false);

var productphotography1 = document.querySelector('.productphotography1');
var floatingbread = document.querySelector('.productphotography2');
var floatingberries = document.querySelector('.productphotography3');
var floatingcupcake = document.querySelector('.productphotography4');
var floatingbox = document.querySelector('.productphotography5');
var xScrollPosition
var yScrollPosition

function scrollLoop(e){
    xScrollPosition = window.scrollX;
    yScrollPosition = window.scrollY;

    setTranslate(0, yScrollPosition * -0.2, productphotography1);
    setTranslate(0, yScrollPosition * 0.5, productphotography2);
    setTranslate(0, yaScrollPosition * -0.5, fproductphotography3);
    setTranslate(0, yScrollPosition * -0.5, productphotography4);
    setTranslate(0, yScrollPosition * -0.6  ,productphotography5);
    requestAnimationFrame(scrollLoop)
}

function setTranslate(xPos, yPos, el ){
    el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0";
}
