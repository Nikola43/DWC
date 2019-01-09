

//  En este fichero recogeremos nuestras utilidades javascript.

//  CAJAS DE TEXTO (<input type="text" ...... >):
  //  e => Es el parámetro del evento onkeypress.
  

//pasa solo letras
function SoloLetrasyEspacios(e){
	var evento=e || windows.event;
	var c= evento.charCode || evento.keyCode;
	
  if (c>=97 && c<=122|| c>=65 && c<=90 || c==32){
	return true;
  }
  else{
	return false;
  }
  
 }
 
//Pasa a mayusuclas
 function aMayuscula(e) {
	 
         this.value=this.value.toUpperCase();
    }
	
	
//funcion de DNI 
function esDNI (dni){
	var letras = "TRWAGMYFPDXBNJZSQVHLCKET";
	var numero=dni.substring(0,8);
	var letraDni=dni.substring(8);
	if (numero.length!=8)
		return false;
	else {
		letraCalculada=numero%23;
		if(letras.charAt(letraCalculada)!=letraDni)
			return false;
	}
	return true;
}



//funcion solo numeros
function soloNumeros(eve){
		var evento=eve || windows.event;
		var codigoCaracter = evento.charCode || evento.keyCode;
		
	    if(codigoCaracter >=48 && codigoCaracter <= 57 || codigoCaracter == 8 || codigoCaracter == 46 || (codigoCaracter >= 37 && codigoCaracter <= 40)) {
			return true;
		}
		else
			return false;
	
}

//Solo numeros y letras
function PermiteSoloNumerosYLetras(e) {
    var c = e.charCode || window.event.keyCode;
    if (((c >= 48) && (c <= 57)) || ((c >= 97) && (c <= 122)) || ((c >= 65) && (c <= 90))){
        return true;
    }
    else {
        return false;
    }
}

//numeros, letras y caracteres clave pudiendo repetir caracteres clave
function NumerosLetrasYCaracClaveRepitiendo(e) {
    var c = e.charCode || window.event.keyCode;
    if (((c >= 48) && (c <= 57)) || ((c >= 65) && (c <= 90)) || ((c >= 97) && (c <= 122)) || (c == 64) || (c == 95) || (c == 36) || (c == 37) || (c == 63) || (c == 35) || (c == 42) || (c == 38))
        return true;
    
    else 
        return false;
    
}


