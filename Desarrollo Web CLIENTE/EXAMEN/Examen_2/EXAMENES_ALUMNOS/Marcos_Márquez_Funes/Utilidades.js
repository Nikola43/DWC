

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
		function aMayusculas(elEvento)
		{
			this.value=this.value.toUpperCase();
		}
		function letraYNumero(elEvento)
		{
			var evento=elEvento || windows.event;
			var codigoCaracter = evento.charCode || evento.keyCode;
			if((codigoCaracter>=97) && (codigoCaracter<=122)|| (codigoCaracter==241)) 
				return true;
			if(((codigoCaracter>=65) && (codigoCaracter<=90))||(codigoCaracter==209))
				return true;
			if(codigoCaracter >=48 && codigoCaracter <= 57)
				return true;
			return false;
			
		}
		function PermiteSoloLetrasEspacios(elEvento)
		{
			var evento=elEvento || windows.event;
			var codigoCaracter = evento.charCode || evento.keyCode;
			if((codigoCaracter>=97) && (codigoCaracter<=122)|| (codigoCaracter==241)) //||((this.value>=65) && (this.value<=90))||(this.value==209) || (this.value==32))
				return true;
			if(((codigoCaracter>=65) && (codigoCaracter<=90))||(codigoCaracter==209))
				return true;
			if (codigoCaracter==32)
				return true;
		
			
			return false;
		}
		function aMayuscula(e) {
	 
         this.value=this.value.toUpperCase();
    }
		function validarDNI (dni)
		{
			var letras = "TRWAGMYFPDXBNJZSQVHLCKET";
			var numero=dni.substring(0,8);
			var letraDni=dni.substring(8).toUpperCase();
			if (numero.length!=8)
				return false;
			else {
				letraCalculada=numero%23;
				if(letras.charAt(letraCalculada)!=letraDni)
					return false;
			}
			return true;
		}
		function soloNumeros(eve){
		var evento=eve || windows.event;
		var codigoCaracter = evento.charCode || evento.keyCode;
		
	    if(codigoCaracter >=48 && codigoCaracter <= 57 || codigoCaracter == 8 || codigoCaracter == 46 || (codigoCaracter >= 37 && codigoCaracter <= 40)) {
			return true;
		}
		else
			return false;
	
		}
		function HanSoloNumerosDecimal(elEvento){
			var evento=elEvento || windows.event;
			var codigoCaracter = evento.charCode || evento.keyCode;
			if (codigoCaracter==44) {
				if ((this.value.indexOf(',')>=0) || this.selectionStart!=1) 
					return false;
			}
			if (codigoCaracter != 44 && codigoCaracter > 31 && (codigoCaracter < 48 || codigoCaracter > 57))
				 return false;
			if (this.selectionStart==1 && codigoCaracter!=44)
				return false;
			if (this.selectionStart==0 && codigoCaracter==48)
				return false;
			return true;	
		}

		function CuentaCorriente(numCuenta){
				multi = new Array(1, 2, 4, 8, 5, 10, 9, 7, 3, 6); 
				var primerDigito = 0;
				var segunDigito = 0; 
				
				for (var i=0; i<=7; i++) {
					primerDigito += numCuenta[i] * multi[i+2]; 
				}
				primerDigito = 11 - (primerDigito % 11); 
				
				
				if (primerDigito == 11){ 
					primerDigito = 0; 
				}
				else if (primerDigito == 10){
					primerDigito = 1; 
				}
				
				
				for (var i=10; i<=19; i++){
					segunDigito += numCuenta[i] * multi[i-10]; 
				}
				segunDigito = 11 - (segunDigito % 11); 
				
				
				if (segunDigito == 11){
					segunDigito = 0;
				} 
				
				else if(segunDigito == 10){
					segunDigito = 1; 	
				} 
				
				if (primerDigito==numCuenta[8] && segunDigito==numCuenta[9]){
					return true;
				}else {
					return false;
				}
			
		}
		function noRepetirSimbolo(elEvento){
				var evento=elEvento || windows.event;
				var codigoCaracter = evento.charCode || evento.keyCode;
				console.log(codigoCaracter);
				if (codigoCaracter==42) {
					if ((this.value.indexOf('*')>=0)) 
						return false;
				}
				if (codigoCaracter==95) {
					if ((this.value.indexOf('_')>=0)) 
						return false;
				}
				if (codigoCaracter==64) {
					if ((this.value.indexOf('@')>=0)) 
						return false;
				}
				if (codigoCaracter==38) {
					if ((this.value.indexOf('&')>=0)) 
						return false;
				}
				if (codigoCaracter==36) {
					if ((this.value.indexOf('$')>=0)) 
						return false;
				}
				if (codigoCaracter==37) {
					if ((this.value.indexOf('%')>=0)) 
						return false;
				}
				if (codigoCaracter==63) {
					if ((this.value.indexOf('?')>=0)) 
						return false;
				}
				if (codigoCaracter==35) {
					if ((this.value.indexOf('#')>=0)) 
						return false;
				}
				return true;	
		}
		function compararFechas(fecha){
            var hoy = new Date();
            var dia_hoy = hoy.getDate();
            var mes_hoy = hoy.getMonth()+1;
            var anio_hoy = hoy.getFullYear();
            var dia_fecha = fecha.getDate();
            var mes_fecha = fecha.getMonth()+1;
            var anio_fecha = fecha.getFullYear();
			console.log("fecha usuario "+dia_fecha+" mes "+mes_fecha+" año "+anio_fecha+" fecha SYSDATE"+dia_hoy+" mes "+mes_hoy+" año "+anio_hoy );
            if((anio_hoy - anio_fecha) < 18){
				console.log("entra por año");
                return false;
            }
            else if((anio_hoy - anio_fecha) == 18 &&  mes_hoy < mes_fecha){
			console.log("entra por mes");
                return false;
            }
            else if((anio_hoy - anio_fecha) == 18 && mes_fecha == mes_hoy &&  dia_hoy < dia_fecha){
			console.log("entra por dia");
                return false;
            }
			else
				return true;
			
        }  
	