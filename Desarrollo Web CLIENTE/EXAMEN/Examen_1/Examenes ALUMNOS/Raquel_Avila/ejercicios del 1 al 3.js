1.______________________________________________________________

function creaTablaTotal(aTabla,iCol) {  
      	var tabla = document.createElement("table");
		tabla.border = 1;
		var tr, td;
		tabla.appendChild(creaFila(aTabla[iCol], true));
		for (var i = 1; i<aTabla.length; i++)
			tabla.appendChild(creaFila(aTabla[i], false));
		document.getElementById("divtabla").innerHTML = "";
        document.getElementById("divtabla").appendChild(tabla);
		
		return tabla;
      }
	  
function aDeTabla(cualquiercosa){
	var ar2 = [""];
	if(cualquiercosa=""){
	 return ar2;
	}
	else{
		return ar1;
	}
}