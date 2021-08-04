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



function mediaThird(){
    if(window.matchMedia('(max-width: 540px)').matches){
        $(document).ready(function(){
            $('.slider-container').slick({
                dots: false,
                infinite: true,
                speed: 700,
                slidesToShow: 2,
                adaptiveHeight: true,
                arrows: false,
                pauseOnHover: true,
                autoplay: true,
                autoplaySpeed: 5000,
                prevArrow: $('.prev'),
                nextArrow: $('.next')
            });
        });
    }
}

mediaThird();

function mediaSecond(){
    if(window.matchMedia('(max-width: 770px)').matches){
        $(document).ready(function(){
            $('.slider-container').slick({
                dots: false,
                infinite: true,
                speed: 700,
                slidesToShow: 3,
                adaptiveHeight: true,
                arrows: false,
                pauseOnHover: true,
                autoplay: true,
                autoplaySpeed: 5000,
                prevArrow: $('.prev'),
                nextArrow: $('.next')
            });
        });
    }
}

mediaSecond();

function mediaFirst(){
    if(window.matchMedia('(max-width: 992px)').matches){
        $(document).ready(function(){
            $('.slider-container').slick({
                dots: false,
                infinite: true,
                speed: 700,
                slidesToShow: 4,
                adaptiveHeight: true,
                arrows: true,
                pauseOnHover: true,
                autoplay: true,
                autoplaySpeed: 5000,
                prevArrow: $('.prev'),
                nextArrow: $('.next')
            });
        });
    }
}
mediaFirst();

$(document).ready(function(){
    $('.slider-container').slick({
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 5,
        adaptiveHeight: true,
        arrows: true,
        pauseOnHover: true,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: $('.prev'),
        nextArrow: $('.next')
    });
});

