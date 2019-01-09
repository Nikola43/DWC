

//  En este fichero recogeremos nuestras utilidades javascript.

//  CAJAS DE TEXTO (<input type="text" ...... >):
  //  e => Es el parámetro del evento onkeypress.
  
  function limita(maximoCaracteres) {
    var elemento = document.getElementById("texto");
    var i=maximoCaracteres;
    if(elemento.value.length >= maximoCaracteres ) {
      return false;
      while(i>=0){
          return i;
          i--;
          var mensaje="te quedan "+ i + "letras para escribir como maximo";
      }
    }
    else {
      return true;
    }
  }
  
  function pulsaTeclaNumerica(evento){
      var even=evento || window.event;
      var codigoCaracter=even.charCode || even.keyCode;
      return (codigoCaracter>=48 && codigoCaracter<=57);
  }
   
  function pulsaCaracterEspecial(evento){
      var even=evento || window.event;
      var codigoCaracter=even.charCode || even.keyCode;
      return ((codigoCaracter>=37 && codigoCaracter<=40) || codigoCaracter==127 || codigoCaracter==8);
  }
  
  function pulsaSoloLetras(evento){
      var even=evento || window.event;
      var codigoCaracter=even.charCode || even.keyCode;
      return ((codigoCaracter>=65 && codigoCaracter<=122));
  }
  var contador=0;
  var   i=0;
  function pulsaSoloNumerosDeciles(evento){
     
      var even=evento || window.event;
      var codigoCaracter=even.charCode || even.keyCode;
      
          if (i==0 && (codigoCaracter>=48 && codigoCaracter<=57)){
              i++;
              return codigoCaracter;
          }
          else if(i>0 && (codigoCaracter==44 || (codigoCaracter>=48 && codigoCaracter<=57))){
              if (codigoCaracter==44  && contador==0){
                  contador++;
                  return codigoCaracter;
              }
              i++;
            if (contador>=1 && (codigoCaracter==44)){
                  return false;
                  }
              return codigoCaracter;
                  
          }
         else  return false;
      }
  
  var posicion=0;
  function numeroNegativo(evento){
      var even=evento || window.event;
      var codigoCaracter=even.charCode || even.keyCode;
      if (posicion==0 && codigoCaracter==45){
          posicion++;
          return codigoCaracter;    
      }
      else if (posicion>0 && (codigoCaracter>=48 && codigoCaracter<=57)){
          posicion++;
          return codigoCaracter;
      if (this.value.onkeypress()){
  
      }
      }
      else return false;
  }
  
  
  function mayusculas(){
      this.value = this.value.toUpperCase();
  }
  
  function pulsaSoloLetrasYEpacios(evento){
      var even=evento || window.event;
      var codigoCaracter=even.charCode || even.keyCode;
      return ((codigoCaracter>=65 && codigoCaracter<=122) || codigoCaracter==32);
  }


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

function soloNumerosDecimales(e){
    var c=e.charCode || window.event.keyCode;
    if (c==44){
        return !((this.selectionStart==0) || (this.value.indexOf(",")!=-1));
    }
    else{
        return ((c>=48) && (c<=57));
    }
}

function validarDni(dni) { // Retorna: true | false
    var letra='TRWAGMYFPDXBNJZSQVHLCKET';
    var numeroDni = dni.substr(0,dni.length-1);//desde cero hasta el tamaño de cad -1
    var let = dni.substr(dni.length-1,1).toUpperCase();
    
    if (letra.charAt(numeroDni % 23) == let){
    
    return true; // DNI correcto
    }
    
    return false; // DNI incorrecto
    }