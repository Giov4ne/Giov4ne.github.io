const select = document.querySelector('#select');
const conteudo = document.querySelector('#conteudo-pitagoras');

function insereConteudo(){
    switch(select.value){
        case 'hipotenusa':
            conteudo.innerHTML = `
                <input type="number" id="catetoA" class="campos" placeholder="Cateto A" />
                <input type="number" id="catetoB" class="campos" placeholder="Cateto B" />
                <button id="btn-pitagoras" class="botoes">Calcular</button>
                <input type="text" id="hipotenusa" class="campos" placeholder="Hipotenusa" disabled />
            `;
            break;
        case 'cat-a':
            conteudo.innerHTML = `
                <input type="number" id="hipotenusa" class="campos" placeholder="Hipotenusa" />
                <input type="number" id="catetoB" class="campos" placeholder="Cateto B" />
                <button id="btn-pitagoras" class="botoes">Calcular</button>
                <input type="text" id="catetoA" class="campos" placeholder="Cateto A" disabled />
            `;
            break;
        case 'cat-b':
            conteudo.innerHTML = `
                <input type="number" id="hipotenusa" class="campos" placeholder="Hipotenusa" />
                <input type="number" id="catetoA" class="campos" placeholder="Cateto A" />
                <button id="btn-pitagoras" class="botoes">Calcular</button>
                <input type="text" id="catetoB" class="campos" placeholder="Cateto B" disabled />
            `;
            break;
    }
    let hipotenusa = document.querySelector('#hipotenusa');
    let catetoA = document.querySelector('#catetoA');
    let catetoB = document.querySelector('#catetoB');
    let btn = document.querySelector('#btn-pitagoras');
    btn.addEventListener('click', calcular);
}

function calcular(){
    switch(select.value){
        case 'hipotenusa':
            if(catetoA.value && catetoB.value){
                catetoA.value = parseFloat(catetoA.value);
                catetoB.value = parseFloat(catetoB.value);
                if(catetoA.value > 0 && catetoB.value > 0){
                    hipotenusa.value = Math.sqrt(catetoA.value**2 + catetoB.value**2);
                } else{
                    alert('Os valores precisam ser acima de 0.');
                }
            }
            break;
        case 'cat-a':
            if(hipotenusa.value && catetoB.value){
                hipotenusa.value = parseFloat(hipotenusa.value);
                catetoB.value = parseFloat(catetoB.value);
                if(hipotenusa.value > 0 && catetoB.value > 0){
                    if(hipotenusa.value > catetoB.value){
                        catetoA.value = Math.sqrt(hipotenusa.value**2 - catetoB.value**2);
                    } else{
                        alert('A hipotenusa precisa ser maior do que o cateto B.');
                    }
                } else{
                    alert('Os valores precisam ser acima de 0.');
                }
            }
            break;
        case 'cat-b':
            if(hipotenusa.value && catetoA.value){
                hipotenusa.value = parseFloat(hipotenusa.value);
                catetoA.value = parseFloat(catetoA.value);
                if(hipotenusa.value > 0 && catetoA.value > 0){
                    if(hipotenusa.value > catetoA.value){
                        catetoB.value = Math.sqrt(hipotenusa.value**2 - catetoA.value**2);
                    } else{
                        alert('A hipotenusa precisa ser maior do que o cateto A.');
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