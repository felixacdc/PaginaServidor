<?php
	function conectarse()
	{
		$servidor="localhost";
		$usuario="root";
		$password="";
		$bd="paginaserver";
		$conectar= new mysqli($servidor,$usuario,$password,$bd);

		return $conectar;
	}

	$conexion=conectarse();

?>