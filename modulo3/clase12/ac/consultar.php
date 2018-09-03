<?php
$objeto1 = array();
$objeto1["dni"] = "42890190";
$objeto1["nombre"] = "Alonso";
$objeto1["apellido"] = "Perez";
$objeto1["fecha"] = "1985-03-27";
$objeto1["genero"] = "masculino";

//caso de un solo objeto
//echo json_encode($objeto1);

$objeto2 = array();
$objeto2["dni"] = "46554556";
$objeto2["nombre"] = "Jose";
$objeto2["apellido"] = "Aro";
$objeto2["fecha"] = "1990-10-01";
$objeto2["genero"] = "masculino";

$listado = array();

$listado[]=$objeto1;
$listado[]=$objeto2;

//caso de una lista de objetos
echo json_encode($listado);
?>