window.onload = ()=>{
    const canvas = document.querySelector('#quadro');
    const ctx = canvas.getContext('2d');

    let size = 60;
    let x = Math.floor(Math.random() * ((canvas.width-size) + 1));
    let y = Math.floor(Math.random() * ((canvas.height-size) + 1));

    function draw(){
        ctx.fillStyle='#000';
        ctx.fillRect(0,0,canvas.width,canvas.height);

        ctx.fillStyle='#0f0';
        ctx.fillRect(x,y,size,size);
    } 
    
    draw();

    canvas.onmousemove = (event)=>{
        if(event.offsetX >= x && event.offsetX <= x+size && event.offsetY >= y && event.offsetY <= y+size){
            x = Math.floor(Math.random() * ((canvas.width-size) + 1));
            y = Math.floor(Math.random() * ((canvas.height-size) + 1));
            draw();
        }
    }
    
    function resizeWindow(){
        if(window.innerWidth >= 680){
            canvas.width = canvas.height = 600;
        } else{
            canvas.width = window.innerWidth - 60;
            canvas.height = window.innerHeight - 130;
        }
        draw();
    }
    resizeWindow();
    window.addEventListener('resize', resizeWindow);

}