$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
  
});

$('.owl-carousel').owlCarousel({
    items:3,
    loop:false,
    left: true,
    margin:10,
    URLhashListener:true,
    autoplayHoverPause:false,
    dots: false,
    nav: true,
    navText: ["",""],
    responsive: {
        1246: {
            items: 3
        },
        700: {
            items: 2,
            center: true
        },
        100: {
            items: 1,
            center: true
        }

    }
});

var owl = $('.owl-carousel');
owl.owlCarousel();

$('#next').click(function(e) {
    owl.trigger('next.owl.carousel');
})

$('#prev').click(function() {
    owl.trigger('prev.owl.carousel');
})


