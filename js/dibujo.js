const dibujarCanvas = () => {
    let canvas = document.getElementById('miCanvas');
    let ctx = canvas.getContext("2d");

    ctx.fillStyle = "rgb(200,0,0)";
    ctx.fillRect(10, 10, 55, 50);
}

const dibujarCanvas2 = () => {
    var canvas = document.getElementById('miCanvas2');
    var contexto = canvas.getContext('2d');
    // a. Triángulo abierto
    contexto.beginPath();
    contexto.moveTo(50, 50);
    contexto.lineTo(50, 150);
    contexto.lineTo(150, 150);
    contexto.stroke();
    // b. Triángulo cerrado con  relleno
    contexto.beginPath();
    contexto.moveTo(200, 50);
    contexto.lineTo(200, 150);
    contexto.lineTo(300, 150);
    contexto.fill();
    // c. Triángulo  cerrada sin relleno
    contexto.beginPath();
    contexto.moveTo(50, 200);
    contexto.lineTo(50, 300);
    contexto.lineTo(150, 300);
    contexto.closePath();
    contexto.stroke();
}

dibujarCanvas();
dibujarCanvas2();