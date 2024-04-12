$(document).ready(function () {
    

    // Head effects
    $('.menu a').each(function(index, element) {

        $(this).css({
            'top': '-200px'
        });

        $(this).animate({
            top: '0'
        }, 2000 + (index * 500));
    });    


    if($(window).width() > 800){
        $('header .text').css({
            opacity: 0,
            marginTop: 0
        });

        $('header .text').animate({
            opacity: 1,
            marginTop: '-52px'
        }, 2000);
    }


    // Head-button effects
    const executeScroll = (typeBtn, typeClass) => {
        $(`#btn-${typeBtn}`).on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: typeClass - 200
            }, 500);
        });
    }

    var aboutClass = $('#about').offset().top;
    var menuClass = $('#menu').offset().top;
    var galleryClass = $('#gallery').offset().top;
    var locationClass = $('#location').offset().top;

    executeScroll('about', aboutClass);
    executeScroll('menu', menuClass);
    executeScroll('gallery', galleryClass);
    executeScroll('location', locationClass);

    // Parallax
    $(window).scroll(function(){
        let windowWidth = $(window).width();

        if(windowWidth > 800){
            let scroll = $(window).scrollTop();
            $('header .text').css({
                'transform': `translate(0px, ${scroll / 2}%)`
            });

            $('.about article').css({
                'transform': `translate(0px, -${scroll / 50}%)`
            });

        }
    })

    // Get back the position
    $(window).resize(function(){
        let windowWidth = $(window).width();
        if(windowWidth < 800){
            $('.about article').css({
                'transform': `translate(0px, 0px)`
            });
        }
    });


});