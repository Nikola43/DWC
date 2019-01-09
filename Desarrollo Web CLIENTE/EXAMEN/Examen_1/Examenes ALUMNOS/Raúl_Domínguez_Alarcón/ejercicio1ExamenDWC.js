function creaTablaTotal(aTabla, iCol){

    tablaDevol = document.createElement("table");
    tablaDevol.border=1;
    
    if(iCol<0 || iCol>=aTabla[i].lenght){  //  ¿Que valor tiene i ?????
        return "Número de columnas no válido";
    }else{
        for(var i=0; i<aTabla.lenght;i++){
            tablaTR = document.createElement("tr");
            tablaDevol.appendChild(tablaTR);
            for(var j=0; j<aTabla.lenght[i];j++){
                tablaTD = document.createElement("td");
                tablaTD.innerText=j;
                tablaTR.appendChild(tablaTD);
                if(j==iCol){
                    tablaTD.innerText=j+i;
                    tablaTR.appendChild(tablaTD);
                }
            }
            
        }
        return tablaDevol;
    }
}

function aDeTabla(tabla){

}
