window.onload = ()=>{
    const canvas = document.querySelector('#box');
    const ctx = canvas.getContext('2d');

    const radius = 22;
    let x = radius*2;
    let y = canvas.height/2;
    let z = canvas.width-radius*2;
    let w = radius*2;
    let vx = vy = vz = vw = 3;

    function draw(){
        ctx.fillStyle = '#000';
        ctx.fillRect(0,0,canvas.width,canvas.height);

        x+=vx;
        y+=vy;
        z-=vz;
        w-=vw;

        if((x >= canvas.width-radius) || (x <= radius)) vx*=-1;
        if((y >= canvas.height-radius) || (y <= radius)) vy*=-1;

        if((z >= canvas.width-radius) || (z <= radius)) vz*=-1;
        if((w >= canvas.height-radius) || (w <= radius)) vw*=-1;

        if(x == z-radius && z == x+radius && y == w){
            vx*=-1;
            vz*=-1;
        }

        if(y == w-radius && w == y+radius && x == z){
            vy*=-1;
            vw*=-1;
        }

        ctx.fillStyle = '#f00';
        ctx.beginPath();
        ctx.arc(x,y,radius,0,Math.PI*2,false);
        ctx.fill();
        ctx.closePath();

        ctx.fillStyle = '#08f';
        ctx.beginPath();
        ctx.arc(z,w,radius,0,Math.PI*2,false);
        ctx.fill();
        ctx.closePath();
    }

    setInterval(draw, 1);
}


/*window.onload = ()=>{
    const canvas = document.querySelector('#box');
    const ctx = canvas.getContext('2d');

    const radius = 20;
    let x = canvas.width/2;
    let y = radius*2;
    let z = canvas.width/2;
    let w = canvas.height-radius*2;
    let vy = vw = 2;
    let vx = vz = 0;

    function draw(){
        ctx.fillStyle = '#000';
        ctx.fillRect(0,0,canvas.width,canvas.height);

        x+=vx;
        y+=vy;
        z-=vz;
        w-=vw;

        if((x >= canvas.width-radius) || (x <= radius)) vx*=-1;
        if((y >= canvas.height-radius) || (y <= radius)) vy*=-1;

        if((z >= canvas.width-radius) || (z <= radius)) vz*=-1;
        if((w >= canvas.height-radius) || (w <= radius)) vw*=-1;

        if(x == z-radius && z == x+radius && y == w){
            vx*=-1;
            vz*=-1;
        }

        if(y == w-radius && w == y+radius && x == z){
            vy*=-1;
            vw*=-1;
        }

        ctx.fillStyle = '#f00';
        ctx.beginPath();
        ctx.arc(x,y,radius,0,Math.PI*2,false);
        ctx.fill();
        ctx.closePath();

        ctx.fillStyle = '#08f';
        ctx.beginPath();
        ctx.arc(z,w,radius,0,Math.PI*2,false);
        ctx.fill();
        ctx.closePath();
    }

    setInterval(draw, 1);
}*/