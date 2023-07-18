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

const FilterBtn = document.querySelector('.top-btn');
const filter = document.querySelector('.filter');

FilterBtn.onclick = () => {
    filter.classList.toggle('hide');
    if(!filter.classList.contains('hide')) filter.removeAttribute('style');
    FilterBtn.querySelector('.filter-btn__icon').classList.toggle('hide');
    FilterBtn.querySelector('.filter-btn__icon-hide').classList.toggle('hide');
    filter.classList.contains('hide') ?
    FilterBtn.querySelector('span').textContent = 'Показать фильтры'
    : FilterBtn.querySelector('span').textContent = 'Скрыть фильтры';
}


const filtersBtn = document.querySelectorAll('.filters__btn');

filtersBtn.forEach(btn => {
    const nextElement = btn.nextElementSibling;
    const btnIcons = btn.querySelectorAll('.filter-icon');
    btn.onclick = () => {
        if(!nextElement.hasAttribute('style')) {
            nextElement.style.height = `${nextElement.scrollHeight}px`;
            btnIcons[1].classList.add('hide');
            btnIcons[0].classList.remove('hide');
            nextElement.style.marginTop = '10px';
            if(nextElement.className === 'filters__item-prices') {
                nextElement.style.marginTop = '13px';
            }
            if(nextElement.className === 'popular-filters') {
                nextElement.style.marginTop = '15px';
            }
        } else {
            btnIcons[1].classList.remove('hide');
            btnIcons[0].classList.add('hide');
            nextElement.removeAttribute('style');
        }
    }
});