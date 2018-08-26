var markers = [
  ['Jockey Plaza', -12.085632, -76.976738],
  ['Plaza San Miguel', -12.076959, -77.082794],
  ['Emilio Cavenecia', -12.108501,-77.038273],
  ['Real Plaza Salaverry', -12.089979, -77.051843],
  ['Mall Aventura Plaza Trujillo', -8.102622,-79.049508],
  ['Real Plaza Piura', -5.186347, -80.642678],
  ['Real Plaza Arequipa', -16.389631, -71.549752],
  ['Real Plaza Cusco', -13.523288, -71.949472],
];

jQuery(document).ready(function(){
	var wow = new WOW();
	wow.init();

	jQuery(".pan").click(function(){
		//abrir hacia abajo
		//jQuery("header.cabecera-principal ul.menu").slideDown();
	
		//cerrar hacia arriba
		//jQuery("header.cabecera-principal ul.menu").slideUp();

		//abrir/cerrar
		if(jQuery(window).width() < 768)
		{
			jQuery(this).toggleClass("equis");
			jQuery("header.cabecera-principal ul.menu").slideToggle();
		}
	});

	jQuery(".cabecera-principal .menu li a").click(function(e){
		e.preventDefault();
		var id = jQuery(this).attr("href");
		jQuery('html, body').animate({
            "scrollTop": jQuery(id).position().top} , 700, 'swing', function () {
        });
	});

	jQuery("a.arriba").click(function(e){
		e.preventDefault();
		jQuery('html, body').animate({
            "scrollTop": 0} , 700, 'swing', function () {
        });
	});
	//caso geolocalizacion
	//getLocation();

	jQuery("#tiendas").change(function(){
		var valor = jQuery(this).val();
		if(valor !== "")
		{
			ubicartiendas(markers[valor][1],markers[valor][2],markers[valor][0]) ;
		}else{
			alert("Seleccione tienda");
		}
	});

});

jQuery(window).on("load",function() {
    jQuery(".overlay").fadeOut("slow", function() {
        jQuery("body").removeClass("preloader");
    });
})

jQuery(window).scroll(function(){
	if (jQuery(this).scrollTop() > 500)
	{
		jQuery("a.arriba").fadeIn();
	}else{
		jQuery("a.arriba").fadeOut();
	}
})

jQuery(window).resize(function(){
	jQuery(".pan").removeClass("equis");
	if(jQuery(window).width() < 768)
	{
		jQuery("header.cabecera-principal ul.menu").hide();
	}else{
		jQuery("header.cabecera-principal ul.menu").show();	
	}
})

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(function(position){
			var myCenter = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
			var mapProp = {
			    center: myCenter,
			    zoom: 16,
			    mapTypeId: google.maps.MapTypeId.ROADMAP
			};

			var map = new google.maps.Map(document.getElementById("mimapa"), mapProp);
			var marker = new google.maps.Marker({
				position: myCenter,
				map: map,
				//icon: "url"
			});

			marker.setMap(map);
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function ubicartiendas(lat,lon,texto) {

	var myCenter = new google.maps.LatLng(lat, lon);
	var mapProp = {
	    center: myCenter,
	    zoom: 16,
	    mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	var map = new google.maps.Map(document.getElementById("mimapa"), mapProp);
	var marker = new google.maps.Marker({
		position: myCenter,
		map: map,
		//icon: "url"
	});

	marker.setMap(map);
}