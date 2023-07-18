const burgerBtn = document.querySelector('.burger-btn');
const menu = document.querySelector('.nav-middle');

burgerBtn.onclick = () => {
    menu.classList.toggle('nav-middle--show');
    burgerBtn.querySelector('.burger-btn__icon').classList.toggle('hide');
    burgerBtn.querySelector('.burger-btn__close-icon').classList.toggle('hide');
    document.querySelector('.country').classList.toggle('hide');
    document.querySelector('.tel-item').classList.toggle('show');
    document.querySelector('.tel-mobile').classList.toggle('hide');
    menu.classList.contains('nav-middle--show') ?
    document.documentElement.style.overflowY = 'hidden' :
    document.documentElement.removeAttribute('style');
}