
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

window.addEventListener("scroll", function (event) {
    var scrollPosition = this.scrollY;
    var elementUp = document.getElementsByClassName("animation");
    var positionElementStart = 700;
    var positionElementEnd = 1600;
    
    if(scrollPosition > positionElementStart && scrollPosition < positionElementEnd) {
        elementUp[0].classList.add("animation-up");
        elementUp[1].classList.add("animation-down");
        elementUp[2].classList.add("animation-up");
    }
    else {
        elementUp[0].classList.remove("animation-up");
        elementUp[1].classList.remove("animation-down");
        elementUp[2].classList.remove("animation-up");
    }
});

window.addEventListener("scroll", function (event) {
    var scrollPosition = this.scrollY;
    var elementUp = document.getElementsByClassName("about-animation");
    var positionElementStart = 1600;
    var positionElementEnd = 2100;
    
    if(scrollPosition > positionElementStart && scrollPosition < positionElementEnd) {
        elementUp[0].classList.add("animation-right");
        elementUp[1].classList.add("animation-left");
    }
    else {
        elementUp[0].classList.remove("animation-right");
        elementUp[1].classList.remove("animation-left");
    }
});