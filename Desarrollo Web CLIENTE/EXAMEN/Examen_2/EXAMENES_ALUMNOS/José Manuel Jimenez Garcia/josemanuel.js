//******************************EXAMEN 2*************************************/


function ValidarFormularioExamen(){

    var bandera=true;//boooleano para comprobar los errores
     // nombre
     if(document.getElementById("nombre").value==0){
         document.getElementById("spnombre").innerHTML="INTRODUZCA NOMBRE";
         document.getElementById("nombre").focus();
        bandera=false;
     }
     else{
         document.getElementById("spnombre").innerHTML="";
     }
     // apellido
     if(document.getElementById("apellidos").value==0){
         document.getElementById("spapellidos").innerHTML="INTRODUZCA APELLIDOS";
         if(bandera){
            document.getElementById("apellidos").focus();
         }
         bandera=false;
     }else{
         document.getElementById("spapellidos").innerHTML="";
     }
     // dni
     var dni=document.getElementById("nif");
    
      if(calculardni(dni.value)){//si es correcto limpiaria el inf_dni en caso de equivocarme en el anterior envio
         document.getElementById("spnif").innerHTML="";
         if(bandera){
            document.getElementById("nif").focus();
         }
     }else{//si no es correcto el dni lo aviso
         document.getElementById("spnif").innerHTML="DNI ERRONEO";
         if(bandera){
            document.getElementById("nif").focus();
         }
         bandera=false;
     }

     //usuario- el filtro de mayusculas,numeros y otros caracteres lo hago en otra funcion 
        if(document.getElementById("usuario").value<5){
            document.getElementById("spusuario").innerHTML="MINIMO 5 CARACTERES";
            if(bandera){
                document.getElementById("usuario").focus();
             }
            bandera=false;
        }else{
            document.getElementById("spusuario").innerHTML="";
        }

        //clave
        var clave=document.getElementById("clave").value;
        var claveRepetida=document.getElementById("rep_clave").value;
        document.getElementById("spclave").innerHTML="";
        if(clave.length<8){
            document.getElementById("spclave").innerHTML="MINIMO 8 CARACTERES";
            if(bandera){
                document.getElementById("clave").focus();
             }
            bandera=false;
        }else if(!validarClave(clave)){

             document.getElementById("spclave").innerHTML="ALMENOS 1 LETRA MINUSCULA Y OTRA MAYUSCULA, UN NUMERO Y UNO SOLO DE ESTOS CARACTERES => * _ @ & $ % ? # ";
             if(bandera){
                document.getElementById("clave").focus();
             }
            bandera=false;
        }


        if(claveRepetida.length<8){
            document.getElementById("sprep_clave").innerHTML="NO ES LA MISMA CLAVE: MUY CORTA";
            if(bandera){
                document.getElementById("rep_clave").focus();
             }
            bandera=false;
        }else if(clave!=claveRepetida){
            document.getElementById("sprep_clave").innerHTML="NO COINCIDEN";
            if(bandera){
                document.getElementById("rep_clave").focus();
             }
            bandera=false;
        }else if(!validarClave(claveRepetida)){
            document.getElementById("sprep_clave").innerHTML="ALMENOS 1 LETRA MINUSCULA Y OTRA MAYUSCULA, UN NUMERO Y UNO SOLO DE ESTOS CARACTERES => * _ @ & $ % ? # ";
            if(bandera){
                document.getElementById("rep_clave").focus();
             }
           bandera=false;
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
                 document.getElementById("spsexo").innerHTML="SELECCIONE UNA OPCION ";
             }else{
                 document.getElementById("spsexo").innerHTML="";
             }
   //fecha
     var ano=document.getElementById("sel_fn_ano").value;
     var mes=document.getElementById("sel_fn_mes").value-1;
     var dia=document.getElementById("sel_fn_dia").value;
 
     var valor=new Date(ano,mes,dia);
 
     if(dia !=valor.getDate() || mes!=valor.getMonth() || ano!=valor.getFullYear()){
         document.getElementById("spf_nacimiento").innerHTML="la fecha no es correcta";
         
         bandera=false;
 
     }else{
         document.getElementById("spf_nacimiento").innerHTML="";
     }
 
   
    /*DEVOLVER EL BOOLEANO*/ return bandera; 
 
 }
//funcion para validar el usuario


function filtroUsuario(evento){
    var e=evento || window.event;
    var codigo=e.charCode;
   

    if((codigo >=69 && codigo <=90) || (codigo >=97 && codigo <=122) || (codigo>= 48)  && (codigo <= 57) )
    {
       return true;
    }
    else {
        return false;
    }
}

//funcion para validar la clave

function validarClave(claveValidar){
   
   

}

//*************FIN EXAMEN 2**************** */
