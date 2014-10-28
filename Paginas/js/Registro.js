var ejecutar=true;


$(document).ready(function(){
		


		$("#btnRegistrar").click(function(){
			if($("#txtNombre").val()==""){
				setTimeout(function(){
					$( "#ErrorNomdiv" ).addClass("has-error has-feedback");
				},200);
				$('#ErrorNomlbl').text('El Nombre Es Requerido');
				$("#ErrorNomlbl").fadeIn(1000);
				$('#ErrorNomico').fadeIn(1000);				
				ejecutar=false;
			}

			if($("#txtTelefono").val()==""){
				setTimeout(function(){
					$( "#ErrorTeldiv" ).addClass( "has-error has-feedback" );
				},200);
				$('#ErrorTellbl').text('El Telefono Es Requerido');
				$("#ErrorTellbl").fadeIn(1000);
				$('#ErrorTelico').fadeIn(1000);				
				ejecutar=false;
			}

			if($("#txtEmail").val()==""){
				setTimeout(function(){
					$( "#ErrorEmadiv" ).addClass( "has-error has-feedback" );
				},200);
				$('#ErrorEmalbl').text('El Email Es Requerido');
				$("#ErrorEmalbl").fadeIn(1000);
				$('#ErrorEmaico').fadeIn(1000);				
				ejecutar=false;
			}

			if($("#txtEdad").val()==""){
				setTimeout(function(){
					$( "#ErrorEdadiv" ).addClass( "has-error has-feedback" );
				},200);
				$('#ErrorEdalbl').text('La Edad Es Requerido');
				$("#ErrorEdalbl").fadeIn(1000);
				$('#ErrorEdaico').fadeIn(1000);				
				ejecutar=false;
			}

			if($("#txtFecha").val()==""){
				setTimeout(function(){
					$( "#ErrorFecdiv" ).addClass( "has-error has-feedback" );
				},200);
				$('#ErrorFeclbl').text('La Fecha Nacimiento Es Requerido');
				$("#ErrorFeclbl").fadeIn(1000);
				$('#ErrorFecico').fadeIn(1000);				
				ejecutar=false;
			}

			if($("#cboSexo").val()=="0"){
				setTimeout(function(){
					$( "#ErrorSexdiv" ).addClass( "has-error has-feedback" );
				},200);
				$('#ErrorSexlbl').text('La Sexo Es Requerido');
				$("#ErrorSexlbl").fadeIn(1000);
				$('#ErrorSexico').fadeIn(1000);				
				ejecutar=false;
			}
	
		});
});