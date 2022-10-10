window.onload = ()=>{

    const span = document.querySelector('#idade');
    const dataAtual = new Date();
    const dataNasc = new Date('3-7-2005');
    let idade = dataAtual.getFullYear() - dataNasc.getFullYear();
    
    if(dataAtual.getMonth() < dataNasc.getMonth() || dataAtual.getMonth() === dataNasc.getMonth() && dataAtual.getDate() < dataNasc.getDate()){
        idade--;
    }
        
    span.innerText = idade;

}