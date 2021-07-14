
window.addEventListener('scroll', function() {
    
    let firstBlock = document.getElementById('blur');
    let topPos = window.pageYOffset;
    while(topPos <= 700){
        topPos = topPos * 0.006 + "px";
        firstBlock.style.filter = `blur(${topPos})`;
    }


});


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop > 150) {
    document.querySelector('.menu-container').style.minHeight = "60px";
    document.querySelector('header').style.backgroundColor = "rgb(40, 37, 53)";
  } else {
    document.querySelector('.menu-container').style.minHeight = "100px";
    document.querySelector('header').style.backgroundColor = "rgba(40, 37, 53, .9)";
  }
}


let adaptMenuOpen = document.querySelector('.adaptive-menu_btn');
let adaptMenuClose = document.querySelector('.nav-exit');
let adaptiveMenu = document.querySelector('.mobile-menu');
let adaptiveOverlay = document.querySelector('.adaptive-overlay');



adaptMenuOpen.addEventListener('click', function openMenu(e){
  adaptiveMenu.style.transform = 'translateX(-360px)';
  adaptiveOverlay.style.visibility = 'visible';
  setTimeout(function(){
    adaptiveOverlay.style.backgroundColor = 'rgba(31,29,41,.9)';
  }, 10);
  e.preventDefault();
  
});


adaptMenuClose.addEventListener('click', function closeMenu(e){
  adaptiveMenu.style.transform = 'translateX(360px)';
  adaptiveOverlay.style.cssText = `background-color: rgba(31,29,41,0)`;
  setTimeout(function(){
    adaptiveOverlay.style.visibility = 'hidden';
  }, 400);
  e.preventDefault();
});

adaptiveOverlay.addEventListener('click', function(e){
  adaptiveMenu.style.transform = 'translateX(360px)';
  adaptiveOverlay.style.cssText = `background-color: rgba(31,29,41,0)`;
  setTimeout(function(){
    adaptiveOverlay.style.visibility = 'hidden';
  }, 400);
  e.preventDefault();
});

// document.addEventListener('mousedown', function(e){
//   if(e.target.closest('.mobile-menu') === null){
//     adaptiveMenu.style.transform = 'translateX(360px)';
//     adaptiveOverlay.style.cssText = `background-color: rgba(31,29,41,0)`;
//     setTimeout(function(){
//       adaptiveOverlay.style.visibility = 'hidden';
//     }, 400);
//     e.preventDefault();
//   }
// });






