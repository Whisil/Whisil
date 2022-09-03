window.addEventListener('scroll', function(){
    const portfolio = document.querySelectorAll('.portfolio-sign__letter')
    
    if(pageYOffset <= 250){
        for(let element of portfolio){
            element.style.top = `${pageYOffset}px`;
        }
    }
    
    const upBtn = document.querySelector('.up-btn');

    if(pageYOffset > 800){
        upBtn.style.opacity = '1';
        upBtn.style.pointerEvents = 'all';
    } else if(pageYOffset < 790){
        upBtn.style.opacity = '0';
        upBtn.style.pointerEvents = 'none';
    }

});

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.modal__overlay');
const modalBtn = document.querySelector('.contact-btn');

function showModal(){
    modal.style.opacity = '1';
    overlay.style.opacity = '1';
}
function closeModal(){
    modal.style.display = 'none';
    overlay.style.display = 'none';
}

modalBtn.addEventListener('click', function(){

    modal.style.display = 'flex';
    overlay.style.display = 'block';
    setTimeout(showModal, 210);

});

overlay.addEventListener('click', function(){
    modal.style.opacity = '0';
    overlay.style.opacity = '0';
    setTimeout(closeModal, 150);
});
