

function HanSoloLetrasConEspacios(elEvento){

	var evento = elEvento || window.event;
	var codigoCaracter = evento.charCode || evento.keyCode;
	
		if((codigoCaracter >= 65) && (codigoCaracter <= 90) || (codigoCaracter == 32) || (codigoCaracter >= 97) && (codigoCaracter <= 122)){
			return true;
		}else{
			return false;
		}
}

function AMayusculas(elEvento){

		var evento = elEvento || window.event;
		var codigoCaracter = evento.charCode || evento.keyCode;
		
			if((codigoCaracter < 48) || (codigoCaracter > 57)){
				this.value = this.value.toUpperCase();
				return true;
			}else{
				return false;
			}
}

function SoloNumeros(elEvento){

		var evento = elEvento || window.event;
		var codigoCaracter = evento.charCode || evento.keyCode;
		
			if((codigoCaracter >= 48) && (codigoCaracter <= 57)){
				return true;
			}else{
				return false;
			}
		
}

function verificarCheckbox(caja){
	var suma = 0;
	for (var i = 0;i < caja.length; i++) {
		
		if(caja[i].checked == true){
		suma++;
		}
	}
	if(suma == 0){
		return false;
		}else{
		return true;
		}
		 
}

function validarCCC(numeroCuenta){
	var multiplicadores_1 = new Array(4, 8, 5, 10, 9, 7, 3, 6);
	var multiplicadores_2 = new Array(1, 2, 4, 8, 5, 10, 9, 7, 3, 6);
	var entidadYOficina = 0;
	var nCuenta = 0;
	var dc = 0;
	var registro = 0; 
	for (i=0; i<=7; i++) 
	{
		entidadYOficina += parseInt(numeroCuenta.charAt(i)) * multiplicadores_1[i]; 
	}
	entidadYOficina = 11 - (entidadYOficina % 11); 
	if (entidadYOficina == 11){ 
		entidadYOficina = 0; 
	}else if (entidadYOficina == 10){
		entidadYOficina = 1;
	} 
	for (i=10; i<=19; i++){ 
		nCuenta += parseInt(numeroCuenta.charAt(i)) * multiplicadores_2[i-10]; 
	}
	nCuenta = 11 - (nCuenta % 11); 
	if (nCuenta == 11){ 
		nCuenta = 0;
	}else if (nCuenta == 10){ 
		nCuenta = 1;
	}
	for (i=8; i<=9; i++){
		dc += parseInt(numeroCuenta.charAt(i));
	}
	registro = entidadYOficina + "" + nCuenta;
	if(registro != dc){
		return false;
	}else{
		return true;
	}
}

function validarDni(dni){
	var numeros = dni.value.substr(0, 8);
	var letra = dni.value.substr(8, 1);
	var num = numeros % 23;
	letraNew ="TRWAGMYFPDXBNJZSQVHLCKET";
	letraNew = letraNew.substr(num, 1);
	if (letraNew != letra){
		return false;
	} 
}

function tiene_letras(texto){

var letras="abcdefghyjklmnñopqrstuvwxyz";
   texto = texto.toLowerCase();
   for(i=0; i<texto.length; i++){
      if (letras.indexOf(texto.charAt(i),0)!=-1){
         return true;
      }
   }
   return false;
}

function tiene_numeros(texto){

var numeros="0123456789";
   for(i=0; i<texto.length; i++){
      if (numeros.indexOf(texto.charAt(i),0)!=-1){
         return true;
      }
   }
   return false;
}

function tiene_letras_min(texto){

	var letras="abcdefghyjklmnñopqrstuvwxyz";
	   for(i=0; i<texto.length; i++){
		  if (letras.indexOf(texto.charAt(i),0)!=-1){
			 return true;
		  }
	   }
	   return false;
}

function tiene_letras_may(texto){

	var letras="ABCDEFGHIJKNLMÑOPQRSTUVWXYZ";
		for(i=0; i<texto.length; i++){
			if (letras.indexOf(texto.charAt(i),0)!=-1){
				return true;
			}
		}
		return false;
}

function caracter(texto){

	var caracteres="*_@&$%?#";
		for(i=0; i<texto.length; i++){
			if (caracteres.indexOf(texto.charAt(i),0)!=-1){
				return true;
			}
		}
		return false;
}

function compararFechas(fecha){
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
	if((anio_hoy - anio_fecha) == 18 & mes_fecha > mes_hoy){
		return false;
	}
	if((anio_hoy - anio_fecha) == 18 & mes_fecha >= mes_hoy & dia_fecha > dia_hoy){
		return false;
	}
}  

function ValidarNIF_V2(dni){
	var array = new Array(2);
	var numeros = dni.value.substr(0, 8);
	var letra = 0;
	if(dni.value.length > 9){
		letra = dni.value.substr(9, 1);
	}else{
		letra = dni.value.substr(8, 1);
	}
	var num = numeros % 23;
	letraNew ="TRWAGMYFPDXBNJZSQVHLCKET";
	letraNew = letraNew.substr(num, 1);
	if (letraNew != letra){
		array[0]=false;
		array[1]=letraNew;
		array[2]=dni+letraNew;
		return array;
	} 
	array[0]=true;
	array[1]=letra;
	array[2]=dni
	return array; 
}

function validacion_usuario(texto){

	var cadena="0123456789abcdefghyjklmnñopqrstuvwxyzABCDEFGHIJKNLMÑOPQRSTUVWXYZ";
	var caracteres="*_@&$%?#";
	var contCadena = 0;
	var contCaracter = 0;
	   for(i=0; i<texto.length; i++){
		  if (cadena.indexOf(texto.charAt(i),0)!=-1){
			contCadena++;
		  }
	   }
	   for(i=0; i<texto.length; i++){
		if (caracteres.indexOf(texto.charAt(i),0)!=-1){
			contCaracter++;
		}
	 }
	 if(contCadena > 0 && contCaracter <=1){
		 return true;
	 }
	   return false;
	}

