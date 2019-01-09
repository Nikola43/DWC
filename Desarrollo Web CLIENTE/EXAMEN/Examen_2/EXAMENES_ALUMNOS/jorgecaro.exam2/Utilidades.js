

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
//permite uno solo
function PermiteUnoSolo(e) {
  var c = e.charCode || window.event.keyCode;
  //  Permitir el signo menos ( - ) sólo uno y en la primera posición:
  if (c == 42 || 95) {
    if (this.value.indexOf("*"))
      return false;
    }  
}
//Permite solo letras
function SoloLetras(elEvento){

	var e = elEvento || window.event;
	var codigoCaracter = e.charCode || e.keyCode;
	console.log(codigoCaracter);
	if((codigoCaracter >= 48)&&(codigoCaracter <=57)|| (codigoCaracter==8) || (codigoCaracter==46) || (codigoCaracter>=37)&&(codigoCaracter<=40)){
	
		return false;
	
	}else{
		
		return (this.value.length <20);
		
	}

}
//Permitir letras y numeros
function TanSoloNumerosyLetras(elEvento){

	var evento = elEvento || window.event;
	var codigoCaracter = evento.charCode || evento.keyCode;
	console.log(codigoCaracter);
	if((codigoCaracter >= 48)&&(codigoCaracter <=57)&& (this.value.length <10) || (codigoCaracter==8) || (codigoCaracter==46) || (codigoCaracter>=37)&&(codigoCaracter<=40) || (codigoCaracter==42)|| (codigoCaracter==95)|| (codigoCaracter==38)|| (codigoCaracter==36)|| (codigoCaracter==37)|| (codigoCaracter==63)|| (codigoCaracter==35)|| (codigoCaracter==64)){
	
		return true;
	
	}else{
		
		return false;
		
	}

}
function usuario(elEvento){
  var evento = elEvento || window.event;
	var codigoCaracter = evento.charCode || evento.keyCode;
  console.log(codigoCaracter);
  if((codigoCaracter==42) || (codigoCaracter==95) || (codigoCaracter>=64) || (codigoCaracter==38)|| (codigoCaracter==36)|| (codigoCaracter==37)|| (codigoCaracter==63)|| (codigoCaracter==35)){
	
		return true;
	
	}else{
		
		return false;
		
	}
}
//Te transforma las letras en mayusculas
function LetrasMayusculas (elEvento){
	//elEvento se crea para la necesidad de poder manejar, si queremos sabes que tecla se ha pulsado, claro ejemplo en SoloLetras
	var e = elEvento || window.event;
	this.value = this.value.toUpperCase();
}
//Te transforma las letras en minusculas
function LetrasMinusculas (elEvento){
	//elEvento se crea para la necesidad de poder manejar, si queremos sabes que tecla se ha pulsado, claro ejemplo en SoloLetras
	var e = elEvento || window.event;
	this.value = this.value.toLowerCase();
}

//Solo numeros
function TanSoloNumeros(elEvento){

	var evento = elEvento || window.event;
	var codigoCaracter = evento.charCode || evento.keyCode;
	console.log(codigoCaracter);
	if((codigoCaracter >= 48)&&(codigoCaracter <=57)&& (this.value.length <10) || (codigoCaracter==8) || (codigoCaracter==46) || (codigoCaracter>=37)&&(codigoCaracter<=40)){
	
		return true;
	
	}else{
		
		return false;
		
	}

}

//validar dni
function nif(dni) {
  var numero
  var letr
  var letra
  var expresion_regular_dni
 
  expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
 
  if(expresion_regular_dni.test (dni) == true){
     numero = dni.substr(0,dni.length-1);
     letr = dni.substr(dni.length-1,1);
     numero = numero % 23;
     letra='TRWAGMYFPDXBNJZSQVHLCKET';
     letra=letra.substring(numero,numero+1);
    if (letra!=letr.toUpperCase()) {
       return false;
     }else{
       return true;
     }
  }
}

//validar cuenta
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

//validar email
function validar_email( email ) 
{
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
}

//validar telefono fijo
function validar_telefono(telefono) {
  var test = /^[89]\d{8}$/;
  var telReg = new RegExp(test);
  return telReg.test(telefono);
}

//validar telefono movil
function validar_telefono_movil(telefono_movil) {
  var test = /^[6]\d{8}$/;
  var telReg = new RegExp(test);
  return telReg.test(telefono_movil);
}

//validar fecha si menor edad
function fechaEdad(fecha){
  var hoy = new Date();
  var dia_hoy = hoy.getDate();
  var mes_hoy = hoy.getMonth();
  var anio_hoy = hoy.getFullYear();
  var dia_fecha = fecha.getDate();
  var mes_fecha = fecha.getMonth();
  var anio_fecha = fecha.getFullYear();
  if((anio_hoy - anio_fecha) < 18){
      return false;
  }
  if((anio_hoy - anio_fecha) == 18 & mes_fecha < mes_hoy){
      return false;
  }
  if((anio_hoy - anio_fecha) == 18 & mes_fecha == mes_hoy & dia_fecha < dia_hoy){
      return false;
  }
}
