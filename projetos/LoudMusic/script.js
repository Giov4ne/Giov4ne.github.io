function slide1(){
    document.getElementById('hero').src="./imagens/violoes.jpg";
    setTimeout("slide2()", 2500)
}

function slide2(){
    document.getElementById('hero').src="./imagens/GUITA-OK.jpg";
    setTimeout("slide3()", 2500)
}

function slide3(){
    document.getElementById('hero').src="./imagens/ACESSORIOS-CORDAS-OKOK.jpg";
    setTimeout("slide1()", 2800)
}