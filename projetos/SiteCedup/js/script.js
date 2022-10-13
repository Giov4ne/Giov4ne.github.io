const aside = document.querySelector('#barra-lateral');
const itensLaterais = document.querySelectorAll('.itns-laterais');
const menuBtn = document.querySelector('#menu-icon');
let menuAberto = false;

function configAside(){
    let tamMenu = window.innerWidth;
    if(tamMenu > 550){
        aside.addEventListener('mouseenter', asideMouseEnter);
        aside.addEventListener('mouseleave', asideMouseLeave);
    } else{
        aside.removeEventListener('mouseenter', asideMouseEnter);
        aside.removeEventListener('mouseleave', asideMouseLeave);
        menuBtn.addEventListener('click', menuBtnOpen);
    }
}

configAside();
window.addEventListener('resize', configAside);

function asideMouseEnter(){
    aside.classList.remove('barra-lateral-off');
    aside.classList.add('barra-lateral-on');
    for(let item of itensLaterais){
        item.classList.remove('itens-laterais-off');
        item.classList.add('itens-laterais-on');
    }
}

function asideMouseLeave(){
    aside.classList.remove('barra-lateral-on');
    aside.classList.add('barra-lateral-off');
    for(let item of itensLaterais){
        item.classList.remove('itens-laterais-on');
        item.classList.add('itens-laterais-off');
    }
}

function menuBtnOpen(){
    if(!menuAberto){
        menuAberto = true;
        aside.classList.remove('barra-lateral-off');
        aside.classList.add('barra-lateral-on');
        for(let item of itensLaterais){
            item.classList.remove('itens-laterais-off');
            item.classList.add('itens-laterais-on');
        }
        menuBtn.classList.remove('menu-icon-off');
        menuBtn.classList.add('menu-icon-on');
        menuBtn.src = '../icones/voltar.svg';
        document.body.style.overflowY = 'hidden';
    } else{
        menuAberto = false;
        aside.classList.remove('barra-lateral-on');
        aside.classList.add('barra-lateral-off');
        for(let item of itensLaterais){
            item.classList.remove('itens-laterais-on');
            item.classList.add('itens-laterais-off');
        }
        menuBtn.classList.remove('menu-icon-on');
        menuBtn.classList.add('menu-icon-off');
        menuBtn.src = '../icones/menu.svg';
        document.body.style.overflowY = 'scroll';
    }
}