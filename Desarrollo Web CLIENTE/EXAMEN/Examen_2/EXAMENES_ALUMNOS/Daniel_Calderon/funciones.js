function ValidarNIF_V2(nif) {
	var letras = "TRWAGMYFPDXBNJZSQVHLCKET";
	var validacion = new Array;
	
	if (nif.charAt(8) == "-") {
		var numero= nif.substring(0,9);
		var letraNIF= nif.substring(9);
		var calcNumNIF=numero%23;
		
		if (nif.length!= 10) validacion.valido = false;
		else {
			if (letras.charAt(calcNumNIF) != letraNIF.toUpperCase()) validacion.valido = false;
			else validacion.valido = true;
		}		
		validacion.caracterCorrecto = letras.charAt(calcNumNIF);
		validacion.NIFCorrecto = numero+"-"+letras.charAt(calcNumNIF);
		console.log(validacion);
		return validacion;
	}
	else { //Suponiendo que no hay guión y sólo hay 8 números y una letra.
		var numero= nif.substring(0,8);
		var letraNIF= nif.substring(8);
		var calcNumNIF=numero%23;
		
		if (nif.length!= 9) validacion.valido = false;
		else {
			if (letras.charAt(calcNumNIF) != letraNIF.toUpperCase()) validacion.valido = false;
			else validacion.valido = true;
		}		
		validacion.caracterCorrecto = letras.charAt(calcNumNIF);
		validacion.NIFCorrecto = numero+letras.charAt(calcNumNIF);
		console.log(validacion);
		return validacion;
	}
}	

	
	