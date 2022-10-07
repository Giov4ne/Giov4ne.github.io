const select = document.querySelector('#select');
const conteudo = document.querySelector('#conteudo-geoespacial');

function inserirConteudo(){
    switch(select.value){
        case 'paralelepipedo':
            conteudo.innerHTML = `
                <input type="number" id="comprimento-paralelepipedo" class="campos" placeholder="Comprimento" />
                <input type="number" id="largura-paralelepipedo" class="campos" placeholder="Largura" />
                <input type="number" id="altura-paralelepipedo" class="campos" placeholder="Altura" />
                <button id="btn-geoespacial" class="botoes">Calcular</button>
                <input type="text" id="volume-paralelepipedo" class="campos" placeholder="Volume do paralelepípedo" disabled />
            `;
            break;
        case 'piramide':
            conteudo.innerHTML = `
                <input type="number" id="comprimento-piramide" class="campos" placeholder="Comprimento" />
                <input type="number" id="largura-piramide" class="campos" placeholder="Largura" />
                <input type="number" id="altura-piramide" class="campos" placeholder="Altura" />
                <button id="btn-geoespacial" class="botoes">Calcular</button>
                <input type="text" id="volume-piramide" class="campos" placeholder="Volume da pirâmide" disabled />
            `;
            break;
        case 'cilindro':
            conteudo.innerHTML = `
                <input type="number" id="raio-cilindro" class="campos" placeholder="Raio da base" />
                <input type="number" id="altura-cilindro" class="campos" placeholder="Altura" />
                <button id="btn-geoespacial" class="botoes">Calcular</button>
                <input type="text" id="volume-cilindro" class="campos" placeholder="Volume do cilindro" disabled />
            `;
            break;
        case 'cone':
            conteudo.innerHTML = `
                <input type="number" id="raio-cone" class="campos" placeholder="Raio da base" />
                <input type="number" id="altura-cone" class="campos" placeholder="Altura" />
                <button id="btn-geoespacial" class="botoes">Calcular</button>
                <input type="text" id="volume-cone" class="campos" placeholder="Volume do cone" disabled />
            `;
            break;
        case 'esfera':
            conteudo.innerHTML = `
                <input type="number" id="raio-esfera" class="campos" placeholder="Raio" />
                <button id="btn-geoespacial" class="botoes">Calcular</button>
                <input type="text" id="volume-esfera" class="campos" placeholder="Volume da esfera" disabled />
            `;
            break;
    }

    let btn = document.querySelector('#btn-geoespacial');
    btn.addEventListener('click', calcular);
}

function calcular(){
    switch(select.value){
        case 'paralelepipedo':
            let compPar = document.querySelector('#comprimento-paralelepipedo');
            let largPar = document.querySelector('#largura-paralelepipedo');
            let alturaPar = document.querySelector('#altura-paralelepipedo');
            let volPar = document.querySelector('#volume-paralelepipedo');
            if(compPar.value && largPar.value && alturaPar.value){
                compPar.value = parseFloat(compPar.value);
                largPar.value = parseFloat(largPar.value);
                alturaPar.value = parseFloat(alturaPar.value);
                if(compPar.value > 0 && largPar.value > 0 && alturaPar.value > 0){
                    let basePar = compPar.value * largPar.value;
                    volPar.value = basePar * alturaPar.value;
                } else{
                    alert('Os valores precisam ser acima de 0.');
                }
            }
            break;
        case 'piramide':
            let compPir = document.querySelector('#comprimento-piramide');
            let largPir = document.querySelector('#largura-piramide');
            let alturaPir = document.querySelector('#altura-piramide');
            let volPir = document.querySelector('#volume-piramide');
            if(compPir.value && largPir.value && alturaPir.value){
                compPir.value = parseFloat(compPir.value);
                largPir.value = parseFloat(largPir.value);
                alturaPir.value = parseFloat(alturaPir.value);
                if(compPir.value > 0 && largPir.value > 0 && alturaPir.value > 0){
                    let basePir = compPir.value * largPir.value;
                    volPir.value = (basePir * alturaPir.value) / 3;
                } else{
                    alert('Os valores precisam ser acima de 0.');
                }
            }            
            break;
        case 'cilindro':
            let raioCil = document.querySelector('#raio-cilindro');
            let alturaCil = document.querySelector('#altura-cilindro');
            let volCil = document.querySelector('#volume-cilindro');
            if(raioCil.value && alturaCil.value){
                raioCil.value = parseFloat(raioCil.value);
                alturaCil.value = parseFloat(alturaCil.value);
                if(raioCil.value > 0 && alturaCil.value > 0){
                    let baseCil = Math.PI * raioCil.value**2;
                    volCil.value = (baseCil * alturaCil.value).toFixed(4);
                } else{
                    alert('Os valores precisam ser acima de 0.');
                }
            }
            break;
        case 'cone':
            let raioCone = document.querySelector('#raio-cone');
            let alturaCone = document.querySelector('#altura-cone');
            let volCone = document.querySelector('#volume-cone');
            if(raioCone.value && alturaCone.value){
                raioCone.value = parseFloat(raioCone.value);
                alturaCone.value = parseFloat(alturaCone.value);
                if(raioCone.value > 0 && alturaCone.value > 0){
                    let baseCone = Math.PI * raioCone.value**2;
                    volCone.value = ((baseCone * alturaCone.value) / 3).toFixed(4);
                } else{
                    alert('Os valores precisam ser acima de 0.');
                }
            }
            break;
        case 'esfera':
            let raioEsf = document.querySelector('#raio-esfera');
            let volEsf = document.querySelector('#volume-esfera');
            if(raioEsf.value){
                raioEsf.value = parseFloat(raioEsf.value);
                if(raioEsf.value > 0){
                    volEsf.value = ((4 * Math.PI * raioEsf.value**3) / 3).toFixed(4);
                } else{
                    alert('O raio da esfera precisa ser maior do que 0.');
                }
            }
            break;
    }
}

select.addEventListener('input', inserirConteudo);

window.onload = ()=> inserirConteudo();