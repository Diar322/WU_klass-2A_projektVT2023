//  Initialize Swiper

let swiper = new Swiper(".my_swiper", {
    pagination: {
      el: ".swiper-pagination",
    },
});


// knappar
console.log("pog")


const collection1 = document.getElementsByClassName("konsert_button");

for (let i = 0; i < collection1.length - 1; i++) {
  collection1[i].addEventListener("click", function() {
    window.location.href='konserter.html';
  });
}

document.getElementById("index_om_oss_button").addEventListener("click", function() {
  window.location.href='om_oss.html';
});