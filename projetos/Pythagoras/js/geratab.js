const inputTab = document.querySelector('#input-tab');
const geraBtn = document.querySelector('#gera-btn');
const geraUmADezBtn = document.querySelector('#gera-1-10-btn');
const titleTab = document.querySelector('#title-tabuada');
const outputTab = document.querySelector('#tabuada-output');

function geraTabuada(){
    if(inputTab.value){
        inputTab.value = parseFloat(inputTab.value);
        titleTab.innerText = `Tabuada de ${inputTab.value}`;
        let linhas = '';
        for(let i=1; i<=10; i++){
            linhas += `
                <tr>
                    <td>${inputTab.value}</td>
                    <td>x</td>
                    <td>${i}</td>
                    <td>=</td>
                    <td>${inputTab.value * i}</td>
                </tr>
            `; 
        }
        let tabela = `<table class="tabelas">${linhas}</table>`;
        outputTab.innerHTML = tabela;
    }
}

function geraTabuadaDe1a10(){
    titleTab.innerHTML = 'Tabuada de 1 a 10';
    let tabelas = '';
    for(let i=1; i<=10; i++){
        let linhas = '';
        for(let r=1; r<=10; r++){
            linhas += `
                <tr>
                    <td>${i}</td>
                    <td>x</td>
                    <td>${r}</td>
                    <td>=</td>
                    <td>${i*r}</td>
                </tr>
            `; 
        }
        tabelas += `<table class="tabelas">${linhas}</table>`;
    }
    outputTab.innerHTML = tabelas;
}

geraBtn.addEventListener('click', geraTabuada);
geraUmADezBtn.addEventListener('click', geraTabuadaDe1a10);