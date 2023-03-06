
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