$(document).ready(function(){

    $('#titulo').html('<h1>Encabezado Modificado</h1>');


    var nombre = $('#nombre');
    nombre.on('change', function(){
        $('#titulo').text(nombre.val());
    });

    $('#enlace').text("Juanpa.com");
    $('#enlace').attr('href', 'http://www.juanpa.com');
});