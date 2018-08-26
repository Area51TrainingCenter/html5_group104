jQuery(document).ready(function(){
	jQuery("#box1").click(function(){
		//obtener valor del atributo class
		var clase = jQuery(this).attr("class");
		//alert(clase);

		//modificar valor del atributo class
		//jQuery(this).attr("class","caja caja2");


		//obtener el value del input
		var input = jQuery(".texto").val();
		//alert(input);

		//modificar el value del input
		//jQuery(".texto").val("texto de prueba");

		//obtener data
		//var data = jQuery(this).data("img");
		//alert(data);

		//obtcambiar ener data
		//jQuery(this).attr("data-img","holaaa");


		//agregar class
		//jQuery(this).addClass("boxxixa");

		//quitar clases
		//jQuery(this).removeClass("box");

		//preguntar si tiene clase
		if(jQuery(this).hasClass("boxxixa"))
		{
			//alert("holaa clase boxxixa");
		}

		var loquesea = '<div class="box" id="box3">';
		loquesea+='</div>';

		//obtener html
		var html = jQuery(".xixa").html();

		//isnertar o reemplazar
		//jQuery(".xixa").html(loquesea);
		
		
		//agregar html al final
		//jQuery(".xixa").append(loquesea);

		//agregar html al inicio
		//jQuery(".xixa").prepend(loquesea);

		//toggleClass
		jQuery(this).toggleClass("ahora");

		//indicar posicion de un elemento
		jQuery(".box").eq(1).addClass("soyuno");

		//obtener el anchod eun elemento
		//jQuery(window).width();


		//ocultarhtml
		//jQuery("#box2").hide();

		//mostrar
		//jQuery("#box2").show();

		//motrar suavecito
		/*jQuery("#box2").fadeIn("fast",function(){
			//alert("ya se mostro");
		});
		jQuery("#box1").fadeOut("fast",function(){
			//alert("ya se oculto");
		});*/
	});

	jQuery("#box2").click(function(){
		//alert("adios mundo cruel");
	});

	jQuery(".box").click(function(){
		//alert("estamos aqui");
	});

	jQuery("#box1").hover(function(){
		//alert("sobre el cuadro rojo");
	});

	jQuery("#box2").mouseover(function(){
		//alert("sobre el cuadro rojo");
		//alert("hola");
	}).mouseout(function(){
		//alert("adios");
	});


	//ejercicio lightbox
	jQuery(".abrirlightbox").click(function(){
		jQuery(".trama").fadeIn("fast",function(){
			jQuery(".conteendorimagen").fadeIn("slow");
		});
	});

	jQuery(".cerrarlightbox").click(function(){
		jQuery(".conteendorimagen").fadeOut("fast",function(){
			jQuery(".trama").fadeOut("slow");
		});
	});

	//ejercicio galeria
	jQuery(".ejemplogaleria1 .columnas img").click(function(){
		jQuery(this).addClass("bn");
		var rutagrande = jQuery(this).data("img");
		jQuery(".conteendorimagen img").attr("src",rutagrande);
		jQuery(".trama").fadeIn("fast",function(){
			jQuery(".conteendorimagen").fadeIn("slow");
		});
	});

	jQuery(".cerrarlightbox.bn").click(function(){
		jQuery(".columnas img").removeClass("bn");
		jQuery(".conteendorimagen").fadeOut("fast",function(){
			jQuery(".trama").fadeOut("slow");
			jQuery(".conteendorimagen img").attr("src","");
		});
	});

	//acordion
	jQuery(".box-titulo").click(function(){
	//logica para abrir todos;
	/*	var indicador = jQuery(".box-titulo").index(this);
		jQuery(".box-contenido").eq(indicador).slideToggle();*/

	//logiica para abrir y cerrar dejando un abierto	
	/*	var indicador = jQuery(".box-titulo").index(this);
		jQuery(".box-contenido").slideUp();
		jQuery(".box-contenido").eq(indicador).slideToggle();*/


	//logica abrir y cerrar
	/*var indicador = jQuery(".box-titulo").index(this);
		jQuery(".box-contenido").slideUp();
		if(jQuery(this).hasClass("activo"))
		{
			jQuery(".box-titulo").removeClass("activo");
		}else{
			jQuery(".box-titulo").removeClass("activo");
			jQuery(".box-titulo").eq(indicador).addClass("activo");
			jQuery(".box-contenido").eq(indicador).slideDown();
		}*/
	});

	//galeria2
	jQuery(".ejemplogaleria2 .columnas img").click(function(){
		var indice = jQuery(this).attr("data-indice");
		//version con find
		//var lista =jQuery(".lista-imagenes").eq(indice).find("li");
		
		//version concatenadaindice + 1;
		var lista =jQuery(".lista-imagenes.lista"+indice+" li");

		var titulo = parseInt(indice) + 1;
		jQuery(".galeria h1").html("Galeria "+titulo);;
		var html = "";
		jQuery(lista).each(function(index,element){
			var imagen = jQuery(this).attr("data-img");
			var texto =  jQuery(this).text();
			html+= "<div><img src='"+imagen+"' ><h3>"+texto+"</h3></div>";
		});

		jQuery(".rpta").html(html);
	});

	jQuery(".changecss").click(function(){

		//unsa sola propiedad
		//jQuery(".texto p").css("color","blue");

		//varias propiedades
		jQuery(".texto p").css({
			"color":"blue",
			"margin":"20px",
			"background-color":"yellow"
		});
	});

	jQuery(".changeanimaciones").click(function(){
		jQuery(".texto").animate({
			//"width":"-=100px",
			"left":"+=10px"
		}, "slow",function(){
			jQuery(".texto p").animate({
				"background-color":"red"
			},"slow");
			//alert("holaaa");
		});
	});

	jQuery(".cuadro .cuadrado").click(function(){
		infito();
	});

});

function infito()
{
	var ancho = jQuery(window).width() - 100;
	var alto = jQuery(window).height() - 100;
	jQuery(".cuadro .cuadrado").animate({
		"left": ancho+"px",
		"top":"0",
		"background-color":"blue"
	},"slow",function(){
		jQuery(".cuadro .cuadrado").animate({
			"left": ancho+"px",
			"top": alto+"px",
			"background-color":"yellow"
		},"slow",function(){
			jQuery(".cuadro .cuadrado").animate({
				"left": "0px",
				"top": alto+"px",
				"background-color":"green"
			},"slow",function(){
				jQuery(".cuadro .cuadrado").animate({
					"left": "0px",
					"top": "0px",
					"background-color":"red"
				},"slow",function(){
					//infito();
				});
			});
		});
	});
}