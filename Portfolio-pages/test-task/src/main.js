

new Splide( '.splide', {
    type   : 'loop',
    clones: 3,
	perPage: 3,
    autoWidth: true,
    pagination: false,
    arrow: false,
    arrowPath: "M24.3536 21.6958C24.5488 21.891 24.5488 22.2076 24.3536 22.4029L21.1716 25.5849C20.9763 25.7801 20.6597 25.7801 20.4645 25.5849C20.2692 25.3896 20.2692 25.073 20.4645 24.8777L23.2929 22.0493L20.4645 19.2209C20.2692 19.0256 20.2692 18.709 20.4645 18.5138C20.6597 18.3185 20.9763 18.3185 21.1716 18.5138L24.3536 21.6958ZM0 21.5493L24 21.5493V22.5493L0 22.5493L0 21.5493Z",
	focus  : 'center',
    breakpoints: {
        540:{
            perPage: 1
        }
    }
}).mount();



$(document).ready(function(){
    $(".blog-owl").owlCarousel({
        loop: false,
        responsive: {
            0:{
                items: 1,
                margin: 0,
                
            },
            480:{
                center: true,
                items: 2,
                margin: 0,
            },
            600:{
                items: 2,
                
            },
            1240:{
                items: 3,

            }
        }
    });
});



$(document).ready(function(){
    $('.brands-slider').slick({
        slidesToShow: 5,
        arrows: false,
        infinite: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
              }
            },
            {
                breakpoint: 500,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
            },
            {
                breakpoint: 0,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
            },
        ]
    });
});
      



const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 6,
    spaceBetween: 0,
    breakpoints: {
        0:{
            slidesPerView: 2,
        },
        370:{
            slidesPerView: 3,
        },
        800: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1150: {
            slidesPerView: 4,
            spaceBetween: 10
        },
        1350:{
            slidesPerView: 5,
        },
        1500:{
            slidesPerView: 6, 
              
        }
    },
  

  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper__next-btn',
      prevEl: '.swiper__prev-btn',
    },
  
});



let openBtn = document.querySelector('.mobile-nav_btn');
let closeBtn = document.querySelector('.mobile__close-btn');
let menu = document.querySelector('.mobile-nav');
let overlay = document.querySelector('.mobile-overlay');

function overlayOpen(){
    overlay.style.opacity = '0.5';
}
function overlayClose(){
    overlay.style.opacity = '0';
}

openBtn.addEventListener('click', function(){
    menu.style.transform = 'translateX(320px)';
    setTimeout(() => overlay.style.display = 'block', 100);
    setTimeout(overlayOpen, 120);
});
closeBtn.addEventListener('click', function(){
    menu.style.transform = 'translateX(-320px)';
    overlayClose();
    setTimeout(() => overlay.style.display = 'none', 320);
});
overlay.addEventListener('click', function(){
    menu.style.transform = 'translateX(-320px)';
    overlayClose();
    setTimeout(() => overlay.style.display = 'none', 320);
});


  