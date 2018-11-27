<?php
header('Content-Type: application/json');
include("conexion.php");
$conn = Conectar2("personas", "root", "paulo1994");

$datos = file_get_contents('php://input');
$objeto=json_decode($datos);

if($objeto != null) {
  switch($objeto->servicio) {
    case "listar":
    	print json_encode(listadoPersonas());
      break;
    case "insertar":
      insertarPersona($objeto);
			print json_encode(listadoPersonas());
      break;
    case "borrar":
      borrarPersona($objeto->ID);
			print json_encode(listadoPersonas());
      break;
		case "modificar":
			modificarPersona($objeto);
			print json_encode(listadoPersonas());
			break;

		case "selPersonaID":
			print json_encode(selPersonaID($objeto->ID));
	}
}

function listadoPersonas() {
	global $conn;
	try {
		$sc = "Select * From personas Order By ID";
		$stm = $conn->prepare($sc);
		$stm->execute();
		return ($stm->fetchAll(PDO::FETCH_ASSOC));
	} catch(Exception $e) {
		die($e->getMessage());
	}
}

function insertarPersona($objeto) {
	global $conn;
	try {
		$sql = "INSERT INTO personas(DNI, NOMBRE, APELLIDOS) VALUES (?, ?, ?)";	
		$conn->prepare($sql)->execute(
			array(
				$objeto->DNI,
				$objeto->NOMBRE,
				$objeto->APELLIDOS
				)
			);
		return true;
	} catch (Exception $e) {
			die($e->getMessage());
			return false;
	}
}

function borrarPersona($id){
	global $conn;
	try {
		$sql = "Delete From personas Where ID = ?";	
		$conn->prepare($sql)->execute(array($id));
		return true;
	} catch (Exception $e) {
			die($e->getMessage());
			return false;
	}
}

function modificarPersona($objeto) {
	global $conn;
	try {
		$sql = "UPDATE personas SET 
							DNI				= ?,
							NOMBRE		= ?, 
							APELLIDOS	= ?
						WHERE ID = ?";
		$conn->prepare($sql)->execute(
		array(
			$objeto->DNI,
			$objeto->NOMBRE,
			$objeto->APELLIDOS,
			$objeto->ID
			) 
		);
		return true;
	} catch (Exception $e) {
		die($e->getMessage());
		return false;
	}
}

function selPersonaID($id) {
	global $conn;
	try {
		$sc = "Select * From personas Where ID = ?";
		$stm = $conn->prepare($sc);
		$stm->execute(array($id));
		return ($stm->fetch(PDO::FETCH_ASSOC));
	} catch(Exception $e) {
		die($e->getMessage());
	}	
}


?>




