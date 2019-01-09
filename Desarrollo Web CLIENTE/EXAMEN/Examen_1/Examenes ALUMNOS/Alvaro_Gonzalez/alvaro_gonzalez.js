function creaTablaTotal(aTabla, iCol) {

    if (iCol >= 0 && iCol < aTabla.length) {  //  Al preguntar esto has confundido dimensión de filas con dimensión de columnas. Y de ahí que no te funcione para la última columna.
        // variables
        var tabla = document.createElement("table");
        var fila;
        var columna;
        var resTotal = 0;

        // creo la tabla a partir del array
        for (var i = 0; i < aTabla.length; i++) {
            fila = document.createElement("tr");

            for (var j = 0; j < aTabla[i].length; j++) {
                columna = document.createElement("td");
                columna.innerHTML = aTabla[i][j];
                fila.appendChild(columna);

                if (iCol == j) {
                    resTotal += aTabla[i][j];
                }

            }
            tabla.appendChild(fila);
        }

        // Fila adicional
        fila = document.createElement("tr");
      //  for (var i = 0; i < array[0].length; i++) {
				//  Que es array ????  te has confundido con aTabla
				for (var i = 0; i < aTabla[0].length; i++) {
					
            columna = document.createElement("td");
            if (i == iCol) {
                columna.innerHTML = resTotal;
            }
            fila.appendChild(columna);
        }
        tabla.appendChild(fila);

        //console.log(resTotal);
				console.log(tabla);
        return tabla;
    }

}

function aDeTabla(tabla) {

    var array = [];
    var arrayTemp = [];
    var filas;
    var columnas;

    // Obtenemos la tabla
    var table = document.getElementById(tabla) || tabla;
  //  console.log(table);


    // Si la tabla existe
    if (table instanceof Object) {
        // Obtenemos las filas
        filas = table.getElementsByTagName("tr");

        for (var i = 0; i < filas.length; i++) {
            // Obtenemos columnas
            columnas = filas[i].getElementsByTagName("td");

            for (var j = 0; j < columnas.length; j++) {
                // vamos añadiendo numeros a un array temporal
                arrayTemp.push(parseFloat(columnas[j].innerText));
								//  Asumes que la tabla debe ser numérico, y NO tiene porque.
								//  Eso hace que sólo devuelva los valores numéricos.
            }

            // añado el arrayTemp al array definitivo
            array.push(arrayTemp);
            arrayTemp = [];
        }
    }
    return array;
}

function Inserta_Fila(tabla, aFila, npos) {

    var fila = document.createElement("tr");
    var columna;
    var nodeFila = tabla.getElementsByTagName("tr");

    for (var i = 0; i < aFila.length; i++) {
        columna = document.createElement("td");
        columna.innerHTML = aFila[i];
        fila.appendChild(columna);
        
    }
    nodeFila[npos].parentNode.insertBefore(fila, nodeFila[npos]);

}
