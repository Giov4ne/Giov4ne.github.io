const barraLateral = document.querySelector('#barra-lateral');
const itensLaterais = document.querySelectorAll('.itns-laterais');

barraLateral.addEventListener('mouseenter', ()=>{
    barraLateral.classList.remove('barra-lateral-off');
    barraLateral.classList.add('barra-lateral-on');
    for(let item of itensLaterais){
        item.classList.add('itns-laterais-on');
    }
});

barraLateral.addEventListener('mouseleave', ()=>{
    barraLateral.classList.remove('barra-lateral-on');
    barraLateral.classList.add('barra-lateral-off');
    for(let item of itensLaterais){
        item.classList.remove('itns-laterais-on');
    }
});