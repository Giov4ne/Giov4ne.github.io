// GETTING STATES AND CITIES

const url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';
const state = document.querySelector('#select-state');
const city = document.querySelector('#select-city');

window.addEventListener('load', async ()=>{
    const request = await fetch(url);
    const response = await request.json();
    const emptyOption = document.createElement('option');
    emptyOption.toggleAttribute('disabled');
    emptyOption.toggleAttribute('selected');
    state.appendChild(emptyOption);
    response.forEach((uf)=>{
        const option = document.createElement('option');
        option.value = uf.sigla;
        option.innerText = uf.sigla;
        state.appendChild(option);
    });
});

state.addEventListener('change', async ()=>{
    const urlCities = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state.value}/municipios`;
    const request = await fetch(urlCities);
    const response = await request.json();
    let options = '';
    response.forEach((city)=>{
        options += `<option value="${city.nome}">${city.nome}</option>`;
    });
    city.innerHTML = options;
});



// VALIDATION

const form = document.querySelector('#form');
const title = document.querySelector('#title');
const firstName = document.querySelector('#name');
const lastName = document.querySelector('#lastname');
const uid = document.querySelector('#uid');
const male = document.querySelector('#male');
const female = document.querySelector('#female');
const email = document.querySelector('#email');
const cpf = document.querySelector('#cpf');
const date = document.querySelector('#date');
const submitBtn = document.querySelector('#submit-btn');
const container = document.querySelector('#container');
const confirmBox = document.querySelector('#confirm');

function validateItems(item){
    item.setCustomValidity('');
    item.checkValidity();

    if(item == cpf){
        let numCpf = cpf.value.replace(/[^0-9]/g,"");
        if(validateCpf(numCpf)){
            cpf.setCustomValidity('');
        } else{
            cpf.setCustomValidity('Número de CPF inválido.');
        }
    } 
    
    if(item == date){
        let age = calcAge();
        if(age < 0 || age > 130){
            date.setCustomValidity('Data inválida!');
        }
    }
}

function calcAge(){
    const birthDate = new Date(date.value);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    if(today.getMonth() < birthDate.getMonth() || today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate()){
        age--;
    }
    return age;
}

function validateCpf(cpf){
    var number, digits, sum, i, result, equal_digits;
    equal_digits = 1;
    if (cpf.length < 11)
        return false;
    for (i = 0; i < cpf.length - 1; i++)
        if (cpf.charAt(i) != cpf.charAt(i + 1)){
            equal_digits = 0;
            break;
        }
    if (!equal_digits){
        number = cpf.substring(0,9);
        digits = cpf.substring(9);
        sum = 0;
        for (i = 10; i > 1; i--)
            sum += number.charAt(10 - i) * i;
        result = sum % 11 < 2 ? 0 : 11 - sum % 11;
        if (result != digits.charAt(0))
            return false;
        number = cpf.substring(0,10);
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

function maskCpf(){
    if(cpf.value.length === 3 || cpf.value.length === 7){
        cpf.value += '.';
    } else if(cpf.value.length === 11){
        cpf.value += '-';
    }
}

firstName.addEventListener('input', ()=>validateItems(firstName));
lastName.addEventListener('input', ()=>validateItems(lastName));
uid.addEventListener('input', ()=>validateItems(uid));
email.addEventListener('input', ()=>validateItems(email));
cpf.addEventListener('input', ()=>validateItems(cpf));
cpf.addEventListener('keypress', maskCpf);
date.addEventListener('input', ()=>validateItems(date));
state.addEventListener('input', ()=>validateItems(state));
city.addEventListener('input', ()=>validateItems(city));

firstName.addEventListener('invalid', ()=>{
    if(!firstName.value){
        firstName.setCustomValidity('Digite seu nome.');
    } else if(firstName.value.length < 2){
        firstName.setCustomValidity('Seu nome precisa ter no mínimo 2 caracteres.');
    } else{
        firstName.setCustomValidity('Seu nome não pode conter espaços, números e nem caracteres especiais.');
    }
});

lastName.addEventListener('invalid', ()=>{
    if(!lastName.value){
        lastName.setCustomValidity('Digite seu sobrenome.');
    } else if(lastName.value.length < 2){
        lastName.setCustomValidity('Seu sobrenome precisa ter no mínimo 2 caracteres.');
    } else{
        lastName.setCustomValidity('Seu sobrenome não pode conter abreviações, números e nem caracteres especiais.')
    }
});

uid.addEventListener('invalid', ()=>{
    if(!uid.value){
        uid.setCustomValidity('Insira um apelido.');
    } else if(uid.value.length < 3){
        uid.setCustomValidity('Seu apelido deve conter pelo menos 3 caracteres.');
    } else if(uid.value.length > 16){
        uid.setCustomValidity('Seu apelido não pode conter mais que 16 caracteres.');
    } else{
        uid.setCustomValidity('Seu apelido não pode conter caracteres especiais.');
    }
});

email.addEventListener('invalid', ()=>{
    if(!email.value){
        email.setCustomValidity('Insira seu email.');
    }
});

cpf.addEventListener('invalid', ()=>{
    if(!cpf.value){
        cpf.setCustomValidity('Insira seu número de CPF.');
    }
});

date.addEventListener('invalid', ()=>{
    if(!date.value){
        date.setCustomValidity('Insira sua data de nascimento.');
    }
});

state.addEventListener('invalid', ()=>{
    if(!state.value){
        state.setCustomValidity('Selecione seu estado.');
    }
});

city.addEventListener('invalid', ()=>{
    if(!city.value){
        city.setCustomValidity('Selecione sua cidade.');
    }
});



// CRUD

const users = readUsers();

function createUser(user){
    users.push(user);
    localStorage.setItem('db_users', JSON.stringify(users));
    updateTables();
}

function readUsers(){
    return JSON.parse(localStorage.getItem('db_users')) ?? [];
}

function updateUser(index){
    const user = users[index];
    title.innerText = 'Editar Usuário';
    submitBtn.value = 'Editar';
    firstName.value = user.firstname;
    lastName.value = user.lastname;
    uid.value = user.username;
    if(user.gender === 'Masculino'){
        if(male.checked === false){
            male.toggleAttribute('checked');
        }
    } else if(user.gender === 'Feminino'){
        if(female.checked === false){
            female.toggleAttribute('checked');
        }
    } else{
        if(male.checked){
            male.removeAttribute('checked');
        } else if(female.checked){
            female.removeAttribute('checked');
        }
    }
    email.value = user.email;
    cpf.value = user.cpf;
    date.value = user.birthdate;/* 
    state.value = user.state;
    city.value = user.city; */
    window.scrollTo({top: 0, behavior: 'smooth'});
    form.removeEventListener('submit', callCreateUserFunction);
    form.onsubmit = ()=>{    
        users[index] = {
            firstname: firstName.value,
            lastname: lastName.value,
            username: uid.value,
            gender: getGender(),
            email: email.value,
            cpf: cpf.value,
            birthdate: date.value,
            age: calcAge(),
            state: state.value,
            city: city.value
        };
        localStorage.setItem('db_users', JSON.stringify(users));
        updateTables();
        title.innerText = 'Novo Usuário';
        submitBtn.value = 'Cadastrar';
    }
}

function deleteUser(index){
    confirmBox.innerHTML = `
        <h2 id="title2">Deseja realmente excluir "${users[index].firstname}"?</h2>
        <div>    
            <button id="yes">Sim</button>
            <button id="cancel">Cancelar</button>
        </div>
    `;
    confirmBox.classList.remove('confirm-off');
    confirmBox.classList.add('confirm-on');
    document.getElementById('yes').onclick = ()=>{
        users.splice(users[index], 1);
        localStorage.setItem('db_users', JSON.stringify(users));
        updateTables();
        confirmBox.classList.remove('confirm-on');
        confirmBox.classList.add('confirm-off');
    }
    document.getElementById('cancel').onclick = ()=>{
        confirmBox.classList.remove('confirm-on');
        confirmBox.classList.add('confirm-off');
    }
}

function editDelete(e){
    if(e.target.type === 'submit' || e.target.type === 'button'){
        const [action, index] = e.target.dataset.action.split('-');
        if(action === 'edit'){
            updateUser(index);
        } else{
            deleteUser(index);
        }
    }
}

container.addEventListener('click', editDelete);

function updateTables(){
    container.innerHTML = '';
    let index = 0;
    users.forEach(user => createTable(user, index++));
}

function createTable(user, index){
    const newTable = document.createElement('table');
    newTable.innerHTML = `
        <tr>
            <th>Nome completo</th>
            <td>${user.firstname} ${user.lastname}</td>
        </tr>
        <tr>
            <th>Apelido</th>
            <td>${user.username}</td>
        </tr>
        <tr>
            <th>Gênero</th>
            <td>${user.gender}</td>
        </tr>
        <tr>
            <th>Email</th>
            <td>${user.email}</td>
        </tr>
        <tr>
            <th>CPF</th>
            <td>${user.cpf}</td>
        </tr>
        <tr>
            <th>Data de nascimento</th>
            <td>${user.birthdate}</td>
        </tr>
        <tr>
            <th>Idade</th>
            <td>${user.age}</td>
        </tr>
        <tr>
            <th>Estado</th>
            <td>${user.state}</td>
        </tr>
        <tr>
            <th>Cidade</th>
            <td>${user.city}</td>
        </tr>
        <tr>
            <td colspan="2">
                <button class="edit" data-action="edit-${index}">Editar</button>
                <button class="delete" data-action="delete-${index}">Excluir</button>
            </td>
        </tr>
    `;
    container.appendChild(newTable);
}

form.addEventListener('submit', callCreateUserFunction);

function callCreateUserFunction(){
    createUser({
        firstname: firstName.value,
        lastname: lastName.value,
        username: uid.value,
        gender: getGender(),
        email: email.value,
        cpf: cpf.value,
        birthdate: date.value,
        age: calcAge(),
        state: state.value,
        city: city.value
    });
}

function getGender(){
    if(male.checked){
        return 'Masculino';
    } else if(female.checked){
        return 'Feminino';
    }
    return 'Não especificado';
}

updateTables();