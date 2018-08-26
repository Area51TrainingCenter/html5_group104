jQuery(document).ready(function(){

	jQuery(".boton").click(function(){
		listar();
	});
});

function listar()
{
	//version javascript purito
	//version1
	/*for (var i = 0; i < 5; i++) {
		var texto = "<div>dia "+i+"</div>";
		jQuery("#semana").append(texto);
	}

	//version2
	var texto = "";
	for (var i = 0; i < 5; i++) {
		texto+= "<div>dia "+i+"</div>";
	}

	jQuery("#semana").html(texto);*/


	//version jquery similar a for
	/*
	jQuery.each([1,2,3,4,5], function( index, value ) {
	  var texto = "<div>dia  "+index+"  /  "+value+"</div>";	
	  jQuery("#semana").append(texto)
	});	*/

	//iterar eleemntos seleccionados

	jQuery(".lista li").each(function(index,element){
		//version javascript
		//var damein = element.id ;
		//var damein = element.className ;
		//var damein = element.innerHTML ;

		//version jquery
		//var damein = jQuery(this).attr("id");
		//var damein = jQuery(this).attr("class");
		//var damein = jQuery(this).text();

		var texto = "<div>dia  "+index+"  /  "+damein+"</div>";
 		jQuery("#semana").append(texto);
	});


}