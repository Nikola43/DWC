

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
    return ((c >= 48)  && (c <= 57));
}

function soloNumerosComa(e){
var c = e.charCode || window.event.keyCode;
if(c == 44){
  return !((this.selectionStart != 1) || (this.value.indexOf(",") !=-1))
}else{
  return ( (c >=48) && (c <= 57));
}
}


function soloNumeros(e){
  var c = e.charCode || window.event.keyCode;
  return ((c >= 48)  && (c <= 57));
  return 
}



function soloNumerosYLetras(e){
var c = e.charCode || window.event.keyCode;
  return (((c >= 48)  && (c <= 57)) || ((c >= 65)  && (c <= 90)) || ((c >= 97)  && (c <= 122)));
}





function letrasYEspacios(e){
    var c = e.charCode || window.event.keyCode;
    if((c < 65 || c > 90) && (c < 97 || c > 122) && c != 32){
      return false;
    }
}

function soloLetras(e){
    var c = e.charCode || window.event.keyCode;
    if((c < 65 || c > 90) && (c < 97 || c > 122)){
      return false;
    }
}


function restringirEspacios(e){
    var c = e.charCode || window.event.keyCode;
    return !(c == 32);
}


function isDNI(dni){
  var expDNI = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i;
  if(!expDNI.test(dni.toUpperCase())){
    return false;
  }
    return true;
}

function averiguar(e){
  var c = e.charCode || window.event.keyCode;
  alert( String.fromCharCode(c));
  alert(c);
  
}


function restringirInputUsuario(e){
var c = e.charCode || window.event.keyCode;
var especiales = "*_@&$%?#";
var especialEncontrado = false;
var especialDuplicado = false;


if(especiales.indexOf(String.fromCharCode(c)) != -1){
  especialEncontrado = true;
}

for(var i=0; i<this.value.length;i++){

switch(c){

case 42:
if(this.value.indexOf(String.fromCharCode(c)) != -1){ especialDuplicado = true;}
break;

case 95:
if(this.value.indexOf(String.fromCharCode(c)) != -1){ especialDuplicado = true;}
break;

case 64:
if(this.value.indexOf(String.fromCharCode(c)) != -1){ especialDuplicado = true;}
break;

case 38:
if(this.value.indexOf(String.fromCharCode(c)) != -1){ especialDuplicado = true;}
break;

case 36:
if(this.value.indexOf(String.fromCharCode(c)) != -1){ especialDuplicado = true;}
break;

case 37:
if(this.value.indexOf(String.fromCharCode(c)) != -1){ especialDuplicado = true;}
break;

case 63:
if(this.value.indexOf(String.fromCharCode(c)) != -1){ especialDuplicado = true;}
break;

case 35:
if(this.value.indexOf(String.fromCharCode(c)) != -1){ especialDuplicado = true;}
break;
}
}
return (((c >= 48)  && (c <= 57)) || ((c >= 65)  && (c <= 90)) || ((c >= 97)  && (c <= 122)) || (especialEncontrado && !especialDuplicado));
}



function validaClave(clave){
//if(clave.length < 8){return false;}
var letras = "abcdefghijklmnñopqrstuvwxyz";
var mayus = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
var numeros = "1234567890";
var especiales = "*_@&$%?#";

var letraEncontrada = false;
var mayusEncontrada = false;
var numeroEncontrado = false;
var especialEncontrado = false;

for(var i=0;i<clave.length;i++){

  if(letras.indexOf(clave[i]) != -1){
    letraEncontrada = true;
  }
  if(mayus.indexOf(clave[i]) != -1){
    mayusEncontrada = true;
  }

  if(numeros.indexOf(clave[i]) != -1){
    numeroEncontrado = true;
  }

  if(especiales.indexOf(clave[i]) != -1){
    especialEncontrado = true;
  }

}


if(!letraEncontrada || !mayusEncontrada || !numeroEncontrado || !especialEncontrado || clave.length < 8){
  return false;
}else{
  return true;
}


}











function validaCuentaBancaria(cuentaBancaria){
    var banco = cuentaBancaria.substring(0,4);
    var sucursal = cuentaBancaria.substring(4,8);
    var dc = cuentaBancaria.substring(8,10);
    var cuenta=cuentaBancaria.substring(10,20);
    var CCC = banco+sucursal+dc+cuenta;
    if (!/^[0-9]{20}$/.test(banco+sucursal+dc+cuenta)){
        return false;
    }
    else
    {
        valores = new Array(1, 2, 4, 8, 5, 10, 9, 7, 3, 6);
        control = 0;
        for (i=0; i<=9; i++)
        control += parseInt(cuenta.charAt(i)) * valores[i];
        control = 11 - (control % 11);
        if (control == 11) control = 0;
        else if (control == 10) control = 1;
        if(control!=parseInt(dc.charAt(1))) {
            return false;
        }
        control=0;
        var zbs="00"+banco+sucursal;
        for (i=0; i<=9; i++)
            control += parseInt(zbs.charAt(i)) * valores[i];
        control = 11 - (control % 11);
        if (control == 11) control = 0;
            else if (control == 10) control = 1;
        if(control!=parseInt(dc.charAt(0))) {
            return false;
        }
        return true;
    }
}








function comprobarDNI(dni){
  var letras  =['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E'];
  var numero = dni.substring(0,8);
  var letra = dni.substring(8,9);
  console.log(letra);


  if(!(/^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i).test(dni)){
    //alert("El formato del dni no es correcto");
    return false;
  }

 if(letras[numero % 23] != letra.toUpperCase()){
    return false;
  }else{return true;}
}

/*
function comprobarDNI(numero,letra){
  var letras  =['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E'];
  letra = letra.toUpperCase();
  var dni = numero + letra;

  if(!(/^\d{8}[A-Z]$/).test(dni)){
    alert("El formato del dni no es correcto");
    return false;
  }

  if(letras[numero % 23] != letra){
    return false;
  }else{return true;}
}*/