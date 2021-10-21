// variable 
const btnToggle = document.querySelector('.hamburger-menu');
const navBurger = document.querySelector('.header__nav')

btnToggle.addEventListener('click', (e) => {
    btnToggle.classList.toggle('hamburger-menu--open')
    if (btnToggle.classList.contains('hamburger-menu--open')) {
        navBurger.classList.add('header__nav--active')
    }
    else {
        navBurger.classList.remove('header__nav--active')
    }
})