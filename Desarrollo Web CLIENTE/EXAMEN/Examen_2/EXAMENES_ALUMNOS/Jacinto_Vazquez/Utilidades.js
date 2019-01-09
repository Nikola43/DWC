

//  En este fichero recogeremos nuestras utilidades javascript.

//  CAJAS DE TEXTO (<input type="text" ...... >):
  //  e => Es el parámetro del evento onkeypress.
  



//  Permitir SOLO números con decimales. Separador es la coma (,):
function PermiteSoloNumerosDecimalesComaNoPrimeraPosSigno(e) {
  var c = e.charCode || window.event.keyCode;
  //  Permitir el signo menos ( - ) sólo uno y en la primera posición:
  if (c == 45) {
    if (this.value.indexOf("-") == -1)
      this.value = "-" + this.value;
      return false;
    }
    if (c == 44)
	    return !((this.selectionStart == 0) || (this.value.indexOf(",") != -1) || ((this.selectionStart == 1) & (this.value[0] == "-"))) 
  else 
	  if ((this.value.indexOf("-") != -1) && (this.selectionStart == 0))
		  return false;
    return ((c >= 48)  && (c <= 57));
}

function aMayusculas () {
	this.value = this.value.toUpperCase();
}

function HanSoloNumerosDecimal (eve) {
	var codigoCaracter = eve.charCode || window.event.keyCode;

	if (codigoCaracter==44)
		return !((this.selectionStart == 0) || (this.value.indexOf(",") != -1))
	else
		return ((codigoCaracter >= 48) && (codigoCaracter<=57))
}

function HanSoloLetras (eve) {
  var codigoCaracter = eve.charCode || window.event.keyCode;

	if ((codigoCaracter<48 || codigoCaracter>57)) 
		return true;
	else
		return false;
}

function HanSoloNumeros (eve) {
  var codigoCaracter = eve.charCode || window.event.keyCode;

	if (((codigoCaracter>=48 && codigoCaracter<=57) || (codigoCaracter==46) || (codigoCaracter==8) || (codigoCaracter>=37 && codigoCaracter<=40)))
		return true;
	else
		return false;
}

function PermiteSoloLetrasEspacios (eve) {
	var evento = eve || window.event;
	var codigoCaracter = evento.charCode || evento.keyCode;

	if ((codigoCaracter>=65 && codigoCaracter<=90) || (codigoCaracter>=97 && codigoCaracter<=122) || codigoCaracter==32) 
		return true;
	else
		return false;
}

function validarNIF (string) {
  if (string.length!=9) return false;

	var letras = "TRWAGMYFPDXBNJZSQVHLCKET";
  var numero = string.substring(0,8);

  return (letras[numero % 23] == string[8].toUpperCase());
}

function validarFecha (anio, mes, dia) {
	//Le quitamos 1 al mes porque la funcion usa del 0 al 11
	var valor = new Date(anio,mes-1,dia);

	return (dia == valor.getDate() && mes-1 == valor.getMonth() && anio == valor.getFullYear());
}

function validarCCC (num) {
	if (num.length != 20) return false;

	var primerDC = 11 - ((num[0]*4 + num[1]*8 + num[2]*5 + num[3]*10 + num[4]*9 + num[5]*7 + num[6]*3 + num[7]*6) % 11);
	var segundoDC = 11 - ((num[10]*1 + num[11]*2 + num[12]*4 + num[13]*8 + num[14]*5 + num[15]*10 + num[16]*9 + num[17]*7 + num[18]*3 + num[19]*6) % 11);

	if (primerDC == 10) primerDC = 1;
	if (primerDC == 11) primerDC = 0;
	if (segundoDC == 10) segundoDC = 1;
	if (segundoDC == 11) segundoDC = 0;

	return (primerDC == num[8] && segundoDC == num[9]);
}