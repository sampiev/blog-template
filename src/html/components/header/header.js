

let headerBurger = document.querySelector('.header__burger');
let sideMenu = document.querySelector('.side-menu')

headerBurger.addEventListener('click', () => {
    sideMenu.classList.add('active')
})


let sideMenuClose = document.querySelector('.side-menu-close');

sideMenuClose.addEventListener('click', () => {
    sideMenu.classList.remove('active')
})
