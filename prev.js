$(function() {

    $('.img-box').click(function(){
        if($(this).hasClass('carussel_1')){
            var urlCarussel_1 = "https://yurydem.github.io/carussel_1/";
            $(location).attr('href',urlCarussel_1);
        }
        if($(this).hasClass('carussel_1_dark')){
            var urlCarussel_1_dark = "https://yurydem.github.io/carussel_1_dark/";
            $(location).attr('href',urlCarussel_1_dark);
        }
        if($(this).hasClass('carussel_2')){
            var urlCarussel_2 = "https://yurydem.github.io/carussel_2/";
            $(location).attr('href',urlCarussel_2);
        }
        if($(this).hasClass('carussel_2_dark')){
            var urlCarussel_2_dark = "https://yurydem.github.io/carussel_2_dark/";
            $(location).attr('href',urlCarussel_2_dark);
        }
        if($(this).hasClass('carussel_3')){
            var urlCarussel_3 = "https://yurydem.github.io/carussel_3/";
            $(location).attr('href',urlCarussel_3);
        }
        if($(this).hasClass('carussel_3_dark')){
            var urlCarussel_3_dark = "https://yurydem.github.io/carussel_3_dark/";
            $(location).attr('href',urlCarussel_3_dark);
        }

    });

});
