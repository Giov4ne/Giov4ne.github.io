let item = 0;   //contador de imagens solicitadas
const max = 79; //número da última imagem
const updateRate = 2000;

function proxImg(img){ //solicita nova imagem via fetch()
    fetch('./img/'+img+'.jpg')
        .then(resp => resp.blob())
        .then(blob => {
            const imageObjectURL = URL.createObjectURL(blob); //cria endereço da imagem
            const proxImagem = document.createElement('img');
            proxImagem.src = imageObjectURL;
            document.getElementById('placeholder').appendChild(proxImagem);
        })
}

window.onload = setInterval( ()=>{
    proxImg(item++ % (max+1));
    let scrollPoint = window.scrollY + window.innerHeight;
    window.scrollTo({top: scrollPoint, behavior: 'smooth'});
}, updateRate);