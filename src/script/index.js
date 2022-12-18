const burgerMenu = document.querySelector('.header__menu-burger');
const burgerList = document.querySelector('.header__nav');

burgerMenu.addEventListener('click', () => {
    burgerList.classList.toggle('header__nav--open');
});


console.log(burgerMenu);