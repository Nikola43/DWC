







window.onload = function asignarFunciones(){
	var botonSuma = document.getElementById("btSolF");
	var btnAgregar = document.getElementById("btAnade");
	var botonSumaV2 = document.getElementById("btSolF_V2");
	var btnCalcular = document.getElementById("btCalcular");
	var btnCalcularEc = document.getElementById("btSolEc");
	botonSuma.addEventListener("click",calculaSuma);
	//botonSumaV2.addEventListener("click",function(){alert("boton suma v2")});
	btnAgregar.addEventListener("click",agregarFraccion);
	btnCalcular.addEventListener("click",calculosFiguras);
	btnCalcularEc.addEventListener("click",calcularEcuacion2Grado);
}


function calculaSuma(){
	var a1 = document.getElementById("a1");
	var a2 = document.getElementById("a2");
	var b1 = document.getElementById("b1");
	var b2 = document.getElementById("b2");
	var r1 = document.getElementById("r1");
	var r2 = document.getElementById("r2");
	var rf = document.getElementById("rf");

	r1.value = a1.value * b2.value;
	r2.value = b1.value * a2.value;
	rf.value = r1.value/r2.value;
}


function agregarFraccion(){
	var bloqueFraccion = document.querySelector(".fraccion");
	var bloqueSuma = document.getElementById("fsuma");
	var contenedorFracciones = document.getElementById("listaFracciones");
	var nuevaSuma = bloqueSuma.cloneNode(true);
	var nuevaFraccion = bloqueFraccion.cloneNode(true);
	contenedorFracciones.appendChild(nuevaSuma);
	contenedorFracciones.appendChild(nuevaFraccion);
               
}



function calculaSumaV2(){
	var fracciones = document.querySelectorAll('.fraccion input');
	for(fracciones in fraccion){

		if(fraccion.id=="a1"){
			var listaSuperior = [];
			listaSuperior.push(fraccion);
		}else if(fraccion.id=="b1"){
			var listaInferior = [];
			listaInferior.push(fraccion);
		}
	}
	var posicionS = 0;
	var posicionI = 1;
	for(i=0;i<listaSuperior.length/2;i){
	listaSuperior[posicionS].value * listaInferior[listaInferior];
	}
}



function calculosFiguras(){
	var base = document.getElementById("base").value;
	var altura = document.getElementById("altura").value;
	var profundidad = document.getElementById("profundidad").value;
	var radio = document.getElementById("radio").value;
	calcularAreaRectangulo(base,altura);
	calcularAreaTriangulo(base,altura);
	calcularAreaCirculo(radio);
	calcularVolumenCilindro(radio,altura);
	calcularVolumenEsfera(radio);
	calcularVolumenCaja(base,altura,profundidad);
}


function calcularAreaRectangulo(base,altura){
var areaRectangulo = document.getElementById("area_rectangulo");
areaRectangulo.value = base * altura;
}

function calcularAreaTriangulo(base,altura){
var areaTriangulo = document.getElementById("area_triangulo");
area_triangulo.value = base*altura/2;
}

function calcularAreaCirculo(radio){
var areaCirculo = document.getElementById("area_circulo");
area_circulo.value = Math.PI * Math.pow(radio,2);
}

function calcularVolumenCaja(base,altura,profundidad){
var calcularVolumenCaja = document.getElementById("volumen_caja");
volumen_caja.value = base * altura * profundidad;
}

function calcularVolumenCilindro(radio,altura){
var calcularVolumenCilindro = document.getElementById("volumen_cilindro");
volumen_cilindro.value = Math.PI * Math.pow(radio,2) * altura;
}

function calcularVolumenEsfera(radio){
var calcularVolumenEsfera = document.getElementById("volumen_esfera");
volumen_esfera.value = 4/3 * Math.PI * Math.pow(radio,3)
}




function calcularEcuacion2Grado(){
var a = parseInt(document.getElementById("a").value);
var b = parseInt(document.getElementById("b").value);
var c = parseInt(document.getElementById("c").value);

calculo1(a,b,c);
calculo2(a,b,c);

}

function calculo1(a,b,c){
var sol_x1 = document.getElementById("sol_x1");
var x1 = -b - Math.sqrt(Math.pow(b,2) -4 *a *c) /2*a;

if(isNaN(x1)){
sol_x1.innerHTML = "No hay solucion para la ecuacion con el valor asignado"
}else{
	sol_x1.innerHTML = x1;
}
}

function calculo2(a,b,c){
var sol_x2 = document.getElementById("sol_x2");
var x2 = -b + Math.sqrt(Math.pow(b,2) -4 *a *c) /2*a;

if(isNaN(x2)){
sol_x2.innerHTML = "No hay solucion para la ecuacion con el valor asignado"
}else{
	sol_x2.innerHTML = x2;
}
}



/*
function creaTablaTotal(aTabla, iCol){
var tabla = document.createElement("table");
tabla.border = 1;
var tr,td;

for(i=0;i<iCol;i++){
tr = document.createElement("tr");
td = document.createElement("td");
td.innerText = ("Columna "+i);
tr.appendChild(td);
tabla.appendChild(tr);
}

return tabla;
}
*/
