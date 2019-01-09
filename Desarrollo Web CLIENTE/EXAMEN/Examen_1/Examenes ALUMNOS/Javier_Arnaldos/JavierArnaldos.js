
function CreaTablaTotal(aTabla,iCol){
	 
      	var tabla = document.createElement("table");
		tabla.border = 1;
		var tr, td;
		var suma=0;
		if(iCol <= aTabla.length && iCol >= 0){//vamos recorriendo el array bidimensional.
			for (var i = 0; i<=aTabla.length; i++){
			
					tr = document.createElement("tr");//creamos el elemento tr.
					tabla.appendChild(tr);//lo introducimos en la tabla.
				for(var j= 0;j <= aTabla.length;j++){
					
					td = document.createElement("td");
					if(iCol == j){
						td.innerText =suma+aTabla[j];
						
					}
					else{
						td.innerText =" ";
					}
					tr.appendChild(td);
				}
			}
		}
}

function aDeTabla(tabla){
	var array=[];
	
	if(tabla == " "){
		return array;
	}
	else{
		if((tabla)){
			
			var tab=documentElementById("tabla");
			for(i=0;i<tab.length;i++){
				array+=array[i];
			}
			return array;
		}
		else{
			for(i=0;i<tabla;i++){
				array+=array[i];
			}
			return array;
		}
	}
}