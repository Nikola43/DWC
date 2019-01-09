    <script type="text/javascript">
      

    

                      /*array*/
     function creaFila(aTabla, iCol) {
  
          //variables
          var td;
          
          var table = document.createElement("table");
            //creamos la fila -- (tr)
            var tr = document.createElement("tr");                  

              for (var i = 0; i < aTabla.length; i++) {
              //creamos columnas -- (td)

                for (var j = 0; j < iCol; j++) {

                  td = document.createElement("td");
                  td.innerText = aTabla[i];
                  tr.appendChild(td);  
                }
              }   

            table.appendChild(tr);  

        return table;

      }
    
    </script>