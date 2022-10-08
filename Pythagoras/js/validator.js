const form = document.querySelector('#formulario');
const nome = document.querySelector('#nome');
const sobrenome = document.querySelector('#sobrenome');
const apelido = document.querySelector('#uid');
const email = document.querySelector('#email');
const senha = document.querySelector('#pwd');
const confirmSenha = document.querySelector('#confirm-pwd');

function validarCampos(campo){
    campo.setCustomValidity('');
    campo.checkValidity();

    if(campo === confirmSenha){
        if(confirmSenha.value !== senha.value){
            confirmSenha.setCustomValidity('As senhas não correspondem.');
        } else{
            confirmSenha.setCustomValidity('');
        }
    }
}

nome.addEventListener('input', function(){ validarCampos(nome) });
sobrenome.addEventListener('input', function(){ validarCampos(sobrenome) });
apelido.addEventListener('input', function(){ validarCampos(apelido) });
email.addEventListener('input', function(){ validarCampos(email) });
senha.addEventListener('input', function(){ validarCampos(senha) });
confirmSenha.addEventListener('input', function(){ validarCampos(confirmSenha) });

nome.addEventListener('invalid', ()=>{
    if(nome.value.length === 0){
        nome.setCustomValidity('Digite seu nome.');
    } else if(nome.value.length < 2){
        nome.setCustomValidity('Seu nome precisa conter pelo menos 2 caracteres.');
    } else{
        nome.setCustomValidity('Seu nome não pode conter espaços, números e nem caracteres especiais.');
    }
});

sobrenome.addEventListener('invalid', ()=>{
    if(sobrenome.value.length === 0){
        sobrenome.setCustomValidity('Digite seu sobrenome.');
    } else if(sobrenome.value.length < 2){
        sobrenome.setCustomValidity('Seu sobrenome precisa conter pelo menos 2 caracteres.');
    } else{
        sobrenome.setCustomValidity('Seu sobrenome não pode conter abreviações, números e nem caracteres especiais.');
    }
});

apelido.addEventListener('invalid', ()=>{
    if(apelido.value.length === 0){
        apelido.setCustomValidity('Escolha um apelido.');
    } else if(apelido.value.length < 3){
        apelido.setCustomValidity('Seu apelido deve conter pelo menos 3 caracteres.');
    } else if(apelido.value.length > 16){
        apelido.setCustomValidity('Seu apelido não pode conter mais que 16 caracteres.');
    } else{
        apelido.setCustomValidity('Seu apelido não pode conter caracteres especiais.');
    }
});

email.addEventListener('invalid', ()=>{
    if(email.value.length === 0){
        email.setCustomValidity('Insira seu email.');
    }
});

senha.addEventListener('invalid', ()=>{
    if(senha.value.length === 0){
        senha.setCustomValidity('Insira uma senha.');
    } else{
        senha.setCustomValidity('Sua senha deve conter pelo menos 8 caracteres, e no mínimo uma letra maiúscula, uma letra minúscula e um número.');
    }
});

confirmSenha.addEventListener('invalid', ()=>{
    if(confirmSenha.value.length === 0){
        confirmSenha.setCustomValidity('Confirme sua senha.');
    }
});

form.addEventListener('submit', proxPagina);

function proxPagina(){

    localStorage.setItem('nome', nome.value);
    localStorage.setItem('sobrenome', sobrenome.value);
    localStorage.setItem('apelido', apelido.value);
    localStorage.setItem('email', email.value);
    
    document.write(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="../css/style.css" />
            <title>Direcionando...</title>
        </head>
        <body>
            <div id="loading-container">
                <div id="loading"></div>
            </div>
        </body>
        </html>
    `);

    setTimeout(()=>{
        window.location.assign('./conta.html');
    }, 4000);

}