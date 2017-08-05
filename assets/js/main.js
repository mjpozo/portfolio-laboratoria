$(document).ready(function(){

	//navbar
	$(".button-collapse").sideNav();

	//nav cambia de color cuando se baja la página
	$(document).scroll(function(){
		if ($(this).scrollTop() > 100){
			$("nav").addClass("nav-scroll");
		} else if ($(this).scrollTop() <= 100){
			$("nav").removeClass("nav-scroll");
		}
	});

	$('.modal').modal();

});