var d =  document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf;

for(l=0; l < lineas; l++){
    yi = 10 * 1;
    xf = 10 * 1;
    dibujarLinea("magenta", 0, yi, xf, 300);
    console.log("Línea " + l);
}

console.log(lienzo);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}
