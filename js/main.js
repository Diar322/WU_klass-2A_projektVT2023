const burger = document.getElementById("burger")
const nav = document.getElementById("nav_list")

function toggleMenu() {
    burger.classList.toggle('burger_toggle')
    nav.classList.toggle('nav-active')
}

burger.addEventListener('click', toggleMenu)