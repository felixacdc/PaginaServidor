<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Servidor</title>
	<meta name="viewport" content="width=device-width, inicial-scale=1.0">
	<link rel="icon" href="img/logo.ico">
	<link rel="stylesheet" href="css/style.css">
	<link rel="stylesheet" href="css/css.css">
    <link href="css/carousel.css" rel="stylesheet">
	<script src="js/jquery-1.9.1.min.js"></script>
	<script type="text/javascript">
	    function mensajeregistro(){
			$("#alert").fadeIn(1000);
		    $("#alert").delay(2000).fadeOut();
		  }

	</script>
	<?php
		session_start();
		error_reporting(E_ALL ^ E_NOTICE ^ E_WARNING);
		if($_SESSION["reg"]==true)
		{
			echo "
				<div class='ContAlert' id='alert'>
					<div class='alert alert-success'>
					 	<h4>Notificacion!!</h4>
					 	Te has Registrado Correctamente
					</div>
				</div>";
			session_start();	
			session_destroy();
	?>
	<script>
		mensajeregistro();
	</script>
	<?php
		}
	?>
</head>
<body>


	
	<div class="site-wrapper">
      <div class="site-wrapper-inner">
		      <div class="navbar-wrapper">
			      <div class="container">

			        <nav class="navbar navbar-static-top navbar-inverse" role="navigation">
			        	<div class="container">
					 		<div class="navbar-header">
				              <a class="navbar-brand" href="index.php">Productos Artesanales del Occidente</a>
				            </div>
				            <div id="navbar" class="navbar-collapse collapse">
				              <ul class="nav navbar-nav pull-right">
				                <li class="active"><a href="index.php">Inicio</a></li>
				                <li><a href="Paginas/Registro.html">Registro</a></li>
				              </ul>
				            </div>
				 		</div>
				 	</nav>

			      </div>
		      </div>

		      <!--Carrusel-->
		      <div id="myCarousel" class="carousel slide" data-ride="carousel">
		      <!-- Indicators -->
		      <ol class="carousel-indicators">
		        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
		        <li data-target="#myCarousel" data-slide-to="1"></li>
		        <li data-target="#myCarousel" data-slide-to="2"></li>
		      </ol>
		      <div class="carousel-inner" role="listbox">
		        <div class="item active">
		          <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="First slide">
		          <div class="container">
		            <div class="carousel-caption">
		              <h1>Productos Artesanales del Occidente</h1>
		              <p>Es una ONG, patrocinada por diferentes Gobiernos de países europeos, la cual busca poder agremiar a diferentes productores artesanales, en rubros tales como: textiles, trajes típicos, comidas envasadas, pinturas, productos locales, café orgánico y otra diversidad de productos, con el fin de apoyar a todos estos pequeños productores.</p>
		              <p><a class="btn btn-lg btn-success" href="Paginas/Registro.html" role="button">Registrate</a></p>
		            </div>
		          </div>
		        </div>
		        <div class="item">
		          <img src="data:image/gif;base64,R0lGODlhAQABAIAAAGZmZgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Second slide">-
		          <div class="container">
		            <div class="carousel-caption">
		              <h1>Mision</h1>
		              <p>Productos Artesanales del Occidente somos personas que luchamos, con y para las poblaciones desfavorecidas y como parte de un amplio movimiento global, con el objetivo de erradicar la injusticia y la pobreza por medio de oportunidades de trabajo, y para lograr que todos los seres humanos puedan ejercer plenamente sus derechos y disfrutar de una vida digna.</p>
		              <p><a class="btn btn-lg btn-success" href="Paginas/Registro.html" role="button">Registrate</a></p>
		            </div>
		          </div>
		        </div>
		        <div class="item">
		          <img src="data:image/gif;base64,R0lGODlhAQABAIAAAFVVVQAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Third slide">
		          <div class="container">
		            <div class="carousel-caption">
		              <h1>Vision</h1>
		              <p>Como organización, refrendamos la apuesta por las personas y la coherencia entre acción y compromiso ético como los ejes básicos que orientan nuestro desarrollo y crecimiento.Queremos incrementar nuestra capacidad de influencia social y política para hacer de ella un instrumento que nos ayude a actuar de manera efectiva como motor de cambio.</p>
		              <p><a class="btn btn-lg btn-success" href="Paginas/Registro.html" role="button">Registrate</a></p>
		            </div>
		          </div>
		        </div>
		      </div>
		      <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
		        <span class="glyphicon glyphicon-chevron-left"></span>
		        <span class="sr-only">Previous</span>
		      </a>
		      <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
		        <span class="glyphicon glyphicon-chevron-right"></span>
		        <span class="sr-only">Next</span>
		      </a>
		    </div>
			
		

		<div class="container marketing">

	      <!-- Columnas De Datos-->
	      <div class="row">
	        <div class="col-lg-4">
	          <img class="img-circle" src="img/pablo.jpg" style="width: 140px; height: 140px;">
	          <h2>Pablo Mendez</h2>
	          <p>Numero De Carnet: 2790-12-5665</p>
	          <p>Carrera: Ingenieria En Sistemas</p>
	          <p>Semestre: Sexto</p>
	        </div><!-- /.col-lg-4 -->
	        <div class="col-lg-4">
	          <img class="img-circle" src="img/julian.jpg" style="width: 140px; height: 140px;">
	          <h2>Julian Hernandez</h2>
	          <p>Numero De Carnet: 2790-12-2788</p>
	          <p>Carrera: Ingenieria En Sistemas</p>
	          <p>Semestre: Sexto</p>
	        </div><!-- /.col-lg-4 -->
	        <div class="col-lg-4">
	          <img class="img-circle" src="img/juan.jpg" style="width: 140px; height: 140px;">
	          <h2>Juan Rivera</h2>
	          <p>Numero De Carnet: 2790-12-5756</p>
	          <p>Carrera: Ingenieria En Sistemas</p>
	          <p>Semestre: Sexto</p>
	        </div>
	      </div>

	      <div class="row">
	        <div class="col-lg-4">
	          <img class="img-circle" src="img/ale.jpg" alt="Generic placeholder image" style="width: 140px; height: 140px;">
	          <h2>Alejandro Diaz</h2>
	          <p>Numero De Carnet: 2790-12-2506</p>
	          <p>Carrera: Ingenieria En Sistemas</p>
	          <p>Semestre: Sexto</p>
	        </div>
	        <div class="col-lg-4">
	          <img class="img-circle" src="img/rony.jpg" alt="Generic placeholder image" style="width: 140px; height: 140px;">
	          <h2>Rony Gonzalez</h2>
	          <p>Numero De Carnet: 2790-12-5040</p>
	          <p>Carrera: Ingenieria En Sistemas</p>
	          <p>Semestre: Sexto</p>
	        </div>
	        <div class="col-lg-4">
	          <img class="img-circle" src="img/Adolfo.png" alt="Generic placeholder image" style="width: 140px; height: 140px;">
	          <h2>Adolfo Pineda</h2>
	          <p>Numero De Carnet: 2790-12-667</p>
	          <p>Carrera: Ingenieria En Sistemas</p>
	          <p>Semestre: Sexto</p>
	        </div>
	      </div>
    	</div>
		</div>

		
	</div>
	
		<footer>
			<div class="container">
				<div class="row">
					<div class="col-md-12">&nbsp;</div>
				</div>
				<div class="row">
					<div class="col-md-4"></div>
					<div class="col-md-4">
						<img class="img-rounded" src="img/logo.png" alt="Generic placeholder image" style="width: 140px; height: 140px;">
						<h4>Productos Artesanales del Occidente</h4>
				        <p>Telefono: 77713907</p>
				        <p>Email: ArtesanosOcci@ONG.com</p>
				        <p>Fax: 333-455</p>
					</div>
					<div class="col-md-4"></div>
				</div>
			</div>
		</footer>
	<script src="js/bootstrap.min.js"></script>
</body>

</html>