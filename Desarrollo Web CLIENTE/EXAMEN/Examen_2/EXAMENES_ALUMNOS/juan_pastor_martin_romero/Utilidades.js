//JUAN PASTOR MARTÍN ROMERO
//  En este fichero recogeremos nuestras utilidades javascript.

//  event => Es el parámetro del evento onkeypress.
  
//  Permitir SOLO números con decimales y decimales negativos. Separador es la coma (,):
function HanSoloNumeroDecimalNegativo(event){
  var e = event.charCode ||  window.event.keyCode;
  //controlo si tiene 
  var bandera = false;
  if(this.value.indexOf(",") != -1){
      bandera = true;
  }
  //controlar la , en la primera posición y una sola , y controla que pueda ser número negativo
  if(e==45){
      //si no encuentra un signo -
      if(this.value.indexOf("-") == -1)
          this.value = "-"+this.value;
      //para todos los casos devuelve false
      return false;
  }else if(e==44){
              //si length es 0 y pulsamos no entra y si ya existe tampoco (usamos negacion)
      return !((this.value.length == 0 && e == 44) || (e == 44 && bandera));
  }else{
      return (e >= 48) && (e <= 57); //si se cumple devuelve true, en caso contrario false
  }
}

//SOLO NUMEROS DECIMALES
function HanSoloNumeroDecimal(event){
  var e = event.charCode ||  window.event.keyCode;
  //controlo si tiene 
  var bandera = false;
  if(this.value.indexOf(",") != -1){
      bandera = true;
  }
  //controlar la , en la primera posición y una sola
if(e==44){
              //si length es 0 y pulsamos no entra y si ya existe tampoco (usamos negacion)
      return !((this.value.length == 0 && e == 44) || (e == 44 && bandera));
  }else{
      return (e >= 48) && (e <= 57); //si se cumple devuelve true, en caso contrario false
  }
}


//MARCO
/*function PermiteSoloNumerosDecimalesComaNoPrimeraPosSigno(e) {
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
}*/

//FUNCION NO COPIAR
function noCopiar(){
  return false;
}

//CONTROLAR TAMAÑO  max -> numero con el tamaño
function nTamaño(cadena, max){
  return (cadena.length <= max);
}




//SOLO NUMEROS -> FUNCIONA EN TODOS LOS NAVEGADORES
function soloNum(event){
  var e = event || window.event;
  var codigoTecla = e.keyCode || e.charCode;
  
  //console.log(codigoTecla);
  /*if(codigoTecla < 48 || codigoTecla >57){
      return false;
  }else{
      return true;
  }*/

  //con un solo return FIRE
  return (codigoTecla >= 48 && codigoTecla <= 57 || codigoTecla == 46 || codigoTecla >= 37 && codigoTecla <= 40 || codigoTecla == 8);
}  


//SOLO LETRAS Y ESPACIO
function HanSoloLetrasYespacio(event){
  var e = event || window.event;
  var codLetra = e.keyCode || e.charCode;
  //preparado para chrome
              //letras minusculas                         letras mayusculas               ñ minus             ñ mayus          espacio
  return (codLetra >= 97 && codLetra <=122) || (codLetra >= 65 && codLetra <= 90) || codLetra == 241 || codLetra == 209 
            || codLetra == 32;
}

//controlusuario
function controlusuario(event){
  var e = event || window.event;
  var codLetra = e.keyCode || e.charCode;
  //preparado para chrome
              //letras minusculas                         letras mayusculas               ñ minus             ñ mayus          espacio
  return (codLetra >= 97 && codLetra <=122) || (codLetra >= 65 && codLetra <= 90) || codLetra == 241 || codLetra == 209 || codLetra == 32 || (codLetra >= 48 && codLetra <= 57) || codLetra == 42 || codLetra == 95 || codLetra == 64 || codLetra == 38
  || codLetra == 36 || codLetra == 37 || codLetra == 63|| codLetra == 35;
}

//SOLO LETRAS 
function HanSoloLetras(event){
  var e = event || window.event;
  var codLetra = e.keyCode || e.charCode;
  //preparado para chrome
              //letras minusculas                         letras mayusculas              ñ minus           ñ mayus 
  return (codLetra >= 97 && codLetra <=122) || (codLetra >= 65 && codLetra <= 90) || codLetra == 241 || codLetra == 209;
}

//SOLO MAYUS
function HanSoloLetrasMayus(){
  this.value = this.value.toUpperCase();
}

function nifValidado(dni){
  var arrayDNI = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E","T"];
  numero = dni.substr(0,8);
  letra = dni.substr(dni.length-1,1);
  //aseguramos que la letra esté en mayus
  letra=letra.toUpperCase();
  numeroLetra = numero % 23;

  //consideramos que puede tener mas de 9 digitos (tambien menos de 9)
  if (dni.length != 9){
    return false;
  }
  //si se cumple devuelve true, si no devuelve false
  return (arrayDNI[numeroLetra] == letra);
}
var cont = 0;
function sugerir(){
  //utilizamos this
  var text = "Todo está MUY BIEN";
  
  this.value = this.value + text[cont%text.length];
  cont++;
  

  return false;

}
function validarTarjeta(numero){
  var cadena = numero.toString();
  var longitud = cadena.length;
  var cifra = null;
  var cifra_cad=null;
  var suma=0;

  for (var i=0; i < longitud; i+=2){
    cifra = parseInt(cadena.charAt(i))*2;
    if (cifra > 9){ 
      cifra_cad = cifra;
      cifra = cifra_cad-9;
      cifra.toString();
    }
    suma+=cifra;
  }
  for (var i=1; i < longitud; i+=2){
    suma += parseInt(cadena.charAt(i));
  }
   
  if ((suma % 10) == 0 ){ 
   return true;
  } else {
   return false;
  }
}

//validar RADIOOO

function validarRadio(opciones){
  var seleccionado = false;
  for(var i=0; i<opciones.length; i++) {    
    if(opciones[i].checked) {
      seleccionado = true;
      break;
    }
  }
   
  if(!seleccionado) {
    return false;
  }else{
    return true;
  }

}

//validar Check mediante contador (así podemos controlar que hace un mínimo)
function validarCheckNum(formulario){
  var contSi = 0;

  for(var i=0; i<formulario.length; i++) {
    var elemento = formulario[i];
    if(elemento.type == "checkbox") {
      if (elemento.checked) {
        contSi++;
      }
    }
  }
  return contSi;
}

//validar Check BOOLEANNNN (solo se valida el primer check)
function validarCheckBoolean(formulario){

  for(var i=0; i<formulario.length; i++) {
    var elemento = formulario[i];
    if(elemento.type == "checkbox") {
      if(!elemento.checked) {
        return false;
      }else{
        return true;
      }
    }
  }

}

//validar cuenta
//14530856058804889418
  function valiarCCC(cuenta) {
    num = new Array(1, 2, 4, 8, 5, 10, 9, 7, 3, 6);
   
    //banco
    var vBanco = "00"+cuenta.substring(0,8);
    var valor = 0;
    var i = 0;
    for (i=0; i<=9; i++) {
      valor += parseInt(vBanco.charAt(i)) * num[i];
    }
    valor = 11 - (valor % 11);
    if (valor==11) 
        valor=0;
    if (valor==10) 
        valor=1;
    
    var controlBanco = parseInt(cuenta.substring(8,9));
    if(controlBanco != valor){
      return false;
    }

    //////////////////////SEGUNDA COMPROVACION////////////////
    var vCuenta = cuenta.substring(10,20);
    valor = 0;
    for (i=0; i<=9; i++) {
      valor += parseInt(vCuenta.charAt(i)) * num[i];
    }
    valor = 11 - (valor % 11);
    if (valor==11) 
        valor=0;
    if (valor==10) 
        valor=1;
        
    controlBanco = parseInt(cuenta.substring(9,10));
  
    if(controlBanco != valor){
      return false;
    }else{
      return true;
    }   
}


