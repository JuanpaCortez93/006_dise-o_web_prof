$(document).ready(() => {

    const contenedor = $('#contenedor');
    let contador = 1;

    $('#agregar').on('click', function(){
        var caja = $('<div></div>').attr('class', 'caja').text(contador);
        contenedor.append(caja);
        contador++;
    });

}); 