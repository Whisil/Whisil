const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if(pageYOffset >= innerHeight * 0.1){
        header.style.backgroundColor = "#222222";
        header.style.paddingTop = '20px';
    } else if(pageYOffset < innerHeight * 0.1){
        header.style.backgroundColor = 'transparent';
        header.style.paddingTop = '27px'
    }
})



// ScrollSpy

window.onload = function () {
    scrollSpy('.menu', {
        sectionSelector: 'section',
        targetSelector: '.item__link',
        offset: 100
    });
}






 