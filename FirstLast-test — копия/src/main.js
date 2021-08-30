const text = document.querySelector('.main-middle_center__text');

window.addEventListener('mousemove', (e)=>{
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;

    text.style.transform = 'translateY(' + y * 50 + 'px) translateX('+ x * 20 + 'px)';
    text.style.transition = 'transform ease';
});