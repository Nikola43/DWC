

//  En este fichero recogeremos nuestras utilidades javascript.

//  CAJAS DE TEXTO (<input type="text" ...... >):
  //  e => Es el parámetro del evento onkeypress.
 
//Comprobar cuenta corriente
function Todo(e){
	var evento=e || windows.event;
	var c= evento.charCode || evento.keyCode;
	
  if (c>=97 && c<=122|| c>=65 && c<=90 ){
	return true;
  }
  else if (c > 48 && c < 57) {
	return true;
  }
  else if(c==35 ||c==36||c==37||c==38 ||c==95 ||c==64||c==63||c==42 ){
	return true;
  }
  else {
	return false;
  }

 }
function validarCuentaCorriente(cuenta){
	multiplicar=new Array(1,2,4,8,5,10,9,7,3,6);
	var entidad1=0;
	var entidad2=0;
	
	for (var i=0; i<=7; i++){
		entidad1+=cuenta[i]*multiplicar[i+2];
	}
	
	entidad1= 11-(entidad1%11);
	
	if(entidad1==11){
		entidad1=0;
	}
	else if(entidad1==10){
		
		entidad1=1;
	}
	
	for (var i=10;i<=19;i++){
		entidad2+=cuenta[i]*multiplicar[i-10];
	}
	entidad2=11-(entidad2%11);
	
	if(entidad2==11){
		entidad2=0;
	}
	
	else if(entidad2==10){
		
		entidad2=1;
	}
	if (entidad1==cuenta[8] && entidad2==cuenta[9]){
		return true;
	}else{
		return false;	
	}
	
}

 
//solo numeros
function SoloNumeros(e){
		var evento=e|| windows.event;
		var c = evento.charCode || evento.keyCode;
		
		if (c < 48 || c > 57){
			return false;
		}
		else{
			return true;
		}		
		
}

//validar checkbox
function ValidoBox(opcion){
	 var elegidos=0;
    for(var i=0 ; i < opcion.length ; i++)
        if(opcion[i].checked){
            elegidos++;
        }
    
    if(elegidos<3)
        return false;
    else 
        return true;
}

//valido radios

function ValidoRadio(opcion){

    for(var i=0 ; i < opcion.length ; i++)
        if(opcion[i].checked) return opcion[i].value;
}
 
//Permite solo Numeros decimales con punto
 function SoloNumerosDecimal(e){
		var evento=e || windows.event;
		var c= evento.charCode || evento.keyCode;
		
		if ((this.value.length==0) && (c==46) || ( (this.value.indexOf('.')>=0) && (c==46) )|| (c!= 46 && c> 31 && (c < 48 || c > 57)) ){
			return false;
		}
        return true;		
		
	}
	
//pasa solo letras
function SoloLetrasyEspacios(e){
	var evento=e || windows.event;
	var c= evento.charCode || evento.keyCode;
	
  if (c>=97 && c<=122|| c>=65 && c<=90 || c==32){
	return true;
  }
  else{
	return false;
  }
  
 }
 
//Pasa a mayusuclas
 function aMayuscula(e) {
	 
         this.value=this.value.toUpperCase();
    }
	
//para rellenar el sugerir	
var cont=0;
function sugerir(e){
	var f="Todo esa bien. ";
	this.value+=f[cont%f.length];
	cont++;
	
return false;
}
	
//funcion de validar fecha
function validaFecha(dia,mes,anyo){
				
				var dia=document.getElementById("fn_dia").value;
				var mes=document.getElementById("fn_mes").value - 1;
				var anyo=document.getElementById("fn_anyo").value;
				
				var valor= new Date(anyo,mes,dia);
				
				
				if (dia!=valor.getDate() || mes!=valor.getMonth() || anyo!=valor.getFullYear()){
					
					return false;
				}
				else{
					return true;
				}
			}
//funcion comprar fechas
function compararFechas(fecha){
				var hoy = new Date();
				var dia_hoy = hoy.getDate();
				var mes_hoy = hoy.getMonth();
				var anyo_hoy = hoy.getFullYear();
				var dia_fecha = fecha.getDate();
				var mes_fecha = fecha.getMonth();
				var anyo_fecha = fecha.getFullYear();
				
				if((anyo_hoy - anyo_fecha) < 18){
					return false;
				}
				else if((anyo_hoy - anyo_fecha) == 18 &&  mes_hoy < mes_fecha){
					
					return false;
				}
				else if((anyo_hoy - anyo_fecha) == 18 && mes_fecha == mes_hoy &&  dia_hoy < dia_fecha){
					return false;
				}
				else
					return true;
			}	
//funcion de DNI 
function esDNI (dni)
		{
			var letras = "TRWAGMYFPDXBNJZSQVHLCKET";
			var numero=dni.substring(0,8);
			var letraDni=dni.substring(8);
			if (numero.length!=8)
				return false;
			else {
				letraCalculada=numero%23;
				if(letras.charAt(letraCalculada)!=letraDni)
					return false;
			}
			return true;
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
//para limpiar el formulario
function Limpiar(e) {
       document.getElementById("info_"+this.id).innerHTML="";
    }