


$(function(){
    let boton = $('#btn-menu');
    let fondoEnlace = $('#fondo-enlace');

    boton.on('click', function(e){
        fondoEnlace.toggleClass('active');
        $('#barra-lateral-izquierda').toggleClass('active');
        e.preventDefault();
    });

    fondoEnlace.on('click', function(e){
        fondoEnlace.toggleClass('active');
        $('#barra-lateral-izquierda').toggleClass('active');
        e.preventDefault();

    });
}())