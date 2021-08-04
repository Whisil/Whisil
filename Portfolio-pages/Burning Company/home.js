
// const homeBtn = document.querySelector('#home');

// homeBtn.style.background = 'rgba(196, 196, 196, 0.1)';

// const newsItem = document.querySelectorAll('.news-item');


function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger-menu__button');
    let links = menu.find('.burger-menu__link');
    let overlay = menu.find('.burger-menu__overlay');
    
    button.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });
    
    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());
    
    function toggleMenu() {
        menu.toggleClass('burger-menu_active');
        if (menu.hasClass('burger-menu_active')) {
            $('body').css('overflow', 'hidden');
        } else {
            $('body').css('overflow', 'visible');
        }
    }
}

burgerMenu ('.burger-menu');


$(document).ready(function(){
    $('.slider-container').slick({
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: false,
        dots: false,
        pauseOnHover: true,
        autoplay: true,
        autoplaySpeed: 8000
    });
  });