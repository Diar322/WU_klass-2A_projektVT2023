//  Initialize Swiper
let swiper = new Swiper(".my_swiper", {
    pagination: {
      el: ".swiper-pagination",
    },
});

// knappar

const collection = document.getElementsByClassName("konsert_button");

for (let i = 0; i < collection.length - 1; i++) {
  collection[i].addEventListener("click", function() {
    window.location.href='konserter.html';
  });
}

document.getElementById("index_om_oss_button").addEventListener("click", function() {
  window.location.href='om_oss.html';
});