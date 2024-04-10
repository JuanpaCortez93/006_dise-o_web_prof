$(document).ready(() => {
    // $('.caja').first().css({
    //     background: "#000"
    // })

    // $('.caja').last().css({
    //     background: "#000"
    // })

    $('.caja').eq(2).css({
        background: "#000"
    })

    $('.caja').filter('#segunda').css(
        {
            background: '#f90a3f'
        }
    )

    $('.caja').not("#segunda").css({
        background: '#f1f1f1'
    })
});