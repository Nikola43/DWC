/* Ejercicio 1*/
function creaTablaTotal (aTabla, iCol){
    var tabla = document.createElement("table");
    var tr,columna;

    for (var i=0; i<aTabla.length; i++) {
        tr = document.createElement("tr");
        columna;

        for (var i=0; i<Afila.length; i++) {
            columna = document.createElement("td");
            columna.innerText = Afila[i];
            tr.appendChild(columna);
        }

        tabla.appendChild(tr);
    }

    var suma=0;

    for (var i=0; i<aTabla.length; i++) {
        suma += aTabla[i][iCol];
    }

    var ultimaFila = document.createElement("tr");
    var colSuma = document.createElement("td");

    for (var i=0; i<aTabla[0].length; i++) {
        colSuma = document.createElement("td");

        if (i != iCol) {
            ultimaFila.appendChild(colSuma);
        }
        else {
            colSuma.innerText = suma;
            ultimaFila.appendChild(colSuma);
        }
    }

    tabla.appendChild(ultimaFila);

    return tabla;
} 

/* Ejercicio 2*/
function aDeTabla (tabla) {
    var existeTabla = tabla.getElementsByTagName("table");

    if (document.getElementById(tabla) == null || existeTabla == 0){
        return Array();
    }
    else {
       var misFilas = tabla.getElementsByTagName("tr");
       var misColumnas = misFilas.getElementsByTagName("td");
       misColumnas += misFilas.getElementsByTagName("th");

       var aTabla;

       for (var i=0; i<misFilas.length; i++){
           for (var j=0; j<misColumnas.length; j++) {
               aTabla[i][j] = misFilas[i] + misColumnas[j];
           }
       }
       
       return aTabla;
    }
}

/* Ejercicio 3*/
function Inserta_Fila (tabla, aFila, npos) {
    var tr = document.createElement("tr");
    var columna;

    for (var i=0; i<aFila.length; i++) {
      columna = document.createElement("td");
      columna.innerText = aFila[i];
      tr.appendChild(columna);
    }

    var filas = tabla.getElementsByTagName("tr");
    tabla.insertBefore(tr, filas[npos]);
}