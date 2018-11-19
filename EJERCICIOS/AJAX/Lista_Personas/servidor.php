<?php
//  Indicamos que el resultado va a ser en json:
header('Content-Type: application/json');

//  Si no se recibe el parámetro servicio. NOS VAMOS!!!!
if (!isset($_GET["servicio"]))
	return;

include("../../../conexion/conexion.php");
//  Para poder obtener el resultset en forma de array asociativo
//  debemos de usar la función Conectar2:
$conn = Conectar2("ajax", "root", "");


$servicio = -1;
if (isset($_GET["servicio"]))
  $servicio = $_GET["servicio"];

switch ($servicio) {
    case "listar":
        listadoPersonas();
        break;
    case "insertar":
        insertarPersona();
				listadoPersonas();
        break;
    case "borrar":
        borrarPersona();
				listadoPersonas();
        break;
}

function listadoPersonas() {
	global $conn;
	$sc = "Select * From personas Order By ID";
	$rs = Consulta($conn, $sc);
	//  Devolvemos la filas del cuerpo de la tabla:
	print json_encode($rs->fetchAll(PDO::FETCH_ASSOC));
}

function insertarPersona() {
	global $conn;
	$dni = -1;
	if (isset($_GET["DNI"]))
		$dni = $_GET["DNI"];
	$nombre = -1;
	if (isset($_GET["NOMBRE"]))
		$nombre = $_GET["NOMBRE"];
	$apellidos = -1;
	if (isset($_GET["APELLIDOS"]))
		$apellidos = $_GET["APELLIDOS"];
	//  La consulta de INSERCION:
	$sc = "Insert into personas(DNI, NOMBRE, APELLIDOS) Values('$dni', '$nombre', '$apellidos')";
	$rs = Consulta($conn, $sc);
}

function borrarPersona(){
	global $conn;
	$id = -1;
	if (isset($_GET["id"]))
		$id = $_GET["id"];
	//  La consulta de ELIMINACIÓN:
	$sc = "Delete From personas Where ID = $id";
	$rs = Consulta($conn, $sc);
}

?>




