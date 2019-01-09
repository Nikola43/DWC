

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
  else if(((c >= 48)  && (c <= 57)) && (this.selectionStart == 1)){
    return false;
  }
  else if (((c >= 48)  && (c <= 57)) && (this.selectionStart == 4)){ 
    return false;
  }
	if ((this.value.indexOf("-") != -1) && (this.selectionStart == 0))
		return false;
    return ((c >= 48)  && (c <= 57));
}

function HanSoloNumeros(evento){
  var eventoTeclado = evento || window.event;
  var carCo = eventoTeclado.charCode;
  return(carCo>=48 && carCo<=57);
}

function HanSoloRequisitos(evento){
  var eventoEscrito = evento || window.event;
  var carCo = eventoEscrito.charCode;
  if(carCo==42){
    return !(this.value.indexOf("*") != -1);
  }
  if(carCo==95){
    return !(this.value.indexOf("_") != -1);
  }
  if(carCo==64){
    return !(this.value.indexOf("@") != -1);
  }
  if(carCo==38){
    return !(this.value.indexOf("&") != -1);
  }
  if(carCo==36){
    return !(this.value.indexOf("$") != -1);
  }
  if(carCo==37){
    return !(this.value.indexOf("%") != -1);
  }
  if(carCo==63){
    return !(this.value.indexOf("?") != -1);
  }
  if(carCo==35){
    return !(this.value.indexOf("#") != -1);
  }
  return((carCo>=48 && carCo<=57) || (carCo>=65 && carCo<=90) || (carCo>=97 && carCo<=122));
}


function dniValido(dni){
    var letras = "TRWAGMYFPDXBNJZSQVHLCKET";
    var numeros = dni.substring(0,8);
    var letraMayus = dni.substring(8,9);

    if(numeros.length!=9){
        if (letras[numeros%23] == letraMayus){
          return true;
        }
        return false;
    }
    else{
        return false;
    }
}


function valFec(dia,mes,ano) {
  var fecha = new Date(ano,mes,dia);
  if(dia != fecha.getDate() || mes != fecha.getMonth() || ano != fecha.getFullYear()){
    return false;
  }
  else
    return true;
}

function HanSeleccionadoSexo(arraySexo){
  for(var i=0;i<arraySexo.length;i++){
    if(arraySexo[i].checked){
      return true;
    }
  }
  return false;
}

function HanSeleccionadoBebidas(arrayBebidas){
  var cont=0;
  for(var i=0;i<arrayBebidas.length;i++){
    if(arrayBebidas[i].checked){
      cont++;
    }
  }
  
  if(cont>=3){
    return true;
  }
  else
    return false;
}

//Comprobar si es mayor de edad.
function mayorDeEdad(dia,mes,ano){
  var fecha= new Date(ano,mes,dia);
  if(fecha.getFullYear()+18 == new Date().getFullYear()){
    if((fecha.getMonth() <= new Date().getMonth())){
      return true;
    }else{
      return false;
    }
  }    
  if(fecha.getFullYear()+18 <= new Date().getFullYear()){
        return true;  
      }else{
        return false;  
      }
}

//Para validar la cuenta del banco
function validarBanco (num) {
  if (num.length != 20){ 
    return false;
  }
  
  var DCuno = 11 - ((num[0]*4 + num[1]*8 + num[2]*5 + num[3]*10 + num[4]*9 + num[5]*7 + num[6]*3 + num[7]*6) % 11);
  var DCdos = 11 - ((num[10]*1 + num[11]*2 + num[12]*4 + num[13]*8 + num[14]*5 + num[15]*10 + num[16]*9 + num[17]*7 + num[18]*3 + num[19]*6) % 11);
  
  if (DCuno == 10){
    DCuno = 1;
  } 
  if (DCuno == 11) {
    DCunoC = 0;
  }
  if (DCdos == 10) {
    DCdos = 1;
  }
  if (DCdos == 11) {
    DCdos = 0
  }
  
  if((DCuno == 1 || DCuno==1) && (DCdos==0 || DCdos==1)){
    return true;
  }
  else
    return false;
}

function validarClave(clave){
  var cont = 0;
  var mayus = false;
  var minus = false;
  var carEs = false;
  var num = false;

  if(clave.length < 8){
    return false;
  }
  
  for(var i = 0; i<clave.length; i++){
    var carCo = clave[i].charCode;
    
    if(carCo>=48 && carCo<=57){
      num = true;
    }

    if(carCo>=65 && carCo<=90){
      minus = true;
    }

    if(carCo>=97 && carCo<=122){
      mayus = true;
    }

    if((carCo==42) || (carCo==95) || (carCo==64) || (carCo==38) || (carCo==36) || (carCo==37) || (carCo==63) || (carCo==35)){
      carEs = true;
    }
  }
  
  if(mayus || minus || carEs || num){
    return true;
  }
  else
    return false;
}


function SoloMayus(evento){
  var letra = evento.charCode || window.event.keyCode;

  var mayus = String.fromCharCode(letra).toUpperCase();
  return mayus;
  
}

function fechaMayor(repano,repmes,repdia){
  for(var i=0;i<repano.length;i++){
    if(repano[i].value==-1){
      return false;
    }
  }

  for(var i=0;i<repmes.length;i++){
    if(repmes[i].value==-1){
      return false;
    }
  }

  for(var i=0;i<repdia.length;i++){
    if(repdia[i].value==-1){
      return false;
    }
  }
  return true;
}

