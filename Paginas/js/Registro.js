var ejecutar=true;

function RemoverClases()
{
	$( "#ErrorNomdiv" ).removeClass( "has-error has-feedback" );
}

$(document).ready(function(){
		RemoverClases();

		$("#btnRegistrar").click(function(){
			if($("#txtNombre").text()==""){
				$( "#ErrorNomdiv" ).addClass( "has-error has-feedback" );
				$('#ErrorNomlbl').text('El Nombre Es Requerido');
				$("#ErrorNomlbl").fadeIn(1000);
				$('#ErrorNomico').fadeIn(1000);				
				ejecutar=false;
			}
		});
});