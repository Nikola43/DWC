<!DOCTYPE html>
<html>
  <head>
  	<meta charset="UTF-8"/>
    <title>Ejercicio Tablas. CREAR TABLAS</title>

    <script type="text/javascript">

      
     function creaTablaTotal(aTabla, iCol){

       var tabla = document.createElement("table");
	  	tabla.border = 1;
		  var tr, td;
		  tabla.appendChild(creaFila(aTabla[0]));

      var filaSuma = document.createElement("tr");
		  var colum;
			
      for(var i=0; i<aTabla.length; i++){
        td = document.createElement("td");
				var suma = aTabla[i][iCol];
				var suma2 = aTabla[i][iCol];
				var suma3 = aTabla[2][iCol];
				var suma4 = aTabla[3][iCol];
				var sumaTotal = suma + suma2 + suma3 + suma4;
				if(i==iCol){
        	td.innerText = "La suma es:" + sumaTotal;
				}
        filaSuma.appendChild(td);
      }

		  for (var i = 1; i<aTabla.length; i++){
			  tabla.appendChild(creaFila(aTabla[i]));
		  document.getElementById("divtabla").innerHTML = "";
      tabla.appendChild(filaSuma);
          document.getElementById("divtabla").appendChild(tabla);
      }
    
					function creaFila(aFila){
						var fila = document.createElement("tr");
						var td;
							for(var i=0; i<aFila.length; i++){
								td = document.createElement("td");
								td.innerText = aFila[i];
								fila.appendChild(td);
							}
						return fila;
						}	
      }

   function aDeTabla(tabla){

			for(var i=0; i<tabla.length; i++){

				

				for(var j=0; j<tabla.length; j++){



				}

			}
		}

		function Insertar_Fila(tabla,aFila,npos){



		}


    
	  
	  
	  
	  
	  window.onload = function(){
	//	document.getElementById("btGenerar").onclick = Generar_Tabla_V2;
		document.getElementById("btGenerar").onclick = function(){
			var miArray = [
				[1, 2, 3],
				[1, 2, 3],
				[1, 2, 3],
				[1, 2, 3]
			];

      var columnas = 2;
			

			creaTablaTotal(miArray, columnas);
			
		}
	  }
	  

	 
         
    </script>

  </head>

  <body>
  	<br>
  	<h2>Tablas. CREAR TABLAS</h2>

	<p>
      <button id="btGenerar">Generar Tabla</button>
	</p>

    <div id="divtabla">
    	Aquí se colocará la tabla que se cree dinámicamente con javascript
    </div>


  </body>
</html>
