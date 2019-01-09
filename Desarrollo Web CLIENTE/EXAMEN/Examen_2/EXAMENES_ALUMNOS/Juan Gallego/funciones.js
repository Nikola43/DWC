
function ValidarNIF_V2(dni){
	var array = new Array(2);
	var numeros = dni.value.substr(0, 8);
	var letra = 0;
	if(dni.value.length > 9){
		letra = dni.value.substr(9, 1);
	}else{
		letra = dni.value.substr(8, 1);
	}
	var num = numeros % 23;
	letraNew ="TRWAGMYFPDXBNJZSQVHLCKET";
	letraNew = letraNew.substr(num, 1);
	if (letraNew != letra){
		array[0]=false;
		array[1]=letraNew;
		array[2]=dni+letraNew;
		return array;
	} 
	array[0]=true;
	array[1]=letra;
	array[2]=dni
	return array; 
}

function formatear(valor,simbolo){
	var coma =",";
	var decimal = false;
	var cont = 0;
	for(i=0; i<valor.length; i++){
		if (coma.indexOf(valor.charAt(i),0)!=-1){
		   decimal = true;
		}
	 }
	 if(decimal == true){
		valor = valor.toFixed(2);
	 }

	 for (j=valor.length-3; j>=0; j--){
		cont++;
		if(cont==3){
			valor += parseInt(numeroCuenta.charAt(j-valor.length-3)+".");
			cont=0;
		}
	}

	valor = valor+simbolo;
	return valor;
	 
}

function Validar_Fecha(sfecha){
	
}