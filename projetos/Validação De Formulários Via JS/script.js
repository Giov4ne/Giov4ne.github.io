const nome = document.getElementById('nome');
const sobren = document.getElementById('sobrenome');
const apelido = document.getElementById('apelido');
const email = document.getElementById('mail');
const psw = document.getElementById('senha');
const confirmpsw = document.getElementById('confirmsenha');
const tel = document.getElementById('fone');
const cpf = document.getElementById('cpf');
const dtnasc = document.getElementById('nascinput');
const term = document.getElementById('termos');
const gen = document.getElementById('genero');

function validarCampos(campo){
    campo.setCustomValidity('');
    campo.checkValidity();

    if(campo == confirmpsw){
        if(confirmpsw.value !== psw.value){
            confirmpsw.setCustomValidity('As senhas não correspondem.');
        } else{
            confirmpsw.setCustomValidity('');
        }
    }

    if(campo == cpf){
        let numCpf = cpf.value.replace(/[^0-9]/g,"");
        if(validarNumCpf(numCpf)){
            cpf.setCustomValidity('');
        } else{
            cpf.setCustomValidity('Número de CPF inválido.');
        }
    }

    if(campo == dtnasc){
        let dataAtual = new Date();
        let dataNasc = new Date(dtnasc.value);
        let idade = dataAtual.getFullYear() - dataNasc.getFullYear();
        let mes = dataAtual.getMonth() - dataNasc.getMonth();
        let diaHoje = dataAtual.getDate();
        let diaNasc = dataNasc.getDate();
        if(mes < 0 || (mes == 0 && diaHoje < diaNasc)){
            idade--;
        }
        if(idade >= 0){
            if(idade < 12){
                dtnasc.setCustomValidity('Não é permitido idade abaixo de 12, entretanto, é permitido que você minta sua idade.');
            } else if(idade > 130){
                dtnasc.setCustomValidity(`Data inválida, você não deve ter ${idade} anos.`);
            }
        } else{
            dtnasc.setCustomValidity(`Data inválida, você ainda precisa nascer.`);
        }
    }
}

function validarNumCpf(cpfNumber){
    var number, digits, sum, i, result, equal_digits;
    equal_digits = 1;
    if (cpfNumber.length < 11)
        return false;
    for (i = 0; i < cpfNumber.length - 1; i++)
        if (cpfNumber.charAt(i) != cpfNumber.charAt(i + 1)){
            equal_digits = 0;
            break;
        }
    if (!equal_digits){
        number = cpfNumber.substring(0,9);
        digits = cpfNumber.substring(9);
        sum = 0;
        for (i = 10; i > 1; i--)
            sum += number.charAt(10 - i) * i;
        result = sum % 11 < 2 ? 0 : 11 - sum % 11;
        if (result != digits.charAt(0))
            return false;
        number = cpfNumber.substring(0,10);
        sum = 0;
        for (i = 11; i > 1; i--)
            sum += number.charAt(11 - i) * i;
        result = sum % 11 < 2 ? 0 : 11 - sum % 11;
        if (result != digits.charAt(1))
            return false;
        return true;
    }
    else
        return false;
}

function pontilhaCpf(){
    let numCpf = cpf.value;
    if(numCpf.length === 3 || numCpf.length === 7){
        cpf.value += '.';
    } else if(numCpf.length === 11){
        cpf.value += '-';
    }
}

function pontilhaTel(){
    let numTel = tel.value;
    if(numTel.length == 2){
        tel.value = '('+numTel+') ';
    }
    if(numTel.length == 9){
        tel.value += '-';
    }
    if(numTel.length == 15 && numTel[9] == '-'){
        tel.value = numTel.substring(0,9)+numTel[10]+'-'+numTel.substring(11);
    }
}

function mudaCorGen(){
    if(gen.value !== ''){
        gen.style.borderBottom="1px solid #10ad10";
    }
}

nome.addEventListener('input', function(){validarCampos(nome)});
sobren.addEventListener('input', function(){validarCampos(sobren)});
apelido.addEventListener('input', function(){validarCampos(apelido)});
email.addEventListener('input', function(){validarCampos(email)});
psw.addEventListener('input', function(){validarCampos(psw)});
confirmpsw.addEventListener('input', function(){validarCampos(confirmpsw)});
tel.addEventListener('input', function(){validarCampos(tel)});
cpf.addEventListener('input', function(){validarCampos(cpf)});
dtnasc.addEventListener('input', function(){validarCampos(dtnasc)});
term.addEventListener('load', function(){validarCampos(term)});
gen.addEventListener('change', mudaCorGen);

nome.addEventListener('invalid', function(){
    if(nome.value === ''){
        nome.setCustomValidity('Digite seu primeiro nome.');
    } else{
        nome.setCustomValidity('Seu nome não pode conter espaços, números e nem caracteres especiais, e precisa ter pelo menos 2 caracteres.');
    }
});

sobren.addEventListener('invalid', function(){
    if(sobren.value === ''){
        sobren.setCustomValidity('Digite seu sobrenome.');
    } else{
        sobren.setCustomValidity('Seu sobrenome não pode conter abreviações, números e nem caracteres especiais, e precisa ter pelo menos 2 caracteres.');
    }
});

apelido.addEventListener('invalid', function(){
    if(apelido.value === ''){
        apelido.setCustomValidity('Escolha um apelido.');
    } else if(apelido.value.length < 3){
        apelido.setCustomValidity('Seu apelido deve conter pelo menos 3 caracteres.');
    } else if(apelido.value.length > 16){
        apelido.setCustomValidity('Seu apelido não pode conter mais que 16 caracteres.');
    } else{
        apelido.setCustomValidity('Seu apelido não pode conter caracteres especiais.');
    }
});

email.addEventListener('invalid', function(){
    if(email.value === ''){
        email.setCustomValidity('Insira seu endereço de email.');
    }
});

psw.addEventListener('invalid', function(){
    if(psw.value === ''){
        psw.setCustomValidity('Insira uma senha.');
    } else{
        psw.setCustomValidity('Sua senha deve conter pelo menos 8 caracteres, uma letra maiúscula, uma letra minúscula e um número.');
    }
});

confirmpsw.addEventListener('invalid', function(){
    if(confirmpsw.value === ''){
        confirmpsw.setCustomValidity('Não esqueça de confirmar sua senha.');
    }
});

tel.addEventListener('invalid', function(){
    if(tel.value === ''){
        tel.setCustomValidity('Insira seu número de telefone.');
    } else if(tel.value.length < 14){
        tel.setCustomValidity('Seu número de telefone deve conter pelo menos 14 caracteres.');
    }
});

cpf.addEventListener('invalid', function(){
    if(cpf.value === ''){
        cpf.setCustomValidity('Insira seu número de CPF.');
    }
});

dtnasc.addEventListener('invalid', function(){
    if(dtnasc.value === ''){
        dtnasc.setCustomValidity('Insira sua data de nascimento.');
    }
});

term.addEventListener('invalid', function(){
    term.setCustomValidity('Daqui você não passa sem aceitar nossos termos.');
});

term.addEventListener('click', function(){
    term.setCustomValidity('');
});

cpf.addEventListener('input', pontilhaCpf);
tel.addEventListener('input', pontilhaTel);