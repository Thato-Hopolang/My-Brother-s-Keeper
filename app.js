//Drop-down Menu

const toggleBtn = document.getElementsByClassName("menu-drop")[0]
const navbarLinks = document.getElementsByClassName("nav-links")[0]

toggleBtn.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})