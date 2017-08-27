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

	//smoth scrolling
	$('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

	//creamos los overlay
	proyect.forEach(function(element){
		$("#" + element.id).append('<div class="overlay"><div class="text"><span class="title">' + element.title + '</span><ul><li><a class="modal-trigger" href="#modal-' + element.id + '" id="desc-"' + element.id + '><i class="fa fa-file-text-o" aria-hidden="true"></i></a></li><li><a href="' + element.code + '" target="_blank"><i class="fa fa-code" aria-hidden="true"></i></a></li><li><a href="' + element.url + '" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a></li></ul></div></div>');
		
		$(".contenedor-modal").append('<div id="modal-' + element.id + '" class="modal"><div class="modal-content"><h4>' + element.title + '</h4><div class="row"><div class="col s12 m6 l6 xl6 center"><img src="../../dist/img/' + element.img + '" class="responsive-img"></div><div class="col s12 m6 l6 xl6"><p>' + element.description + '</p></div></div><div class="row"><div class="col s6 m6 l6 xl6"><a href="' + element.code + '" class="waves-effect waves-light modal-close btn right" target="_blank"><i class="fa fa-code" aria-hidden="true"></i></a></div><div class="col s6 m6 l6 xl6"><a href="' + element.url + '" class="waves-effect waves-light modal-close btn" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a></div></div></div><div class="modal-footer"><a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Cerrar</a></div></div>');
	});

	//inicializacion de modal
	$('.modal').modal();

});

/*'<div class="row">
	<div class="col s12 m6 l6 xl6">
		<a href="' + element.code + '" class="waves-effect waves-light modal-close btn right" target="_blank">code</a>
	</div>
	<div class="col s12 m6 l6 xl6">
		<a href="' + element.url + '" class="waves-effect waves-light modal-close btn" target="_blank">demo</a>
	</div>
</div>*/