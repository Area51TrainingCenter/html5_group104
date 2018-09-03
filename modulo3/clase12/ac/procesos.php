<?php
//print_r($_POST);
$usuario = $_POST["usuario"];
$password = $_POST["password"];
//echo "El usario es: ".$usuario." y el password es: ".$password;

if($usuario == "admin" and $password == "admin")
{
	//echo "true";
	echo "Acceso correcto";
}else{
	//echo "false";
	echo "Acceso denegado";
}
?>