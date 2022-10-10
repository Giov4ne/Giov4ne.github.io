window.onload = ()=>{
    const canvas = document.querySelector('#campo');
    const ctx = canvas.getContext('2d');
    const tela = document.querySelector('#tela');
    tela.innerHTML = `
    <div id="inicio">
        <h1 id="titulo">Snake Game</h1>
        <button id="botao">Start</button>
        <img src="./img/snake.png" alt="snake" id="cobraimg" />
    </div>
    `;
    const botao = document.querySelector('#botao');

    botao.onmousedown = ()=>{

        document.addEventListener('keydown', andar);
        setInterval(jogo, 60);
        
        let velocidade = 1;
        let velX = 0;
        let velY = 0;
        let pontoX = 10;
        let pontoY = 12;
        let tamBloco = 15;
        let qtdBlocos = 40;
        let macaX = 20;
        let macaY = 20;
        let rastro = [];
        let cauda = 5;
        let pontuacao = 0;

        tela.innerHTML = `<p id="pontuacao">Score: ${pontuacao}</p>`;

        function jogo(){
            ctx.fillStyle = '#056005';
            ctx.fillRect(0,0,canvas.width,canvas.height);

            pontoX += velX;
            pontoY += velY;

            ctx.fillStyle = '#f00';
            ctx.strokeStyle = '#000';
            ctx.fillRect(macaX*tamBloco, macaY*tamBloco, tamBloco, tamBloco);
            ctx.strokeRect(macaX*tamBloco, macaY*tamBloco, tamBloco, tamBloco);
            
            ctx.fillStyle = '#00fb00';
            ctx.strokeStyle = '#222';
            for(let i=0; i<rastro.length; i++){
                ctx.fillRect(rastro[i].x*tamBloco, rastro[i].y*tamBloco, tamBloco, tamBloco);
                ctx.strokeRect(rastro[i].x*tamBloco, rastro[i].y*tamBloco, tamBloco, tamBloco);
                if((rastro[i].x == pontoX && rastro[i].y == pontoY) || (pontoX >= qtdBlocos || pontoX < 0 || pontoY >= qtdBlocos || pontoY < 0)){
                    if(velX !== 0 || velY !== 0){
                        velX = 0;
                        velY = 0;
                        tela.innerHTML = `
                        <div id="fim">
                            <h1 id="titulo-fim">Game Over!!</h1>
                            <p id="pontuacao">Score: ${pontuacao}</p>
                            <button id="botao-fim">Restart</button>
                            <img src="./img/snake.png" alt="snake" id="cobraimg-fim" />
                        </div>
                        `;
                        const botaoFim = document.querySelector('#botao-fim');
                        botaoFim.onmousedown = ()=>{
                            location.reload();
                        }
                    }
                }
            }

            rastro.push({x:pontoX, y:pontoY});

            while(rastro.length > cauda){
                rastro.shift();
            }

            if(pontoX == macaX && pontoY == macaY){
                cauda++;
                pontuacao++;
                tela.innerHTML = `<p id="pontuacao">Score: ${pontuacao}</p>`;
                macaX = Math.floor(Math.random()*qtdBlocos);
                macaY = Math.floor(Math.random()*qtdBlocos);
            }
        }
        
        function andar(evento){
            switch(evento.keyCode){
                case 37:
                    if(velX !== velocidade){
                        velX = -velocidade;
                        velY = 0;
                    }
                    break;
                case 38:
                    if(velY !== velocidade){
                        velX = 0;
                        velY = -velocidade;
                    }
                    break;
                case 39:
                    if(velX !== -velocidade){
                        velX = velocidade;
                        velY = 0;
                    }
                    break;
                case 40:
                    if(velY !== -velocidade){
                        velX = 0;
                        velY = velocidade;
                    }
                    break;
                case 65:
                    if(velX !== velocidade){
                        velX = -velocidade;
                        velY = 0;
                    }
                    break;
                case 87:
                    if(velY !== velocidade){
                        velX = 0;
                        velY = -velocidade;
                    }
                    break;
                case 68:
                    if(velX !== -velocidade){
                        velX = velocidade;
                        velY = 0;
                    }
                    break;
                case 83:
                    if(velY !== -velocidade){
                        velX = 0;
                        velY = velocidade;
                    }
                    break;
            }
        }     
    }
}