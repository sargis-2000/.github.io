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

new Swiper('.info__slider', {
    thumbs: {
        swiper: {
            cssMode: true,
            el: '.thumbnails',
        }
    }
});
new Swiper('.thumbnails', {
    cssMode: true,
    spaceBetween: 10,
    breakpoints: {
        321: {
            spaceBetween: 7,
        },
        1281: {
            spaceBetween: 7,
        },
        1282: {
            spaceBetween: 10,
        }
    }
});

$(document).ready(function() {
    $('#st1').click(function() {
        $('.star').css('fill', '#B6C9DA');
        $('#st1').css('fill', '#FFC700');
    });
    $('#st2').click(function() {
        $('.star').css('fill', '#B6C9DA');
        $('#st1,#st2').css('fill', '#FFC700');
    });
    $('#st3').click(function() {
        $('.star').css('fill', '#B6C9DA');
        $('#st1,#st2,#st3').css('fill', '#FFC700');
    });
    $('#st4').click(function() {
        $('.star').css('fill', '#B6C9DA');
        $('#st1,#st2,#st3,#st4').css('fill', '#FFC700');
    });
    $('#st5').click(function() {
        $('.star').css('fill', '#B6C9DA');
        $('#st1,#st2,#st3,#st4,#st5').css('fill', '#FFC700');
    });


    $('#sm1').click(function() {
        $('.star-middle').css('fill', '#B6C9DA');
        $('#sm1').css('fill', '#FFC700');
    });
    $('#sm2').click(function() {
        $('.star-middle').css('fill', '#B6C9DA');
        $('#sm1,#sm2').css('fill', '#FFC700');
    });
    $('#sm3').click(function() {
        $('.star-middle').css('fill', '#B6C9DA');
        $('#sm1,#sm2,#sm3').css('fill', '#FFC700');
    });
    $('#sm4').click(function() {
        $('.star-middle').css('fill', '#B6C9DA');
        $('#sm1,#sm2,#sm3,#sm4').css('fill', '#FFC700');
    });
    $('#sm5').click(function() {
        $('.star-middle').css('fill', '#B6C9DA');
        $('#sm1,#sm2,#sm3,#sm4,#sm5').css('fill', '#FFC700');
    });


    $('#sb1').click(function() {
        $('.star-bottom').css('fill', '#B6C9DA');
        $('#sb1').css('fill', '#FFC700');
    });
    $('#sb2').click(function() {
        $('.star-bottom').css('fill', '#B6C9DA');
        $('#sb1,#sb2').css('fill', '#FFC700');
    });
    $('#sb3').click(function() {
        $('.star-bottom').css('fill', '#B6C9DA');
        $('#sb1,#sb2,#sb3').css('fill', '#FFC700');
    });
    $('#sb4').click(function() {
        $('.star-bottom').css('fill', '#B6C9DA');
        $('#sb1,#sb2,#sb3,#sb4').css('fill', '#FFC700');
    });
    $('#sb5').click(function() {
        $('.star-bottom').css('fill', '#B6C9DA');
        $('#sb1,#sb2,#sb3,#sb4,#sb5').css('fill', '#FFC700');
    });
});

const popupOpenBtn = document.querySelector('.feedback__btn');
const popup = document.querySelector('.popup-wrapper');
const popupCloseBtn = document.querySelector('.popup__close-btn');

function popupClose(e) {
    popup.classList.remove('show');
    document.documentElement.removeAttribute('style');
}

popupOpenBtn.onclick = () => {
    popup.classList.add('show');
    document.documentElement.style.overflowY = 'hidden';
}
popup.onclick = popupClose;
popupCloseBtn.onclick = popupClose;
popup.querySelector('.popup').onclick = e => e.stopPropagation();