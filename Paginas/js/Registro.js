var ejecutar=true;
var nombre;
var telefono;
var email;
var edad;
var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{1,4})?$/;

function limpiarInput(){
	nombre=$("#txtNombre").val().trim();
	telefono=$("#txtTelefono").val().trim();
	email=$("#txtEmail").val().trim();
	edad=$("#txtEdad").val().trim();
}


$(document).ready(function(){
		
		
		
		$("#btnRegistrar").click(function(){
			
			limpiarInput();

			if(nombre==""){
				setTimeout(function(){
					$( "#ErrorNomdiv" ).addClass("has-error has-feedback");
				},200);
				$('#ErrorNomlbl').text('El Nombre Es Requerido');
				$("#ErrorNomlbl").fadeIn(1000);
				$('#ErrorNomico').fadeIn(1000);	
				$('#txtNombre').val(nombre);			
				ejecutar=false;
			}

			if(telefono==""){
				setTimeout(function(){
					$( "#ErrorTeldiv" ).addClass( "has-error has-feedback" );
				},200);
				$('#ErrorTellbl').text('El Telefono Es Requerido');
				$("#ErrorTellbl").fadeIn(1000);
				$('#ErrorTelico').fadeIn(1000);	
				$('#txtTelefono').val(telefono);			
				ejecutar=false;
			}else if(isNaN(telefono))
					{
						setTimeout(function(){
							$( "#ErrorTeldiv" ).addClass( "has-error has-feedback" );
						},200);
						$('#ErrorTellbl').text('Solo Se Admiten Numeros En Este Campo');
						$("#ErrorTellbl").fadeIn(1000);
						$('#ErrorTelico').fadeIn(1000);	
						ejecutar=false;
					}else if (telefono.length!=8)
						{
							setTimeout(function(){
							$( "#ErrorTeldiv" ).addClass( "has-error has-feedback" );
							},200);
							$('#ErrorTellbl').text('Tienes Que Ingresar 8 Digitos');
							$("#ErrorTellbl").fadeIn(1000);
							$('#ErrorTelico').fadeIn(1000);	
							ejecutar=false;
						}

			if(email==""){
				setTimeout(function(){
					$( "#ErrorEmadiv" ).addClass( "has-error has-feedback" );
				},200);
				$('#ErrorEmalbl').text('El Email Es Requerido');
				$("#ErrorEmalbl").fadeIn(1000);
				$('#ErrorEmaico').fadeIn(1000);	
				$('#txtEmail').val(email);			
				ejecutar=false;
			}else if( !emailReg.test(email))
					{
						setTimeout(function(){
						$( "#ErrorEmadiv" ).addClass( "has-error has-feedback" );
						},200);
						$('#ErrorEmalbl').text('El Email Es Invalido');
						$("#ErrorEmalbl").fadeIn(1000);
						$('#ErrorEmaico').fadeIn(1000);				
						ejecutar=false;
					}

			if(edad==""){
				setTimeout(function(){
					$( "#ErrorEdadiv" ).addClass( "has-error has-feedback" );
				},200);
				$('#ErrorEdalbl').text('La Edad Es Requerido');
				$("#ErrorEdalbl").fadeIn(1000);
				$('#ErrorEdaico').fadeIn(1000);
				$('#txtEdad').val(edad);			
				ejecutar=false;
			}else if (isNaN(edad))
					{
						setTimeout(function(){
						$( "#ErrorEdadiv" ).addClass( "has-error has-feedback" );
						},200);
						$('#ErrorEdalbl').text('Solo Se Adminten Numeros En Este Campo');
						$("#ErrorEdalbl").fadeIn(1000);
						$('#ErrorEdaico').fadeIn(1000);	
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