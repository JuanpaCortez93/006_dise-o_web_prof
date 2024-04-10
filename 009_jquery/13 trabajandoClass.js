$(document).ready(() => {
    $('#boton').on('click', function(){
        // $(this).addClass('naranja');
        $(this).toggleClass('naranja');
        
        $(this).css({
            'height': '100px',
            'width': '100px'
        });
    
    });


});