function Generar_Tabla(ifila, iCol) {
    var tabla = document.createElement("table");
    tabla.border = 1;
    var tr;
    var td;

    //  Generamos la tabla dinámicamente y la mentemos en el div "tabla".
    for (var i = 0; i < ifila; i++){
        tr = document.createElement("tr");
        tabla.appendChild(tr);
        for (var j = 0; j < iCol; j++){
            td = document.createElement("td");
            td.innerText = "Fila: "+i + " Col "+j;
            tr.appendChild(td);
        }
    }
    document.getElementById("tabla").appendChild(tabla);
}


function crearFila(aFila) {
    var fila = document.createElement("tr");
    var td;

    for (var i = 0; i < aFila.length; i++){
        td = document.createElement("td");
        td.innerText = aFila[i];
        fila.appendChild(td);
    }
}
