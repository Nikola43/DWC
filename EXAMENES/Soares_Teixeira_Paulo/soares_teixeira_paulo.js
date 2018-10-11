function creaTablaTotal(aTabla, iCol) {
    // variable para almacenar la suma de la columna
    var suma = 0;

    // dimensiones de la tabla
    var filas = aTabla.length;
    var columnas = aTabla[0].length;

    // creamos una tabla
    var table = document.createElement("table");
    table.border = 2;

    // variables para almacenar filas y columas
    var tr, td;

    // recorremos la matriz
    for (var i = 0; i < filas; i++) {
        tr = document.createElement("tr");
        table.appendChild(tr);

        for (var j = 0; j < columnas; j++) {
            td = document.createElement("td");
            td.innerText = aTabla[i][j].toString();
            tr.appendChild(td);
        }
        suma += aTabla[i][iCol];
    }

    // creamos una fila donde se almacena el resultado
    tr = document.createElement("tr");
    table.appendChild(tr);

    // recorremos todas las columas
    for (var k = 0; k < aTabla.length; k++){
        td = document.createElement("td");
        // si k esta en la posicion de la columa seleccionada le metemos la suma
        k === iCol ? td.innerText = suma.toString() : td.innerText = " ";
        tr.appendChild(td);
    }
    return table;
}

function aDeTabla(tabla) {

	var arrayDevuelta = [[]];
    var miTabla = document.getElementById(tabla);

    console.log(miTabla.children);


    // si no encuentra ningun elemento con ese id
    // entonces el parametro no es un id
    if (miTabla === null){
        var tablaID = tabla.id;
            if (tablaID !== undefined){
                for (var i = 0; i < tabla.length; i++){
                    for (var j = 0; j < tabla[0].length; j++){
                        //arrayDevuelta[i][j] = tabla.get
                    }
                }
            }
        }
return arrayDevuelta;
};