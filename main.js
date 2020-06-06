const header = document.querySelector('header');
const hamburgerContainer = document.querySelector('.hamburger__container');
const hamburger = document.querySelector('.hamburger');
const navMobile = document.querySelector('.nav__mobile');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.classList.add("shrinked");
    } else {
        header.classList.remove("shrinked");
    }
});

hamburgerContainer.addEventListener('click', () => {
    hamburgerContainer.classList.toggle('open');
    navMobile.classList.toggle('open');
});