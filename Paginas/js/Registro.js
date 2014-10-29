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

function nombrevalidate(){

	
	$("#txtNombre").focusout(function(){
		limpiarInput();	
		if(nombre==""){
			$( "#ErrorNomdiv" ).addClass("has-error has-feedback");
			$('#ErrorNomlbl').text('El Nombre Es Requerido');
			$("#ErrorNomlbl").fadeIn();
			$('#ErrorNomico').fadeIn();	
			$('#txtNombre').val(nombre);
		}
	});

	$("#txtNombre").focus(function(){
			setTimeout(function(){
				$( "#ErrorNomdiv" ).removeClass("has-error has-feedback");
			},600);
			$("#ErrorNomlbl").fadeOut();
			$('#ErrorNomico').fadeOut();
	});

}


function telefonovalidate(){


	$("#txtTelefono").focusout(function(){
		limpiarInput();	
		if(telefono==""){
			$( "#ErrorTeldiv" ).addClass( "has-error has-feedback" );
			$('#ErrorTellbl').text('El Telefono Es Requerido');
			$("#ErrorTellbl").fadeIn();
			$('#ErrorTelico').fadeIn();	
			$('#txtTelefono').val(telefono);	
		}else if(isNaN(telefono))
				{
					$( "#ErrorTeldiv" ).addClass( "has-error has-feedback" );
					$('#ErrorTellbl').text('Solo Se Admiten Numeros En Este Campo');
					$("#ErrorTellbl").fadeIn();
					$('#ErrorTelico').fadeIn();	
				}else if (telefono.length!=8)
					{
						$( "#ErrorTeldiv" ).addClass( "has-error has-feedback" );
						$('#ErrorTellbl').text('Tienes Que Ingresar 8 Digitos');
						$("#ErrorTellbl").fadeIn();
						$('#ErrorTelico').fadeIn();	
					}
	});

	$("#txtTelefono").focus(function(){
			setTimeout(function(){
				$( "#ErrorTeldiv" ).removeClass("has-error has-feedback");
			},600);
			$("#ErrorTellbl").fadeOut();
			$('#ErrorTelico').fadeOut();
	});

}

function emailvalidate()
{
	$("#txtEmail").focusout(function(){
		limpiarInput();
		if(email==""){
			$( "#ErrorEmadiv" ).addClass( "has-error has-feedback" );
			$('#ErrorEmalbl').text('El Email Es Requerido');
			$("#ErrorEmalbl").fadeIn();
			$('#ErrorEmaico').fadeIn();	
			$('#txtEmail').val(email);	
		}else if( !emailReg.test(email))
				{
					$( "#ErrorEmadiv" ).addClass( "has-error has-feedback" );
					$('#ErrorEmalbl').text('El Email Es Invalido');
					$("#ErrorEmalbl").fadeIn();
					$('#ErrorEmaico').fadeIn();		
				}
	});

	$("#txtEmail").focus(function(){
			setTimeout(function(){
				$( "#ErrorEmadiv" ).removeClass("has-error has-feedback");
			},600);
			$("#ErrorEmalbl").fadeOut();
			$('#ErrorEmaico').fadeOut();
	});
}

function edadvalidate(){
	$("#txtEdad").focusout(function(){
		limpiarInput();
		if(edad==""){
			$( "#ErrorEdadiv" ).addClass( "has-error has-feedback" );
			$('#ErrorEdalbl').text('La Edad Es Requerido');
			$("#ErrorEdalbl").fadeIn();
			$('#ErrorEdaico').fadeIn();
			$('#txtEdad').val(edad);	
		}else if (isNaN(edad))
				{
					$( "#ErrorEdadiv" ).addClass( "has-error has-feedback" );
					$('#ErrorEdalbl').text('Solo Se Adminten Numeros En Este Campo');
					$("#ErrorEdalbl").fadeIn();
					$('#ErrorEdaico').fadeIn();	
				}
	});

	$("#txtEdad").focus(function(){
		setTimeout(function(){
			$( "#ErrorEdadiv" ).removeClass("has-error has-feedback");
		},600);
		$("#ErrorEdalbl").fadeOut();
		$('#ErrorEdaico').fadeOut();
	});
}

function fechavalidate(){

	$("#txtFecha").focusout(function(){
		limpiarInput();
		if($("#txtFecha").val()==""){
			$( "#ErrorFecdiv" ).addClass( "has-error has-feedback" );
			$('#ErrorFeclbl').text('La Fecha Nacimiento Es Requerido');
			$("#ErrorFeclbl").fadeIn();
			$('#ErrorFecico').fadeIn();
		}
	});

	$("#txtFecha").focus(function(){
		setTimeout(function(){
			$( "#ErrorFecdiv" ).removeClass("has-error has-feedback");
		},600);
		$("#ErrorFeclbl").fadeOut();
		$('#ErrorFecico').fadeOut();
	});

}

function sexovalidate(){

	$("#cboSexo").focusout(function(){
		limpiarInput();
		if($("#cboSexo").val()=="0"){
			$( "#ErrorSexdiv" ).addClass( "has-error has-feedback" );
			$('#ErrorSexlbl').text('La Sexo Es Requerido');
			$("#ErrorSexlbl").fadeIn();
			$('#ErrorSexico').fadeIn();
		}
	});

	$("#cboSexo").focus(function(){
		setTimeout(function(){
			$( "#ErrorSexdiv" ).removeClass("has-error has-feedback");
		},600);
		$("#ErrorSexlbl").fadeOut();
		$('#ErrorSexico').fadeOut();
	});
}

$(document).ready(function(){
		
		
		
		$("#btnRegistrar").click(function(){
			
				limpiarInput();

				if(nombre==""){
					
					$( "#ErrorNomdiv" ).addClass("has-error has-feedback");
					$('#ErrorNomlbl').text('El Nombre Es Requerido');
					$("#ErrorNomlbl").fadeIn();
					$('#ErrorNomico').fadeIn();	
					$('#txtNombre').val(nombre);			
					ejecutar=false;
				}

				if(telefono==""){
					$( "#ErrorTeldiv" ).addClass( "has-error has-feedback" );
					$('#ErrorTellbl').text('El Telefono Es Requerido');
					$("#ErrorTellbl").fadeIn();
					$('#ErrorTelico').fadeIn();	
					$('#txtTelefono').val(telefono);			
					ejecutar=false;
				}else if(isNaN(telefono))
						{
							$( "#ErrorTeldiv" ).addClass( "has-error has-feedback" );
							$('#ErrorTellbl').text('Solo Se Admiten Numeros En Este Campo');
							$("#ErrorTellbl").fadeIn();
							$('#ErrorTelico').fadeIn();	
							ejecutar=false;
						}else if (telefono.length!=8)
							{
								$( "#ErrorTeldiv" ).addClass( "has-error has-feedback" );
								$('#ErrorTellbl').text('Tienes Que Ingresar 8 Digitos');
								$("#ErrorTellbl").fadeIn();
								$('#ErrorTelico').fadeIn();	
								ejecutar=false;
							}

				if(email==""){
					$( "#ErrorEmadiv" ).addClass( "has-error has-feedback" );
					$('#ErrorEmalbl').text('El Email Es Requerido');
					$("#ErrorEmalbl").fadeIn();
					$('#ErrorEmaico').fadeIn();	
					$('#txtEmail').val(email);			
					ejecutar=false;
				}else if( !emailReg.test(email))
						{
							$( "#ErrorEmadiv" ).addClass( "has-error has-feedback" );
							$('#ErrorEmalbl').text('El Email Es Invalido');
							$("#ErrorEmalbl").fadeIn();
							$('#ErrorEmaico').fadeIn();				
							ejecutar=false;
						}

				if(edad==""){
					$( "#ErrorEdadiv" ).addClass( "has-error has-feedback" );
					$('#ErrorEdalbl').text('La Edad Es Requerido');
					$("#ErrorEdalbl").fadeIn();
					$('#ErrorEdaico').fadeIn();
					$('#txtEdad').val(edad);			
					ejecutar=false;
				}else if (isNaN(edad))
						{
							$( "#ErrorEdadiv" ).addClass( "has-error has-feedback" );
							$('#ErrorEdalbl').text('Solo Se Adminten Numeros En Este Campo');
							$("#ErrorEdalbl").fadeIn();
							$('#ErrorEdaico').fadeIn();	
						}

				if($("#txtFecha").val()==""){
					$( "#ErrorFecdiv" ).addClass( "has-error has-feedback" );
					$('#ErrorFeclbl').text('La Fecha Nacimiento Es Requerido');
					$("#ErrorFeclbl").fadeIn();
					$('#ErrorFecico').fadeIn();				
					ejecutar=false;
				}

				if($("#cboSexo").val()=="0"){
					$( "#ErrorSexdiv" ).addClass( "has-error has-feedback" );
					$('#ErrorSexlbl').text('La Sexo Es Requerido');
					$("#ErrorSexlbl").fadeIn();
					$('#ErrorSexico').fadeIn();				
					ejecutar=false;
				}

				if(ejecutar)
				{
					document.Registro.submit();
				}
	
		});

		nombrevalidate();
		telefonovalidate();
		emailvalidate();
		edadvalidate();
		fechavalidate();
		sexovalidate();
});