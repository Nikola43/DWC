function creaTablaTotal(aTabla,icol) {  
    var tabla = document.createElement("table");
    tabla.border = 1;
    var fila,td;
    var numero=2-1;
    var suma;
    for (var i = 0; i <=aTabla.length; i++){
        fila = document.createElement("tr");

        for (var j = 0; j< aTabla.length; j++){

            td = document.createElement("td");

            if(i == aTabla.length){//si i es igual que la longitud hara uno extra 


                if(numero==j){//si el numero es == a la posicion j modifica ese texto
                   td.innerText=suma;

                }
            }else{

                suma+=aTabla[i][numero];
                td.innerText = aTabla[i][j];//sino pone el valor del array
            }


            fila.appendChild(td)
        }
        tabla.appendChild(fila);

    }

return tabla;
}
