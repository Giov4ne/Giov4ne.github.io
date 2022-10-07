window.onload = ()=>{
    const info = document.querySelector('#info');
    info.innerHTML = `
    <h1 id="title">Nave Game</h1>
    <button id="start">Start</button>
    <img src="./img/nave.png" id="naveImg" alt="image" />
    <p id="myInfo">Developed by Giovane.</p>
    `;
    const startButton = document.querySelector('#start');
    startButton.onclick = ()=>{
        
        info.classList.remove('info-on');
        info.classList.add('info-off');

        const canvas = document.querySelector('#jogo');
        const ctx = canvas.getContext('2d');
        const nave = new Image();
        nave.src = './img/nave.png';
        const meteorImg = new Image();
        meteorImg.src = './img/meteor.png';

        let naveX = canvas.width/2 - 35;
        let naveY = canvas.height - 80;
        let naveSize = 70;
        let stars = [];
        for(let i=0; i<70; i++){
            stars.push({
                starX: (Math.floor(Math.random() * (canvas.width + 1))), 
                starY: (Math.floor(Math.random() * (canvas.height + 1)))
            });
        }
        let bullets = [];
        let meteors = [];
        let shots = 0;
        let hits = 0;
        let destroyedMeteors = 0;

        function drawNave(){
            ctx.fillStyle = '#000';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            drawStars();
            if(bullets.length > 0) drawBullets();
            if(meteors.length > 0) drawMeteors();
            ctx.drawImage(nave, naveX, naveY, naveSize, naveSize);
        }

        function drawStars(){
            for(star in stars){
                ctx.fillStyle = '#fff';
                ctx.beginPath();
                ctx.arc(stars[star].starX, stars[star].starY, 0.9, 0, Math.PI*2, false);
                ctx.fill();
                ctx.closePath();
                stars[star].starY += 3;
                if(stars[star].starY >= canvas.height){
                    stars[star].starX = Math.floor(Math.random() * (canvas.width + 1));
                    stars[star].starY = 0;
                }
            }
        }

        function drawBullets(){
            ctx.fillStyle = '#f00';
            for(bullet in bullets){
                ctx.beginPath();
                ctx.arc(bullets[bullet].bulletX, bullets[bullet].bulletY, 5, 0, Math.PI*2, false);
                ctx.fill();
                ctx.closePath();
                bullets[bullet].bulletY -= 6;
                if(bullets[bullet].bulletY <= 0){
                    bullets.splice(bullet, 1);
                }
            }
        }

        function drawMeteors(){
            for(meteor in meteors){
                ctx.drawImage(meteorImg, meteors[meteor].imgX, meteors[meteor].imgY, meteors[meteor].w, meteors[meteor].h);
                meteors[meteor].imgY += 0.8;
                
                if(bullets.length > 0){
                    for(bullet in bullets){
                        if((bullets[bullet].bulletX >= meteors[meteor].imgX+60 && bullets[bullet].bulletX <= meteors[meteor].imgX+120) && (bullets[bullet].bulletY <= meteors[meteor].imgY+50 && bullets[bullet].bulletY >= meteors[meteor].imgY+20)){
                            meteors[meteor].health--;
                            bullets.splice(bullet, 1);
                            hits++;
                        }
                    }
                }

                if(meteors[meteor].health <= 0){
                    meteors.splice(meteor, 1);
                    destroyedMeteors++;
                }

                if((meteors[meteor].imgY >= canvas.height-60) || (naveX-35 >= meteors[meteor].imgX-30 && naveX+35 <= meteors[meteor].imgX+140 && naveY-40 >= meteors[meteor].imgY-70 && naveY+40 <= meteors[meteor].imgY+85)){
                    info.classList.remove('info-off');
                    info.classList.add('info-on');
                    info.innerHTML = `
                    <h1 id="title2">Game Over!!</h1>
                    <button id="restart">Restart</button>
                    <span class="points">${shots} shots</span>
                    <span class="points">${hits} hits</span>
                    <span class="points">${destroyedMeteors} meteors destroyed</span>
                    <img src="./img/nave.png" id="naveImgRestart" alt="image" />
                    `;
                    const restartButton = document.querySelector('#restart');
                    restartButton.onclick = ()=> location.reload();
                    clearInterval(gameInterval);
                }
            }
        }

        canvas.onmousemove = (event)=>{
            naveX = event.offsetX-35;
            naveY = event.offsetY-40;
        }

        document.onmousedown = ()=>{
            bullets.push({bulletX: naveX+34, bulletY: naveY});
            shots++;
        }

        function pushMeteor(){
            meteors.push({w: 180, h: 100, imgX: Math.floor(Math.random() * (canvas.width + 1))-90, imgY: -50, health: 3});
        }

        nave.addEventListener('load', drawNave);
        let gameInterval = setInterval(drawNave, 10);
        setInterval(pushMeteor, 1000);

    }
    
}