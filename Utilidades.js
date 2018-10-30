

//  En este fichero recogeremos nuestras utilidades javascript.

//  CAJAS DE TEXTO (<input type="text" ...... >):
  //  e => Es el parámetro del evento onkeypress.

//################################################################
        //SOLO SE PERMITE INTRODUCIR NÚMEROS EN LA CAJA.
//################################################################
function HanSoloNumeros(elEvento){
  var evento = elEvento || window.event;
  var codigoCaracter = evento.charCode || evento.keyCode;

  return ((codigoCaracter >= 48) && (codigoCaracter <=57))
}


//################################################################
        //PERMITIR CARACTERES ESPECIALES EN MOZILLA.
//################################################################
function HanSoloCaracteresEspecialesMozilla(elEvento){
  var evento = elEvento || window.event;
  var codigoCaracter = evento.charCode || evento.keyCode;

  console.log(codigoCaracter);

  return ((codigoCaracter >= 48) && (codigoCaracter <= 57) || (codigoCaracter == 8) ||
          (codigoCaracter == 46) || (codigoCaracter == 32) || (codigoCaracter == 37) ||
          (codigoCaracter == 38) || (codigoCaracter == 39) || (codigoCaracter == 40));
}


//################################################################
        //SOLO SE PERMITE INTRODUCIR LETRAS EN LA CAJA.
//################################################################
function HanSoloLetras(elEvento){
  var evento = elEvento || window.event;
  var codigoCaracter = evento.charCode || evento.keyCode;

  console.log(codigoCaracter);

  return ((codigoCaracter >= 65) && (codigoCaracter <=122));
}


//################################################################
        //SOLO SE PERMITE INTRODUCIR LETRAS Y ESPACIOS.
//################################################################
function PermiteSoloLetrasEspacios(elEvento){
  var evento = elEvento || window.event;
  var codigoCaracter = evento.charCode || evento.keyCode;

  console.log(codigoCaracter);

  return ((codigoCaracter >= 65) && (codigoCaracter <=122) || (codigoCaracter == 32));
}


//################################################################
//PERMITIR SOLO NUMEROS DECIMALES, EL SEPARADOR ES LA COMA (,).
//################################################################
function HanSoloNumerosDecimalComa (elEvento){
  console.log(this.selectionStart);

  var c = elEvento.charCode || window.event.keyCode;
  if (c == 44)
      return !((this.selectionStart == 0) || (this.value.indexOf(",") != -1));
  else
      return ((c >= 48) && (c <= 57)); //numeros
}


//################################################################
//PERMITIR SOLO NUMEROS DECIMALES, EL SEPARADOR ES EL PUNTO (.).
//################################################################
function HanSoloNumerosDecimalPunto (elEvento){
  console.log(this.selectionStart);

  var c = elEvento.charCode || window.event.keyCode;
  if (c == 46)
      return !((this.selectionStart == 0) || (this.value.indexOf(".") != -1)); //THIS-->ES QUIEN HA GENERADO EL EVENTO.
  else
      return ((c >= 48) && (c <= 57)); //numeros
}


//################################################################
//PERMITIR SOLO NUMEROS DECIMALES CON SEPARADOR COMA Y CON SIGNO MENOS.
//################################################################
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


//################################################################
        //PASAR A MAYÚSCULAS
//################################################################
function aMayusculas(){
  this.value = this.value.toUpperCase();
}



//################################################################
        //VALIDAR DNI
//################################################################

/*function ValidarNIF(nif){
  //validamos el dni
  var letras = 'TRWAGMYFPDXBNJZSQVHLCKET';
  //Primero la longitud
  if (nif.length != 9){
    return false;
  }

  var dni= nif.substring(0, 8);
  return letras.charAt(nif % 23);
}*/

function ValidarNIF(nif){
  var letras = 'TRWAGMYFPDXBNJZSQVHLCKET';
  var numero = nif.substr(0, nif.length-1); //desde 0 hasta el tamaño de cad-1
  var letra = nif.substr(nif.length-1, 1).toUpperCase();
  if (letras.charAt(numero%23)==letra){
    return true; //dni correcto
  }else{
    return false; //dni incorrecto
  }
}

//################################################################
        //VALIDAR FECHA
//################################################################
function ValidarFecha(ano, mes, dia){
  //Creamos la fecha con esos valores (los anteriores).
  var valor = new Date(ano, mes, dia);
  //Si no se cumple ninguna de estas condiciones...
  if(dia != valor.getDate() || mes != valor.getMonth() || ano != valor.getFullYear()){
    return false;  //fecha incorrecta.
  }else{
    return true;  //fecha correcta.
  }
}

//################################################################
        //VALIDAR RADIOS
//################################################################
function ValidarRadios(valor){
  estaMarcado = false;
  
  for (var i = 0; i < valor.length; i++){
    if (valor[i].checked){
      estaMarcado = true;
      break;
    }
    else{
      estaMarcado = false;
    }
  }

  if (estaMarcado == true)
    return true;
  else
    return false;
}


//################################################################
        //VALIDAR  VARIOS RADIOS
//################################################################
function ValidarVariosRadios(valor){
  alert("paso : entro en la funcion");
  var estaMarcado = false;
  var cont=0;

  for (var i = 0; i < valor.length; i++){
    if (valor[i].checked){
      estaMarcado = true;
      cont ++;
      alert("paso: llevo  " +cont);
    }
    else{
      estaMarcado = false;
    }
  }
  //alert("paso: llevo 3 ");
  if (estaMarcado && cont >= 3)
    return true;
  else
    return false;
}


//validamos que haya seleccionado una opción del sexo:
var opSexo = document.getElementById("sexo");
var selSexo = false;
for (var i=0; i<opSexo.length; i++){
  selSexo = selSexo || opSexo[i].checked;
  if (!selSexo){
    document.getElementById("info_sexo").innerHTML="Debes seleccionar una sexsualidad";
    correcto = false;
  }else{
    document.getElementById("info_sexo").innerHTML="";
  }
}
  
//#############
//otra manera
//############
//validamos que haya seleccionado una opción del sexo:
var opSexo = document.getElementById("sexo");
var selSexo = false;
for (var i=0; (!opSexo[i].checked) && (i< opSexo.length); i++);
  selSexo = selSexo || opSexo[i].checked;
  var selSexo = (i != opSexo.length);
  if (!selSexo){
    document.getElementById("info_sexo").innerHTML="Debes seleccionar una sexsualidad";
    correcto = false;
  }else{
    document.getElementById("info_sexo").innerHTML="";
  }

//#############
//zumos operador ternario en javaScript
//############
var opBebidas = document.getElementById("bebidas");
var bebidasSel =0;
var bebidasNoSel=0;
for (var i=0; i< opBebidas.length; i++){
  opBebidas[i].checked ? bebidasSel++ : bebidasNoSel++;
}


//###########
//evitar copy-paste y drop(arrastar y soltar)
//###########
//en el wnidow.onload
document.getElementById("nombre").onpaste= function(){
  alert ("acho que no pegues!!!");
  return false;
}

document.getElementById("nombre").ondrop= function(){
  alert ("acho que no arrastres!!!");
  return false;
}

//##################
//en utilidades
function NoPermitirCopiarNiPegar (){

}

function sugerir (e){
  var s = "Todo está muy bien";
  this.value += s[this.value.length % s.length];
  return false;
}



//en el wnidow.onload
  //validar
document.getElementById("btEnviar").onmouseenter = resaltar;
document.getElementById("btEnviar").onmouseleave = resaltar;

//en el script
function resaltar(e){
  var clase="";
  if(e.type == "mouseenter") 
    clase = "destacado";
}
