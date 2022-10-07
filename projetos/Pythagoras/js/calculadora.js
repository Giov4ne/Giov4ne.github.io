const saidaCalc = document.querySelector('#calc-output');

function inserir(n){
    if(saidaCalc.value.length <= 0){
        if(n !== '*' && n !== '/' && n !== '.') saidaCalc.value += n;
    } else if(saidaCalc.value.substr(-1) === '*' || saidaCalc.value.substr(-1) === '/' || saidaCalc.value.substr(-1) === '.'){
        if (n !== '*' && n !== '/' && n !== '.'){
            saidaCalc.value += n;
        }
    } else{
        if(saidaCalc.value !== 'Impossível ÷ por 0'){
            saidaCalc.value += n;
        } else{
            if(n !== '*' && n !== '/' && n !== '.'){
                saidaCalc.value = n;
            }
        }
    }
}

function deletar(){
    saidaCalc.value = saidaCalc.value.substring(0, saidaCalc.value.length-1);
}

function limpar(){
    saidaCalc.value = null;
}

function calcular(expressao){
    expressao = eval(expressao)
    return (!isNaN(expressao) && expressao !== Infinity) ? expressao : 'Impossível ÷ por 0';
}

function exibirResultado(){
    if(saidaCalc.value){
        saidaCalc.value = calcular(saidaCalc.value);
    }
}