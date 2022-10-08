const inputA = document.querySelector('#ax');
const inputB = document.querySelector('#bx');
const inputC = document.querySelector('#cx');
const btn = document.querySelector('#calc-bhaskara');
const outputX = document.querySelector('#valor-x');

function calcularEquacao(a, b, c){
    let resultado;
    if(a !== 0){
        let delta = (b**2) - (4*a*c);
        if(delta > 0){
            let x1 = (-b + Math.sqrt(delta)) / (2*a);
            let x2 = (-b - Math.sqrt(delta)) / (2*a);
            resultado = `x¹ = ${x1.toFixed(2)}; x² = ${x2.toFixed(2)}`;
        } else if(delta === 0){
             let x = (-b) / (2*a);
             resultado = `x = ${x.toFixed(2)}`;
        } else{
            resultado = 'Não há solução real.';
        }
    } else{
        resultado = '"A" não pode ser 0.';
    }
    return resultado;
}

function inserirResultado(){
    let valorA = inputA.value ? parseFloat(inputA.value) : 0;
    let valorB = inputB.value ? parseFloat(inputB.value) : 0;
    let valorC = inputC.value ? parseFloat(inputC.value) : 0;
    outputX.value = calcularEquacao(valorA, valorB, valorC);
}

btn.addEventListener('click', inserirResultado);