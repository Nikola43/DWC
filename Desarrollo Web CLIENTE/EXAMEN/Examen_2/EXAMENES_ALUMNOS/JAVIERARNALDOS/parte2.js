
function ValidarNIF_V2(nif){
	
	var letras="TRWAGMYFPDXBNJZSQVHLCKET";
	var valido=true;
	var arrayDni= array();
    if(nif.length != 9){
          valido=false;
    }
    var dni=nif.substring(0,8);
    var letra=letras[dni%23];
    if (letras[dni%23]==nif[8].toUpperCase()){
		valido=true;
	}else{
		valido=false;
	}
	return arrayDni[valido,letra,nif];
}

function formatear(valor,simbolo){
	
	
}

function Validar_Fecha(sfecha){
	
	
}