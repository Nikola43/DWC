    <script type="text/javascript">

    function aDeTabla(tabla){   


    //============================     ARRAY DE VALORES     ================================
        var valores = ["cuarenta", "Hola", "mecedora", "menganito", "esternocleidomastoideo", "aquiles", "mustang", "linux", "microsoft", "manzanadeapple", "lacasito", "colacao", "adidas", "nike", "maquina", "personaje", "amadeo", "queteveo", "botella", "popelle", "ginés", "trece", "sinonimo", "antonimo", "cervantes", "meninas", "velazquez"];

    

    //=====================================   LA TABLA  ====================================

        //Creo la VARIABLE tabla que es un objeto "table" / borde de la misma = 1.
        var tabla = document.createElement("table");
        tabla.border = 1;

        //Declaración de variables tr y td.
        var tr, td;

            //crear tr (COLUMNAS) | quiero que se construyan tantas columnas como valores del array tenga.
            for (var i = 0; i < valores.length; i++) {
                tr = document.createElement("tr");
                tabla.appendChild(tr);

                //crear td (FILAS) | quiero que se construya una ÚNICA FILA (para mostrar todos los valores hacia abajo).
                for (var a = 0; a < 1; a++){
                    td = document.createElement("td");
                    td.innerText = valores[i]; 
                    tabla.appendChild(td);
                }
            document.getElementById('tabla').innerHTML = "";
            document.getElementById('tabla').appendChild(tabla);

            }
    }

    </script>