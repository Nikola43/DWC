//-------------------------EJERCICIO 1-------------------------//








//-------------------------EJERCICIO 2-------------------------//

function aDeTabla(tabla){
	if(tabla instanceof String){
		tabla = document.getElementById("tabla");
	}
	
	var fila = tabla.getElementsByTagName("tr");
	var col;
	var array = new Array();
	
	for(var i = 0; i< fila.length; i++){   
		col = fila[i].getElementsByTagName("td"); 
		array[i] = new Array();
		
		for(var j = 0; j< col.length; j++)
			array[i][j] = col[j].innerHTML;
	}
	return array;
}




//-------------------------EJERCICIO 3-------------------------//

function Inserta_Fila(tabla, aFila, npos){
	var fila = document.createElement("tr");
	var col, contenido;
	
	for(var i = 0; i < aFila.length; i++){
		col = document.createElement("td");
		contenido = document.createTextNode(aFila[i]);
		col.appendChild(contenido);
		fila.appendChild(col);
	}
	tabla.insertBefore(fila, tabla.childNodes[npos]);
}