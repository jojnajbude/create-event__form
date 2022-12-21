const burgerMenu = document.querySelector('.header__menu-burger');
const burgerList = document.querySelector('.header__nav');

const form = document.querySelector('.form');

burgerMenu.addEventListener('click', () => {
    burgerList.classList.toggle('header__nav--open');
});


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputs = form.querySelectorAll('input');
  
    inputs.forEach((input) => {
      input.value = '';
      input.checked = false;
    });
  });