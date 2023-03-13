
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

/*

addEventListener("resize", (event) => {});

var slider = document.getElementById("myRange");

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {

  var elements = document.getElementsByClassName("top-nav");
    console.log(elements)
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.paddingLeft = this.value + "px";
        elements[i].style.paddingRight = this.value + "px";
    }


}

onresize = (event) => {
    let width = window.innerWidth;
    console.log (width)
    var elements = document.getElementsByClassName("top-nav");
    console.log(elements)
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.paddingLeft = width/3 + "px";
        elements[i].style.paddingRight = width/3+ "px";
    }

   
};

*/