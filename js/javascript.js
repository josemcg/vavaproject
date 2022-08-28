

/* inicio menu */

var boton = $('#botonmenu');
var menu = $('header nav');

boton.on('click', slideMenu);

function slideMenu() {
    menu.fadeToggle(800);
}

/* fin menu */


/* inicio the way we work */

var botones = $('.menu2 li');
var underlines = $('.menu2 li');
var parrafos = $('#texto p');

botones.on('click', cambiaTexto);


function cambiaTexto(event) {
    $(underlines).removeClass();
    $(this).addClass('activo');
    var pestana = '#' + $(this).text().toLowerCase();
    /* alert(pestana); */
    $(parrafos).hide();
    var textoseleccionado = $('#texto ' + pestana);
    /*  alert(textoseleccionado.attr) */
    $(textoseleccionado).show();
}
/* fin the way we work */