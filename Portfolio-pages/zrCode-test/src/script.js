
document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '.splide', {
        perPage    : 2,
        perMove    : 1,
        height     : '9rem',
        focus      : 0,
        gap: 45,
        trimSpace  : false,
        waitForTransition: true,
        breakpoints: {
            1665:{
                perPage: 1,
                padding:{
                    right: '76px',
                }
            },
            1200:{
                perPage: 1,
                gap: 0,
                padding:{
                    right: '0px'
                }
            },
            992:{
                perPage: 3,
                focus: 1
            },
            476:{
                perPage:1,
                focus: 0,
                gap: 0
            }
	    }
    }).mount();
} );





$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 6,
        margin: 10,
        nav: true,
        dots: false,
        responsive:{
            996:{
                items: 6
            },
            600:{
                margin: 20,
                items: 4
            },
            400:{
                nav: true,
            },
            0:{
                nav:false,
                items:2,
                margin:30,
            }
        }
    });
});