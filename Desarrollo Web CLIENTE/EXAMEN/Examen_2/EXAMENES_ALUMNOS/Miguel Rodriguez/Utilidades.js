

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
// funciones para comprobar el numero de cuenta ===========================================================

function compruebaCCC(entidad,sucursal,dc,nCuenta){
  entidad = rellenaCeros(entidad,4);
  sucursal = rellenaCeros(sucursal,4);
  dc = rellenaCeros(dc,2);
  nCuenta = rellenaCeros(nCuenta,10);

  var concatenado = entidad+sucursal;
  var dc1 = calculaDCParcial(concatenado);
  var dc2 = calculaDCParcial(nCuenta);
  return (dc==(dc1+dc2));
}

function calculaDCParcial(cadena){
  var dcParcial = 0;
  var tablaPesos = [6,3,7,9,10,5,8,4,2,1];
  var suma = 0;
  var i;
  for(i=0;i<cadena.length;i++){
    suma = suma + cadena.charAt(cadena.length-1-i)*tablaPesos[i];
  }
  dcParcial = (11-(suma % 11));
  if(dcParcial==11)
    dcParcial=0;
  else if(dcParcial==10)
    dcParcial=1;
  return dcParcial.toString();
}

function rellenaCeros(numero,longitud){
  var ceros = '';
  var i;
  numero = numero.toString();
  for(i=0;(longitud-numero.length)>i;i++){
    ceros += '0';
  } 
  return ceros+numero;
}
//===========================================================================================================

// Poner texto en MAYÚSCULAS:
  function aMayusculas(){
    this.value = this.value.toUpperCase();
  }

// NO permitir números.
  function noNumero(eve) {
    var evento = eve || window.event;
    var letra = evento.keyCode || evento.charCode;
    if (letra >= 48 && letra <= 57){
        return false;
    }
  }

// Solo permitir letras (abecedario en mayusculas y minusculas solamente)
  function soloLetras(eve){
    var evento = eve || window.event;
    var letra = evento.charCode || evento.keyCode;
      if ((letra >= 65) && (letra <= 90) || (letra >= 97) && (letra <= 122)){
        return true;
      }
      else {
        return false;
      }
  }

// Permitir letras del abecedario en mayusculas y minusculas y ademas, TILDES, ESPACIOS, etc... (LA EXCLAMACION --> "¡" Y "·" SE ME CUELAN)
  function soloLetrasESPECIAL(eve){
    var evento = eve || window.event;
    var letra = evento.charCode || evento.keyCode;
      if ((letra >= 65) && (letra <= 90) || (letra >= 97) && (letra <= 122) || (letra >= 128) && (letra <= 160) || (letra >= 181) && (letra <= 182) || 
        (letra == 198) || (letra == 199) || (letra >= 209) && (letra <= 218) || (letra >= 224) && (letra <= 237) || (letra == 32) || (letra == 241) || (letra == 8) || (letra == 127) ||(letra == 32) ||(letra == 250)){
        return true;
      }
      else {
        return false;
      }
  }  

// SOLAMENTE PERMITE NUMEROS
  function soloNumeros(eve) {
    var evento = eve || window.event;
    var numero = evento.keyCode;
    if (numero >= 48 && numero <= 57){
      return true;
    }
    else {
      return false;
    }
  }
// Calcular la LETRA de un DNI/NIF:
function validarDNI(dni) {

  var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

  if(dni.length != 9){
    return false;
  }

  var numDNI = dni.substring(0,8);

  if(letras[numDNI%23] != dni[8].toUpperCase()){
      return false;

    }else{
      return true;
    }  
}

function validarNifConGuion(dni){
    var letras = 'TRWAGMYFPDXBNJZSQVHLCKET';
    return (dni.indexOf("-") !== 8) ? !(dni.charAt(9) !== letras.charAt(dni.substring(0, 8) % 23)) : !(dni.charAt(8) !== letras.charAt(dni.substring(0, 8) % 23));
}

// Validar una FECHA
  function validarFECHA (dia, mes, ano) {

    mes = mes-1;

    var valor = new Date(ano, mes, dia);
    if(dia != valor.getDate() || mes != valor.getMonth() || ano != valor.getFullYear()){
      return false; 
    }
    else {
      return true;
    }
  }



  