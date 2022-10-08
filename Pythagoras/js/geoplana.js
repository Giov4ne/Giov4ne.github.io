const select = document.querySelector('#select');
const conteudo = document.querySelector('#conteudo-geoplana');

function insereConteudo(){
    switch(select.value){
        case 'retangulo':
            conteudo.innerHTML = `
                <input type="number" id="base-retangulo" class="campos" placeholder="Base" />
                <input type="number" id="altura-retangulo" class="campos" placeholder="Altura" />
                <button id="btn-geoplana" class="botoes">Calcular</button>
                <input type="text" id="area-retangulo" class="campos" placeholder="Área do retângulo" disabled />
            `;
            break;
        case 'circulo':
            conteudo.innerHTML = `
                <input type="number" id="raio" class="campos" placeholder="Raio" />
                <button id="btn-geoplana" class="botoes">Calcular</button>
                <input type="text" id="area-circulo" class="campos" placeholder="Área do círculo" disabled />
            `;
            break;
        case 'triangulo':
            conteudo.innerHTML = `
                <input type="number" id="base-triangulo" class="campos" placeholder="Base" />
                <input type="number" id="altura-triangulo" class="campos" placeholder="Altura" />
                <button id="btn-geoplana" class="botoes">Calcular</button>
                <input type="text" id="area-triangulo" class="campos" placeholder="Área do triângulo" disabled />
            `;
            break;
        case 'coroa':
            conteudo.innerHTML = `
                <input type="number" id="raio-coroa" class="campos" placeholder="Raio da coroa" />
                <input type="number" id="raio-circulo" class="campos" placeholder="Raio do círculo" />
                <button id="btn-geoplana" class="botoes">Calcular</button>
                <input type="text" id="area-coroa" class="campos" placeholder="Área da coroa" disabled />
            `;
            break;
    }
    let btn = document.querySelector('#btn-geoplana');
    btn.addEventListener('click', calcular);
}

function calcular(){
    switch(select.value){
        case 'retangulo':
            let baseRet = document.querySelector('#base-retangulo');
            let alturaRet = document.querySelector('#altura-retangulo');
            let areaRet = document.querySelector('#area-retangulo');
            if(baseRet.value && alturaRet.value){
                baseRet.value = parseFloat(baseRet.value);
                alturaRet.value = parseFloat(alturaRet.value);
                if(baseRet.value > 0 && alturaRet.value > 0){
                    areaRet.value = baseRet.value * alturaRet.value;
                } else{
                    alert('Os valores precisam ser acima de 0.');
                }
            }
            break;
        case 'circulo':
            let raio = document.querySelector('#raio');
            let areaCirc = document.querySelector('#area-circulo');
            if(raio.value){
                raio.value = parseFloat(raio.value);
                if(raio.value > 0){
                    areaCirc.value = (Math.PI * raio.value**2).toFixed(4);
                } else{
                    alert('O raio precisa ser maior que 0.');
                }
            }
            break;
        case 'triangulo':
            let baseTri = document.querySelector('#base-triangulo');
            let alturaTri = document.querySelector('#altura-triangulo');
            let areaTri = document.querySelector('#area-triangulo');
            if(baseTri.value && alturaTri.value){
                baseTri.value = parseFloat(baseTri.value);
                alturaTri.value = parseFloat(alturaTri.value);
                if(baseTri.value > 0 && alturaTri.value > 0){
                    areaTri.value = (baseTri.value * alturaTri.value) / 2;
                } else{
                    alert('Os valores precisam ser acima de 0.');
                }
            }
            break;
        case 'coroa':
            let raioCoroa = document.querySelector('#raio-coroa');
            let raioCirc = document.querySelector('#raio-circulo');
            let areaCoroa = document.querySelector('#area-coroa');
            if(raioCoroa.value && raioCirc.value){
                raioCoroa.value = parseFloat(raioCoroa.value);
                raioCirc.value = parseFloat(raioCirc.value);
                if(raioCoroa.value > 0 && raioCirc.value > 0){
                    if(raioCoroa.value > raioCirc.value){
                        areaCoroa.value = ((Math.PI * raioCoroa.value**2) - (Math.PI * raioCirc.value**2)).toFixed(4);
                    } else{
                        alert('O raio da coroa precisa ser maior do que o raio do círculo interno.');
                    }
                } else{
                    alert('Os valores precisam ser acima de 0.');
                }
            }
            break;
    }
}

select.addEventListener('input', insereConteudo);

window.onload = ()=> insereConteudo();