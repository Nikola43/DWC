
 window.onload=function(){
  document.getElementById("creaTablaTotal").onclick=creaTablaTotal;}

//------------EJERCICIO 1---------------------------------------------------------------------------------------------------------------------
function creaTablaTotal(aTabla,iCol){
        //aTabla es una matriz
        //iCol es un numero mayor que 0
      
    alert(aTabla.lenght);

    var TABLA=document.createElement("table");
    var td,tr;
    TABLA.border=1;
        for(var i=0;i<=aTabla.lenght;i++){
            tr=document.createElement("tr");
            TABLA.appendChild(tr);
            for(var j=0;j<=aTabla[i].lenght;j++){
                td=document.createElement("td");
                td.innerHTML=j;
                tr.appendChild(td);
            }
        }
        document.getElementById("tabla").innerHTML="";
        document.getElementById("tabla").appendChild(TABLA);



}
//------------ejercicio2--------------------------------------------------------------------------------------------------------------


function aDeTabla(tabla =0,id = ""){

    if(tabla instanceof Node){
            
    }
    else if( id==""){

    }else{
        return array[0];
    }
}

