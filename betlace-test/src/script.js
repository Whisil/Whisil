const info = document.querySelector('.banner__image_info-filter');
const button = document.querySelector('.filter-switch');
const par = document.querySelector('.banner__image_par-filter');

let i = 1;

button.addEventListener('click', () => {
    info.style.display = 'block';
    par.style.display = 'block';
    
    i++;

    if(i % 2){
        info.style.display = 'none';
        par.style.display = 'none'; 
    }
});