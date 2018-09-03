jQuery(document).ready(function(){
	jQuery("#enviar").click(function(){
		var usuario_data = jQuery("#usuario").val();
		var password_data = jQuery("#password").val();

		jQuery.ajax({
			url : "ac/procesos.php",
			method : "POST",
			/*data : {
				usuario : usuario_data,
				password : password_data
			},*/
			data : jQuery("#formulario").serialize(),
			beforeSend: function(){
				alert("procesando...");
			}
			/*success: function(data){
			
			}*/
		}).done(function(data){
			//alert(data);
			jQuery("#rpta").html(data);
		});
	});

	jQuery("#consultar").click(function(){
		var busqueda_data = jQuery("#busqueda").val();

		jQuery.ajax({
			url : "ac/consultar.php",
			method : "POST",
			dataType : "json",
			data : {
				busqueda : busqueda_data,
			},
			//data : jQuery("#formulario").serialize(),
			/*beforeSend: function(){
				alert("procesando...");
			}*/
			/*success: function(data){
			
			}*/
		}).done(function(data){
			var html = "<table>";
			jQuery.each(data,function(key,value){
				//iteracion objeto
				//var usuario = jQuery(this)[0];
				//var usuario = data[key];
				var usuario = value;
				html+= "<tr><td>DNI</td><td>"+usuario.dni+"</td></tr>";
				html+= "<tr><td>Nombre</td><td>"+usuario.nombre+"</td></tr>";
				html+= "<tr><td>Apellido</td><td>"+usuario.apellido+"</td></tr>";
				html+= "<tra><td>Fecha de nacimiento</td><td>"+usuario.fecha+"</td></tr>";
				html+= "<tra><td>Genero</td><td>"+usuario.genero+"</td></tr>";
			})

			html+= "</table>";

			jQuery("#resultado").html(html);
		});
	});
});