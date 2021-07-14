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
    menu.style.transform = 'translateX(-320px)';
    setTimeout(() => overlay.style.display = 'block', 100);
    setTimeout(overlayOpen, 120);
});
closeBtn.addEventListener('click', function(){
    menu.style.transform = 'translateX(320px)';
    overlayClose();
    setTimeout(() => overlay.style.display = 'none', 320);
});
overlay.addEventListener('click', function(){
    menu.style.transform = 'translateX(320px)';
    overlayClose();
    setTimeout(() => overlay.style.display = 'none', 320);
});
