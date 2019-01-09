//  Fichero con utilidades javascript.
  //  e => Es el parámetro del evento onkeypress.
  
function PermiteSoloLetrasYEspacios(e) {
	var codCha = e.charCode || e.keyCode;
	if ((codCha>=65 && codCha<=90) || (codCha>=97 && codCha<=122) || (codCha==32) || (codCha==8))
		return true;
	else return false;
}

function aMayuscula (){
	this.value= this.value.toUpperCase();
}

function ValidarNIF(nif) {
	var letras = "TRWAGMYFPDXBNJZSQVHLCKET";
	var numero= nif.substring(0,8);
	var letraNIF= nif.substring(8);
	if (nif.length!= 9) return false;
	else {
		var calcNumNIF=numero%23;
		if (letras.charAt(calcNumNIF) != letraNIF.toUpperCase()) return false;
		else return true;
	}
}

function PermiteSoloLetrasDigitosYEspecial(e) {
	var codCha = e.charCode || e.keyCode;
	if ((codCha>=65 && codCha<=90) || (codCha>=97 && codCha<=122) || (codCha>=48 && codCha<=57) || (codCha==8))
		return true;
	if ((codCha>=65 && codCha<=38) || (codCha==42) || (codCha==63) || (codCha==64) || (codCha==95)) {
		return true
	}
	else return false;
}

 function mayorDeEdad(fecha){
	var fechaActual = new Date();
	if (fecha.getYear() <= fechaActual.getYear()-18) {
		if (fecha.getMonth() <= fechaActual.getMonth()) {
			if (fecha.getDate() <= fechaActual.getDate()) return true;
		}
	}			
	else return false;	
}

  
  
function PermiteSoloLetrasYDigitos(e) {
	var codCha = e.charCode || e.keyCode;
	if ((codCha>=65 && codCha<=90) || (codCha>=97 && codCha<=122) || (codCha>=48 && codCha<=57) || (codCha==8) || (codCha==42))
		return true;
	else return false;
}

/*  
function validarContrasena(clave){
	var may = null;
	var min = null;
	var dig = null;
	var caraEsp = null;

	//for (var i=0; i<=clave.length; i++) {
		//var caracter = 
		//if (clave.charAt(i) == charCode()
		//)

	return false;
 } 
*/
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 