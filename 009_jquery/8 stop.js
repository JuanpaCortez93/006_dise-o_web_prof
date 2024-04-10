$(document).ready(() => {
    $('#ejecutar').on('click', function(){
        $('.caja').animate({
            marginLeft: '500px'
        }, 5000);
        $('.caja').animate({
            marginLeft: '0'
        }, 5000);
    });

    $('#parar').on('click', function(){
        //limpiar animaciones, saltar al final
        $('.caja').stop(true, false);
    });
});