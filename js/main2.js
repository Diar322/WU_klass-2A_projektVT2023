const collection2 = document.getElementsByClassName("om_oss_profil_inner");

for (let i = 0; i < collection2.length; i++) {
  collection2[i].addEventListener("click", function() {
    collection2[i].style.backgroundColor = "lightgrey";
  });
}

