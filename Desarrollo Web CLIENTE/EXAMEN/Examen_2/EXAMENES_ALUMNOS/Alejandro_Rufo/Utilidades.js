    /*
          ==========================================================
                                                                    
                                                                    
                                             ¶¶¶¶!                  
                 ¶¶¶¶¶¶¶¶¶                  ¶¶¶¶¶D                  
                 ¶¶¶   ¶¶¶¶`                ¶¶¶                     
                 ¶¶¶    ¶¶¶9  $¶¶    $¶¶  ¶¶¶¶¶¶¶    8¶¶¶¶¶         
                 ¶¶¶   `¶¶¶   %¶¶    §¶¶  ¶¶¶¶¶¶¶  ¶¶¶¶¶¶¶¶¶¶       
                 ¶¶¶¶¶¶¶¶¶    %¶¶    §¶¶`   ¶¶¶   `¶¶@    ¶¶¶~      
                 ¶¶¶¶¶¶¶¶@    %¶¶    §¶¶`   ¶¶¶   ¶¶¶     `¶¶¶      
                 ¶¶¶   ¶¶¶¶   §¶¶    §¶¶`   ¶¶¶   ¶¶¶     `¶¶¶      
                 ¶¶¶    ¶¶¶`  L¶¶@  .¶¶¶`   ¶¶¶   `¶¶¶    ¶¶¶       
                 ¶¶¶    )¶¶¶   ¶¶¶¶¶¶¶¶¶`   ¶¶¶    $¶¶¶¶¶¶¶¶`       
                                `9¶                   ?¶¶-          
                                                                    
                                                                    
          ==========================================================
    */ 


//======================================================
//CREA FILA: RETORNA UN TR
//======================================================
                  //array
function creaFila(aFila) {
//Función para crear un "td" con un array pasado por parametros,
//tendra tantas columnas como valores hay en el array

  var td;

  var tr = document.createElement("tr");

  for (var i = 0; i < aFila.length; i++) {
    //creamos columnas
    td = document.createElement("td");
    td.innerText = aFila[i];
    tr.appendChild(td);  
  }           
  return tr;
}


//======================================================
//CREA FILA V2: RETORNA UN TR
//======================================================

//Igual que la anterior pero con opción de cambiar el td por el th

/*Funcionamiento:

    Si se le añade el parámetro 'cabecera' en la llamada a continuación
  del array, cambiará los td por th creando así una cabecera
*/

function creaFilaV2(aFila, cabecera = ""){

  var tr = document.createElement("tr");
  var td;
  var tipo = "td";
  
  if (cabecera | cabecera.toString().toUpperCase() == "CABECERA")
    tipo = "th";
    for(var i=0; i<aFila.length; i++){
      td = document.createElement(tipo);
      td.innerText = aFila[i];
      tr.appendChild(td);
    }
  return tr;
} 

function aMayusculas () {
  this.value = this.value.toUpperCase();
}







/*=======================================
 Una forma de hacer la validación de dni
=======================================*/
function validarDNI(dni) {

  var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

  if(dni.length != 9){
    //console.log("False, introdugiste menos de 9 cifras "+dni.length);
    return false;
  }

  var numDNI = dni.substring(0,8);

  if(letras[numDNI%23] != dni[8].toUpperCase()){
      //console.log("False, introduciste "+ letra +" y es "+letras[numDNI%23]);
      return false;

    }else{

      //console.log("letra correcta, true "+letras[ 
      return true;

    }  
}


/*=======================================
 Otra forma de hacer la validación de dni
=======================================*/
/*
function validarDNI(dni) {

  var numDNI = "";
  var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
  var letra = dni[dni.length-1];
  //console.log(letra);

  if(dni.length != 9){
    //console.log("False, introdugiste menos de 9 cifras "+dni.length);
    return false;

  }else{

    for(var i = 0; i < dni.length-1; i++){
      numDNI += dni[i];
    }
      //console.log("num dni "+numDNI);
      //console.log("letras[numDNI%23]: "+letras[numDNI%23]);

    if(letras[numDNI%23] != letra.toUpperCase()){
      //console.log("False, introduciste "+ letra +" y es "+letras[numDNI%23]);
      return false;

    }else{

      //console.log("letra correcta, true "+letras[numDNI%23]);
      return true;

    }
  }

}*/

//  En este fichero recogeremos nuestras utilidades javascript.

//  CAJAS DE TEXTO (<input type="text" ...... >):
  //  e => Es el parámetro del evento onkeypress.
  



//  Permitir SOLO números con decimales. Separador es la coma o el punto (, o .):
function PermiteSoloNumerosDecimalesComaNoPrimeraPosSigno(e) {
  var c = e.charCode || window.event.keyCode;
  //  Permitir el signo menos ( - ) sólo uno y en la primera posición:
  if (c == 45) {
  if (this.value.indexOf("-") == -1)
    this.value = "-" + this.value;
    return false;
  }
  if ((c == 44) || (c == 46))
  return !((this.selectionStart == 0) || ((this.value.indexOf(",") != -1) || (this.value.indexOf(".") != -1)) || ((this.selectionStart == 1) & (this.value[0] == "-"))) 
  else 
  if (((this.value.indexOf(",") != -1) || (this.value.indexOf(".") != -1)) && (this.selectionStart == 0))
    return false;
    return ((c >= 48)  && (c <= 57));
}   



//Esta función solo deja escribir legras o espacios, si es el evento es otra revolverá false, en caso contrario true.
function limitaALetrasYEspacios(event){
    //console.log("llega a la función");
  
    if( ((event.keyCode != 32) && (event.keyCode < 65)) || ((event.keyCode != 32) && (event.keyCode > 122)) ) {

      return false;

    }else{

      return true;

    }
} 










function limitaALetrasMayusMinYNum(event){
    //console.log("llega a la función");
    //console.log(event.keyCode);
  
    if( ((event.keyCode >= 65) && (event.keyCode <= 122)) || ((event.keyCode >= 48) && (event.keyCode <= 57)) ){

      return true;

    }else{

      return false;

    }
} 

/*=======================================
Restringir a ciertos caracteres
=======================================

function PermitirCaracteres(event) {

    var ev = event.charCode || window.event.keyCode;

    console.log("llega");
    console.log("ev: "+ev);

    var a = false;//# --> 35          
    var b = false;//$ --> 36
    var c = false;//% --> 37 
    var d = false;//& --> 38
    var e = false;//* --> 42
    var f = false;//? --> 63
    var g = false;//@ --> 64
    var h = false;//_ --> 95

    console.log("valor de a: "+a);
    if ((ev== 35) && (a == false)){
        a = true;
        console.log("cambia a true: "+ev);
        return true;
    }
    else {
        console.log("NO cambia: "+ev);
        return false;
    }
}*/



















/*=======================================
 Permite escribir solo numeros
=======================================*/
function limitaANum(event){

  var evento = event || window.event;

   //var cajaTexto = document.getElementById("texto2").value;
    //var codCaracter = evento.keyCode;

    if((evento.keyCode >= 48) && (evento.keyCode <= 57))  {

      return true;

    }else {

      return false;
    }
}

/*=======================================
 Valida fecha
=======================================*/

function laFechaEsCorrecta(dia, mes, anyo){

  mes = mes -1;

  var valor = new Date(anyo, mes, dia);

  if( (dia != valor.getDate()) || (mes != valor.getMonth()) || (anyo != valor.getFullYear()) )
    return false;

 return true;

}



function LoQueYoDiga(e){

        var aEscribir = "Todo MUY BIEN ";

        //this.value = this.value+aEscribir[cont%aEscribir.length];//Si se utiliza esta opción se descomentara el cont y se hará una varible cont global.
        this.value = this.value+aEscribir[this.selectionStart%aEscribir.length];
        //this.value = this.value+aEscribir[this.selectionStart%aEscribir.length];

        //cont++;//contador

        return false;

      }


      function validarCuentaCorriente(num){

        //var evento = event || window.event;
       // console.log("llega");

        var cifra1 = 0;
        var resto1 = 0;
        var entidad = "" ;
        var oficina = "" ;

        var cifra2 = 0;
        var resto2 = 0;
        var nCuenta = "" ;     

        if(num.length != 20){

          //son necesarias las 20 cifras sin separación alguna
          return false;
        }

        
        for(var i = 0; i<num.length; i++){

          //capturamos las 4 primeras cifras, equivalentes a la ENTIDAD.
          if(i <= 3){
            entidad += num[i];
          }

          //capturamos las 4 segundas cifras, equivalentes a la OFICINA.
          if((i > 3) && (i <= 7)){
            oficina += num[i];
          }

          //capturamos las 10 últimas cifras, equivalentes al numero de cuenta.
          if(i > 9){
            nCuenta += num[i];
          }
          
        }

          //OBTENER LA PRIMERA CIFRA DE CONTROL

            //La primera cifra de la entidad se multiplica por 4.
            cifra1 += (entidad[0] * 4);
            //La segunda cifra de la entidad se multiplica por 8.
            cifra1 += (entidad[1] * 8);
            //La tercera cifra de la entidad se multiplica por 5.
            cifra1 += (entidad[2] * 5);
            //La cuarta cifra de la entidad se multiplica por 10.
            cifra1 += (entidad[3] * 10);


            //La primera cifra de la oficina se multiplica por 9.
            cifra1 += (oficina[0] * 9);
            //La segunda cifra de la oficina se multiplica por 7.
            cifra1 += (oficina[1] * 7);
            //La tercera cifra de la oficina se multiplica por 3.
            cifra1 += (oficina[2] * 3);
            //La cuarta cifra de la oficina se multiplica por 6.
            cifra1 += (oficina[3] * 6);

            //console.log("cifra1: "+cifra1);
            //Al llegar aquí todos los resultados estan sumados en la variable cifra1.

            //Se divide entre 11 y nos quedamos con el resto de la división.
            resto1 = (cifra1%11);
            //A 11 le quitamos el resto anterior, y ese el el primer dígito de control, con la salvedad de que si nos da 10, el dígito es 1, y si nos da 11, el dígito es 0.</p>
            cifra1 = Math.abs(11 - resto1);

            if(cifra1 == 10)
              cifra1 = 1;

            if(cifra1 == 11)
              cifra1 = 0;

            //console.log(entidad);
            //console.log(oficina);
            //console.log("resto1 : "+resto1);
            //console.log(4+8+5+10+9+7+3+6);
            //console.log("cifra1 : "+cifra1);  

          //OBTENER LA SEGUNDA CIFRA DE CONTROL(se obtiene con los dígitos de la derecha del D.C.)

            //La primera cifra del numero de cuenta se pultiplica por 1
            cifra2 += (nCuenta[0] * 1);
            //La primera cifra del numero de cuenta se pultiplica por 2
            cifra2 += (nCuenta[1] * 2);
            //La primera cifra del numero de cuenta se pultiplica por 4
            cifra2 += (nCuenta[2] * 4);
            //La primera cifra del numero de cuenta se pultiplica por 8
            cifra2 += (nCuenta[3] * 8);
            //La primera cifra del numero de cuenta se pultiplica por 5
            cifra2 += (nCuenta[4] * 5);
            //La primera cifra del numero de cuenta se pultiplica por 10
            cifra2 += (nCuenta[5] * 10);
            //La primera cifra del numero de cuenta se pultiplica por 9
            cifra2 += (nCuenta[6] * 9);
            //La primera cifra del numero de cuenta se pultiplica por 7
            cifra2 += (nCuenta[7] * 7);
            //La primera cifra del numero de cuenta se pultiplica por 3
            cifra2 += (nCuenta[8] * 3);
            //La primera cifra del numero de cuenta se pultiplica por 6
            cifra2 += (nCuenta[9] * 6);

            //console.log("cifra2: "+cifra2);
            //Al llegar aquí todos los resultados estan sumados en la variable cifra2.

            //Se divide entre 11 y nos quedamos con el resto de la división.
            resto2 = (cifra2%11);
            //A 11 le quitamos el resto anterior, y ese el el primer dígito de control, con la salvedad de que si nos da 10, el dígito es 1, y si nos da 11, el dígito es 0.</p>
            cifra2 = Math.abs(11 - resto2);

            if(cifra2 == 10)
              cifra2 = 1;

            if(cifra2 == 11)
              cifra2 = 0;

            //console.log(nCuenta);
            //console.log("resto1 : "+resto2);
            //console.log(1+2+4+8+5+10+9+7+3+6);
            //console.log("cifra2 : "+cifra2);



            if((num[8] == cifra1) || (num[1] == cifra2)){

              //console.log("Mola");
              return true;

            }else if((num[8] != cifra1) || (num[1] != cifra2)){

              //console.log("No Mola");
              return false;

            } 
      }


