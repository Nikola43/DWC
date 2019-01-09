

//  En este fichero recogeremos nuestras utilidades javascript.

//  CAJAS DE TEXTO (<input type="text" ...... >):
  //  e => Es el parámetro del evento onkeypress.
  



//  Permitir SOLO números con decimales. Separador es la coma (,):
function permiteSoloNumerosDecimalesComaNoPrimeraPosSigno(e) {
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

//Funcion Clave
function validarClave(clave){
  var especial=0;
  var minuscula=0;
  var mayuscula=0;
  if(clave.value.indexOf("*") != -1 || clave.value.indexOf("_") != -1 || clave.value.indexOf("@") != -1 || clave.value.indexOf("&") != -1 || clave.value.indexOf("$") != -1 || clave.value.indexOf("%") != -1 || clave.value.indexOf("?") != -1 || clave.value.indexOf("#") != -1)
    especial=1;
  //var numero=clave.value[1].charCode;
  //console.log(numero);
  

  /*for(var i=0; i<clave.value.length;i++){
    if(clave.value.charAt(i).charCode >= 65 && clave.value.charAt(i).charCode <= 90)
      minuscula=1;
    if(clave.value.charAt(i).charCode >= 97 && clave.value.charAt(i).charCode <= 122)
      mayuscula=1;
  }
  if(especial == 1 && minuscula == 1 && mayuscula == 1)
    return true;
  else
    return false;*/
}

//Permitir caracteres especiales
function permiteCaracteresEspeciales(e){
  var c = e.charCode || window.event.keyCode;
    //ver codigo ascii:
    //alert(c);
  if(c == 42){
    if(this.value.indexOf("*") == -1)
      return "*";
    else
      return false;
  }else if(c == 95){
    if(this.value.indexOf("_") == -1)
      return "_";
    else
      return false;
  }else if(c == 64){
    if(this.value.indexOf("@") == -1)
      return "@";
    else
      return false;
  }else if(c == 38){
    if(this.value.indexOf("&") == -1)
      return "&";
    else
      return false;
  }else if(c == 36){
    if(this.value.indexOf("$") == -1)
      return "$";
    else
      return false;
  }else if(c == 37){
    if(this.value.indexOf("%") == -1)
      return "%";
    else
      return false;
  }else if(c == 63){
    if(this.value.indexOf("?") == -1)
      return "?";
    else
      return false;
  }else if(c == 35){
    if(this.value.indexOf("#") == -1)
      return "#";
    else
      return false;
  }return (c>=48 && c<=57) || (c>=65 && c<=90) || (c>=97 && c<=122);
}

//Permitir solo un numero con un decimal. Separador en coma.
function permiteSoloNumeroDecimalComa(e) {
  var c = e.charCode || window.event.keyCode;
  if (c == 44)
    return !((this.selectionStart == 0) || (this.value.indexOf(",") != -1) || ((this.selectionStart == 1) & (this.value[0] == "-"))); 
  if(this.selectionStart == 1 && c != 44)
    return false;
  return ((c >= 48)  && (c <= 57));
}


//Permitir solo numeros
function HanSoloNumeros(eve){
  var evento = eve || window.event;
  var codigoEve = evento.charCode;
  return (codigoEve>=48 && codigoEve<=57);
}

//Permitir solo letras
function HanSoloLetras(eve){
  var evento = eve || window.event;
  var codigoEve = evento.charCode;
  return (codigoEve>=65 && codigoEve<=90 || codigoEve>=97 && codigoEve<=122);
}

//Permitir solo letras y espacios
function HanSoloLetrasYEspacios(eve){
  var evento = eve || window.event;
  var codigoEve = evento.charCode;
  return (codigoEve>=65 && codigoEve<=90 || codigoEve>=97 && codigoEve<=122 || codigoEve == 32);
}

//No permitir espacios
function noPermitirEspacios(eve){
  var evento = eve || window.event;
  var codigoEve = evento.charCode;
  return !(codigoEve == 32);
}

// DNI
function validarDNI(nif){
  var letras = "TRWAGMYFPDXBNJZSQVHLCKET";
  var dniC = nif.substr(0,9);
  //console.log(dniC);
  var numero = dniC.substr(0,8);
  var letradni= dniC.substr(8,9).toUpperCase();
  if(nif.length != 9){
    return false;
  }else{
    var letra=letras.charAt(numero%23);
    if(letra == letradni){
      return true;
    }else{
      return false;
    }
  }
}

//Validar fecha

function validaFecha(dia,mes,ano){
  var valor = new Date(ano,mes,dia);
  if(dia!= valor.getDate() || mes != valor.getMonth() || ano != valor.getFullYear()){
    return false;
  }else{
    return true;
  }
}

//No devolver nada.

function noDevuelvo(eve){
  return false;
}

//Comprobar si es mayor de edad.
function mayorDeEdad(dia,mes,ano){
  var fecha= new Date(parseInt(ano,10)+18,mes,dia);
  if(fecha >= new Date()){
        //alert("Eres menor de edad");
        return false;  
      }else{
        //alert("Eres mayor de edad");
        return true;  
      }
}

//Permitir solo letras y espacios ESCRIBE EN MAYUSCULA
function letrasYEspaciosEnMayusc(eve){
  var evento = eve || window.event;
  var c = evento.charCode;
  if((c>=65 && c<=90) || (c>=97 && c<=122) || c==32){
    var dec = String.fromCharCode(c).toUpperCase();
    this.value= this.value+dec;
    return false;
  }else
    return false;
}

