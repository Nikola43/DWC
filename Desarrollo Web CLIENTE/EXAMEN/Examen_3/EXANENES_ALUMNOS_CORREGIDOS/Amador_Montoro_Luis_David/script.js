
var peticion = new Request();

window.onload = function(){

var parametros = {
	servicio: "facturas"
}
peticion.cargaContenido("POST","servidor.php",llenaSelect,JSON.stringify(parametros));
document.getElementById("factura").onchange = llenaTabla;
document.getElementById("btAnade").onclick = insertDetalle;
}


function llenaSelect(datos){
	var select = document.getElementById("factura");
	for(var factura of datos){
		var infoFactura = `Factura: ${factura.NUMERO}. Fecha: ${factura.FECHA}`;
		 var opc = new Option(infoFactura);
		 opc.value = factura.ID;
		 select.add(opc)
	}
}



function llenaTabla(idFactura){	

var parametros = {
	servicio: "detalle",
	id: document.getElementById("factura").value
};

peticion.cargaContenido("POST","servidor.php",drawRows,JSON.stringify(parametros));
}

function drawRows(datos){
var cuerpoTabla = document.getElementById("filas_tabla");
cuerpoTabla.innerHTML = "";
var IVAtotal = 0;
var sumaTotal = 0;

for(var detalle of datos){
	var IVA = getIVA(detalle.PRECIO,detalle.TIPO_IVA);
	var total = getTotal(detalle.PRECIO,IVA);
	IVAtotal += parseFloat(IVA*detalle.CANTIDAD);
	sumaTotal += (total*detalle.CANTIDAD);
	cuerpoTabla.innerHTML +=
	`<td>${detalle.ID}</td>
	 <td>${detalle.CANTIDAD}</td>
	 <td>${detalle.CONCEPTO}</td>
	 <td>${detalle.PRECIO}</td>
	 <td>${detalle.TIPO_IVA}</td>
	 <td>${(IVA*detalle.CANTIDAD).toFixed(2)}</td>
	 <td>${(total*detalle.CANTIDAD).toFixed(2)}</td>
	 <td><button class="btndelete" data-iddetalle=${detalle.ID}>Borrar</button></td
	`
}
var botones = cuerpoTabla.querySelectorAll('button');
for(var boton of botones){boton.onclick=deleteDetalle}
asignarTotales(IVAtotal,sumaTotal);

}


function getIVA(precio,tipoIVA){
var IVA = precio * (tipoIVA/100);
return IVA.toFixed(2);
}

function getTotal(precio,IVA){
	precio = Number(precio);
	IVA = Number(IVA);
	var total = (precio+IVA).toFixed(2);
	return total;
}

//Asigna el valor para la suma de de IVA de cada fila y Total para cada fila
function asignarTotales(IVAtotal,precioTotal){
var sumaIva = document.getElementById("Tiva");
var sumaTotal = document.getElementById("Ttotal");
sumaIva.innerHTML = IVAtotal.toFixed(2);
sumaTotal.innerHTML = precioTotal.toFixed(2);
}


function insertDetalle(){
	var select = document.getElementById("factura");
	var parametros = {
		id: select.value,
		cantidad : document.getElementById("cantidad").value,
		concepto: document.getElementById("concepto").value,
		precio: document.getElementById("precio").value,
		tipo_iva: document.getElementById("tipo_iva").value,
		servicio: "anade"
	}
	if(parametros.cantidad == "" ||parametros.concepto == "" || parametros.precio == "" || parametros.tipo_iva == ""){
		alert("asegurate de rellenar el formulario al completo antes de intentar agregar un detalle")
		return false;
	}else{

	console.log(parametros.cantidad.length)
		

	if(select.value == -1){
		alert("Estas tratando de añadir un detalle a una factura inexistente");
		return false;
		}
	else
	peticion.cargaContenido("POST","servidor.php",llenaTabla,JSON.stringify(parametros));

	}
}


function deleteDetalle(){
	var facturaseleccionada = document.getElementById("factura").value;

var parametros = {
	servicio: "borra",
	id: this.dataset.iddetalle,
	idFactura: facturaseleccionada
}


peticion.cargaContenido("POST","servidor.php",llenaTabla,JSON.stringify(parametros));
}