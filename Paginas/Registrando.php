<?php
	$nom=$_POST["Nombre"];
	$tel=$_POST["telefono"];
	$ema=$_POST["email"];
	$edad=$_POST["edad"];
	$naci=$_POST["nacimiento"];
	$sex=$_POST["sexo"];
	
	include("Conexion.php");
	
	$consulta="INSERT INTO registro(nombre,telefono,email,edad,fechanacimiento,sexo) VALUES ('$nom','$tel','$ema','$edad','$naci','$sex')";
	$ejecutar_consulta=$conexion->query($consulta);
	
	if($ejecutar_consulta)
	{

		header("Location: ../index.php?reg=1");

	}
?>