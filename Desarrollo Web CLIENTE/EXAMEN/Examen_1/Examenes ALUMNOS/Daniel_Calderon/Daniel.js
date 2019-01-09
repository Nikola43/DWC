// Da lo mismo todo esto, no me sale nada bien (y no está completo)... :(

function creaTablaTotal (aTabla, iCol){
	var tabla = document.createElement("table");
	var filas = aTabla.length;
	var columnas = aTabla[1].length; //Supongamos que toda la tabla tiene el mismo numero de columnas
	var contador = 0;
	for (var i = 1; i<=filas; i++){
		var tr = document.createElement("tr");
		tabla.appendChild(tr);
		for (var j=0; j <= columnas; j++){
			td = document.createElement("td");
			td.innerText = aTabla[i][j];
			contador = contador + aTabla[i];
			if (j == iCol) td.innerText = contador;
			tr.appendChild(td);
		}	
	}
	return tabla;
}


function aDeTabla (tabla) {
	if (this.tabla = document.getElementById(""));
	
	return contenidoCeldas;
}




function Inserta_Fila(tabla, aFila, npos){
	var fila = document.createElement("tr");
	var td;
	var tipo = "td";
	for(var i=0; i<aFila.length; i++){
		td = document.createElement(tipo);
		td.innerText = aFila[i];
		fila.appendChild(td);
	}
	return fila;
}	