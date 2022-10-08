class Usuario{
    constructor(nome, sobrenome, apelido, email){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.apelido = apelido;
        this.email = email;
    }

    criarCard(){
        return `
            <img src="../imgs, icons/fundo-card.png" id="fundo-card" alt="fundo" />
            <img src="../imgs, icons/img-pefil.png" id="img-perfil" alt="imagem de perfil" />
            <div id="card-content">
                <h3 class="div-titles2">${this.apelido}</h3>
                <h4 class="div-titles3">${this.nome} ${this.sobrenome}</h4>
                <h4 class="div-titles3"><a href="mailto:${this.email}" id="link-email">${this.email}</a></h4>
            </div>
        `;
    }
}

const user = new Usuario(
    localStorage.getItem('nome'),
    localStorage.getItem('sobrenome'),
    localStorage.getItem('apelido'),
    localStorage.getItem('email')
);

document.querySelector('#card').innerHTML = user.criarCard();