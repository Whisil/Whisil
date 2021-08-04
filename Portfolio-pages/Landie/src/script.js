const bigGear = document.querySelector('.big-gear');
const smallGear = document.querySelector('.small-gear');
const man = document.querySelector('.man');
const pencil = document.querySelector('.pencil');



window.addEventListener('scroll', function(){
    if(pageYOffset >=0 || pageYOffset <= 1000){
        bigGear.style.transform = `rotate(${pageYOffset * 0.2}deg)`;
        smallGear.style.transform = `rotate(-${pageYOffset * 0.2}deg)`;
        man.style.transform = `translateX(${pageYOffset * 0.05}px)`;
        pencil.style.transform = `translateX(-${pageYOffset * 0.1}px)`;
    }
});

const girlFirst = document.querySelector('.girl-first');
const girlSecond = document.querySelector('.girl-second');
const clouds = document.querySelector('.flower-clouds');

window.addEventListener('mousemove', function(e){
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    girlFirst.style.transform = 'translateX(-' + y * 50 + 'px)';
    girlSecond.style.transform = 'translateX('+ x * 50 + 'px)';
    clouds.style.transform = 'translateX('+ y * 50 + 'px)';
}); 

// MENU

// const btnLine = document.querySelector(".center-line");
// const navBtn = document.querySelector('.mobile-nav__btn');

// navBtn.addEventListener('mouseover', function(){
//     btnLine.style.opacity = '0';
// });
