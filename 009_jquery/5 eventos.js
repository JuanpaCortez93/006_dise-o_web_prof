$(document).ready(()=>{
    
    const boton = $('#boton');
    
    // const saludo = () => {
    //     alert("Hello");
    // }

    // boton.click(saludo);
    // boton.on('click', saludo);
    // boton.on('mouseenter', function() {
    //     document.body.style.background = '#fff';
    // });

    // boton.on('mouseleave', function() {
    //     document.body.style.background = '#000';
    // });

    // boton.on('click', () => {
    //     alert('Saludos');
    //     console.log("Saludos");
    // });

    // $('#desactivar').on('click', () => {
    //     boton.off('click');
    // });

    $('a').on('click', (e) => {
        e.preventDefault();
    });

});