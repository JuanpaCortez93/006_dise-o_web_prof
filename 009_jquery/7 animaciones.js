$(document).ready(() => {

    const boton = $('#boton');

    boton.on('click', function() {
        $('.caja').animate({
            width: '300px',
            // opacity: '0.2'

            // width: '+=300px',
            // marginLeft: '20px'


        }, 5000, () => {
            // alert("Animation finished")
        });

        // $('.caja').addClass('animacion');

        $('.caja').animate({
            marginLeft: '-50px'
        }, 300);
    });

});