


 //------------ validacion del formulario:
 //        nombre-apellidos-dni-sexo-fecha-estatura-estado civil-cervecitas-cuenta corriente-sugerencia

//funcion necesaria para el dni
function calculardni(nif){


    var letras="TRWAGMYFPDXBNJZSQVHLCKET";
      if(nif.length != 9){
             return false;
         }
     var dni=nif.substring(0,8);//filtro y obtengo los numeros
     var letra=letras[dni%23];//calculo la letrita
        return (letras[dni%23]==nif[8].toUpperCase());//devolvemos false o true de este modo para ahorrar codigito
  
	
}
// el sugerir
var cont=0;
function sugerir(){
    var frase="VIVA EL BETI!!"//le he cambiado la frase para variar un poco
    
        this.value=this.value+frase[cont%frase.length];
    cont++;
    if(cont==frase.length){
        cont=0;
    }
    
    return false;
}

// COMIENZO DE LA VALIDACION

function ValidarFormulario(){

   var bandera=true;//boooleano para comprobar los errores
    // nombre
    if(document.getElementById("nombre").value<2){
        document.getElementById("info_nombre").innerHTML="MINIMO 2 CARACTERES";
       
        bandera=false;
    }
    else{
        document.getElementById("info_nombre").innerHTML="";
    }
    // apellido
    if(document.getElementById("apellidos").value<4){
        document.getElementById("info_apellidos").innerHTML="MINIMO 4 CARACTERES";
        bandera=false;
    }else{
        document.getElementById("info_apellidos").innerHTML="";
    }
    // dni
    var dni=document.getElementById("dni");
   
     if(calculardni(dni.value)){//si es correcto limpiaria el inf_dni en caso de equivocarme en el anterior envio
        document.getElementById("info_dni").innerHTML="";
    }else{//si no es correcto el dni lo aviso
        document.getElementById("info_dni").innerHTML="DNI ERRONEO";
    }
    //sexo
        
            opciones = document.getElementsByName("sexo");
        
            var seleccionado = false;
            for(var i=0; i<opciones.length; i++) {   //recorro todos los elementoS y miro si hay alguno chekeado 
              if(opciones[i].checked) {
                 seleccionado = true;
                 break;//en el momento que lo encuentre fuerzo el salir del bucle porque solo hay 
             }
            }
            
            if(!seleccionado) {
                bandera=false;
                document.getElementById("info_sexo").innerHTML="SELECCIONE UNA OPCION ";
            }else{
                document.getElementById("info_sexo").innerHTML="";
            }
  //fecha
    var ano=document.getElementById("f_ano").value;
    var mes=document.getElementById("f_mes").value-1;
    var dia=document.getElementById("f_dia").value;

    var valor=new Date(ano,mes,dia);

    if(dia !=valor.getDate() || mes!=valor.getMonth() || ano!=valor.getFullYear()){
        document.getElementById("info_fecha").innerHTML="la fecha no es correcta";
        
        bandera=false;

    }else{
        document.getElementById("info_fecha").innerHTML="";
    }

    //estatura- comprobar que tiene valores
    if(document.getElementById("estatura").value==0){
        document.getElementById("info_estatura").innerHTML="INTRODUZCA VALORES";
       
        bandera=false;
    }
    else{
        document.getElementById("info_estatura").innerHTML="";
    }
    
  //estado civil

     var indice=document.getElementById("estado_civil").selectedIndex;
         if( indice == null || indice == 0 ) {
            document.getElementById("info_estado_civil").innerHTML="SELECCIONE UNA OPCION";
           bandera=false;
         }else{
            document.getElementById("info_estado_civil").innerHTML="";
         }
    // cevadita riquina 
       var cevada = document.getElementsByName("bebidas");
        var numeroZumos=0;
        var elemento;
       
               for(var i=0; i<cevada.length; i++) {
                    elemento = cevada[i];
                    if(elemento.type == "checkbox" && elemento.checked==true) {
                            numeroZumos++;
                    }
                }  

        if(numeroZumos<3){
            document.getElementById("info_bebidas").innerHTML="SELECCIONE MAS ZUMITOS";
                bandera=false;
        }else{
            document.getElementById("info_bebidas").innerHTML="";
        }
        //cuenta corriente
        if(validaCCC(document.getElementById("ccc").value)){
            document.getElementById("info_ccc").innerHTML="";
        }else{
            document.getElementById("info_ccc").innerHTML="CUENTA NO EXISTE";
            bandera=false;
        }

   /*DEVOLVER EL BOOLEANO*/ return bandera; 

}
//****************************************FIN DE VALIDAR FORMULARIO*************************************************************** */

//funcion utilizada para validar ccc

function validaCCC(val){
    var banco = val.substring(0,4);
    var sucursal = val.substring(4,8);
    var dc = val.substring(8,10);
    var cuenta=val.substring(10,20);
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


//----------------solo permitir LETRAS y ESPACIOS
function PermiteSoloLetrasEspacios(evento){
    var e=evento || window.event;
    var codigo=e.charCode;

      if((codigo >=69 && codigo <=90) || (codigo >=97 && codigo <=122) || codigo==32) {
        
        return true;
       
       }
       else {
           
        return false;
       }
 }
  //  poner en mayuscula
 function Mayus(){
        
    this.value=this.value.toUpperCase();

}

// aqui compruebo que solo meto numeros y 1 coma en la estatura
function PermiteSoloNumerosDecimalesComaNoPrimeraPosSigno(e) {
    var c = e.charCode || window.event.keyCode;
 
    if (c == 44)
      return !((this.selectionStart == 0) || (this.value.indexOf(",") != -1) || ((this.selectionStart == 1) & (this.value[0] == "-"))) 
    else 
      if ((this.value.indexOf("-") != -1) && (this.selectionStart == 0))
          return false;
      return ((c >= 48)  && (c <= 57));
  }
 

