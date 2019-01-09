    //ejercicio 1
    function creaTablaTotal(aTabla,iCol) {
        var fila=0;
        var columna=0;
        var suma=0;
        //creo una tabla
        var tabla = document.createElement("table");
        tabla.border=1;
        //recorro el array de tabla y voy introduciendo datos
      	for(i=0;i<aTabla.length;i++){
            fila=document.createElement("tr");
            tabla.appendChild(fila);
            for( j=0;j<aTabla[0].length;j++){
                columna=document.createElement("td");
                columna.innerText=aTabla[i][j];
                fila.appendChild(columna);
                if(j==iCol){
                    suma+=aTabla[i][j];
                }
               
            }
            tabla.appendChild(fila);
        }

        //para la fila adicional hasta la ultima columna el espacio tiene que quedar en blanco
        //hago un for y recorro hasta iCol-1 y escribo espacios en blanco y cuando sale del for creo una columna donde meto el valor de la suma
        fila=document.createElement("tr");
        for( j=0;j<aTabla[0].length;j++){
            columna=document.createElement("td");
            
            if(j==iCol){
               
                columna.innerText=suma;
                fila.appendChild(columna);
                tabla.appendChild(fila);
            }else{
                columna.innerText="";
                fila.appendChild(columna);
                tabla.appendChild(fila);
            }
        }
        return tabla;
      }