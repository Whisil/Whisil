
let sliderLine = document.querySelector('.slider__right');


window.addEventListener('scroll', function(){

    let slider = document.querySelector('.guide_right');
    
    if(window.matchMedia('(min-width: 1920px)').matches){
        if(pageYOffset >= 0 && pageYOffset < 900){
            sliderLine.children[0].classList.add('active-link');
        } else if(pageYOffset > 900){
            sliderLine.children[0].classList.remove('active-link');
        }

        if(pageYOffset > 900 && pageYOffset < 1900){
            sliderLine.childNodes[3].classList.add('active-link');
        } else if(pageYOffset < 900 || pageYOffset > 1900){
            sliderLine.childNodes[3].classList.remove('active-link');
        }

        if(pageYOffset > 1900 && pageYOffset < 2800){
            sliderLine.childNodes[5].classList.add('active-link');
        } else if(pageYOffset < 1900 || pageYOffset > 2800){
            sliderLine.childNodes[5].classList.remove('active-link');
        }

        if(pageYOffset > 2800){
            sliderLine.childNodes[7].classList.add('active-link');
        } else if(pageYOffset < 2800){
            sliderLine.childNodes[7].classList.remove('active-link');
        }


    
        if(pageYOffset >= 3100){
            slider.style.position = 'absolute';
            slider.style.top = `3135px`;
            slider.style.right = '-30.75%';
        } else if(pageYOffset < 3100){
            slider.style.position = 'fixed';
            slider.style.top ='38%';
            slider.style.right = '0';
        }
        


    }
    

});
