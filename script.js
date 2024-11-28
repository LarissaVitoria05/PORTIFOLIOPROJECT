let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let backButton = document.getElementById('back');
let seeMoreButtons = document.querySelectorAll('.see-more');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');

let nextDetails = document.querySelectorAll('.next-details');
let prevDetails = document.querySelectorAll('.prev-details');
/* configura os botões de next e prev */
nextButton.onclick = function(){
    showSlider('next');
}
prevButton.onclick = function(){
    showSlider('prev');
}

/* torna a tela sensivel as teclas <- ->*/
/* verifica se a classe 'showDetail' não existe em carousel */
document.addEventListener('keyup', function(event){
    if (carousel.classList.contains('showDetail') != true){
        if (event.keyCode === 39 || event.keyCode === 68){
            showSlider('next');
    }
    }
});
document.addEventListener('keyup', function(event){
    if (carousel.classList.contains ('showDetail') != true){
        if (event.keyCode === 37 || event.keyCode === 65){
            showSlider('prev');
        }
    }
});
document.addEventListener('keyup', function(event){
    if (event.keyCode === 38 || event.keyCode === 87){
        carousel.classList.add('showDetail'); 
    }
});
document.addEventListener('keyup', function(event){
    if (event.keyCode === 40 || event.keyCode === 83){
        carousel.classList.remove('showDetail');
        carousel.classList.remove('showCards');
    }
});


/* clique nos botões */
let unAcceptClick;
const showSlider = (type) => {
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';
    carousel.classList.remove('prev','next')
    let items = document.querySelectorAll('.carousel .list .item');
    if(type === 'next'){
        listHTML.appendChild(items[0]);
        carousel.classList.add('next');
    }else{
        let positionLast = items.length -1;
        listHTML.prepend(items[positionLast]);
        carousel.classList.add('prev');
    }
    clearTimeout(unAcceptClick);
    unAcceptClick = setTimeout(() =>{ 
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
    }, 300);
}

/* botões para os detalhes */

seeMoreButtons.forEach(button =>{
    button.onclick = function(){
        carousel.classList.add('showDetail');
    }
})
backButton.onclick = function(){
    carousel.classList.remove('showCards');
    carousel.classList.remove('showDetail');
}

/* botões para os cards */


nextDetails.forEach(button => {
    button.onclick = function() {
        if (carousel.classList.contains('showDetail')) {
            carousel.classList.add('FadeOutt');
            setTimeout(() => {
                const professionalDetails = carousel.querySelector('.professional-details');
                
                if (professionalDetails) {
                    professionalDetails.style.display = 'none'; 
                }
                carousel.classList.add('showCards');
                carousel.classList.remove('FadeOutt')
            }, 507);
        }
    }
});

prevDetails.forEach(button => {
    button.onclick = function() {
        if (carousel.classList.contains('showCards')) {
            carousel.classList.add('Fadeout');

            setTimeout(() => {
                const professionalDetails = carousel.querySelector('.professional-details');
                
                if (professionalDetails) {
                    professionalDetails.style.display = 'block'; 
                }

                carousel.classList.remove('Fadeout');
                carousel.classList.remove('showCards');
            }, 360); 
                carousel.classList.add('FadeInDetail')
                carousel.classList.remove('FadeInDetail');
        }
    };
});


document.addEventListener('keyup', function(event) {
    if (carousel.classList.contains('showDetail') === true) {
        if (event.keyCode === 39 || event.keyCode === 68) {
            carousel.classList.add('FadeOutt');

            setTimeout(() => {
                const professionalDetails = carousel.querySelector('.professional-details');

                if (professionalDetails) {
                    professionalDetails.style.display = 'none';
                }

                carousel.classList.add('showCards');

                carousel.classList.remove('FadeOutt');
            }, 507); 
        }
    }
});

document.addEventListener('keyup', function(event) {
    if (carousel.classList.contains('showDetail')) {

        if (event.keyCode === 37 || event.keyCode === 65) {

            carousel.classList.add('Fadeout');

            setTimeout(() => {
                const professionalDetails = carousel.querySelector('.professional-details');

                if (professionalDetails) {
                    professionalDetails.style.display = 'block'; 
                }

                carousel.classList.remove('Fadeout');
                carousel.classList.remove('showCards');

                carousel.classList.add('FadeInDetail');
                carousel.classList.remove('FadeInDetail');
            }, 360); 
        }
    }
});
document.addEventListener('keyup', function(event){
    if (event.keyCode === 40 || event.keyCode === 83){
        carousel.classList.remove('showDetail');
        carousel.classList.remove('showCards');
        setTimeout(() => {
            const professionalDetails = carousel.querySelector('.professional-details');
            
            if (professionalDetails) {
                professionalDetails.style.display = 'block'; 
            }

            carousel.classList.remove('Fadeout');
            carousel.classList.remove('showCards');
        }, 360); 
            carousel.classList.add('FadeInDetail');
            carousel.classList.remove('FadeInDetail');
    }
});


/* botões para o feedback/contato */
