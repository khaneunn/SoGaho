$(document).ready(function(){
$(".slider").owlCarousel({
    autoplay:false,
    loop:true,
    items:1,
    dots: true,
    nav:true,
    responsiveClass:true,
    navText:["<span class='icon-double-left'></span>","<span class='icon-double-right'></span>"],
    responsive:{
        0:{
            items:1,
        },
        650:{
            items:1,
            nav:true,
        },
        768:{
            items:2,
            nav:true,
        },
        1000:{
            items:1,
            nav:true,
        }
    }
});

    $(".feedback").owlCarousel({
        autoplay:false,
        loop:true,
        items:1,
        dots: true,
        nav:false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            650:{
                items:1,
                nav:true,
            },
            768:{
                items:1,
                nav:true,
            },
            1000:{
                items:1,
                nav:true,
            }
        }
    });

    /*--- SCROLLING ---*/
    var $header = $('header');
    var offset = 100;

    $(window).scroll(function(){
        if ($(this).scrollTop() > offset ) {
            $header.addClass('scrolling');
        } else {
            $header.removeClass('scrolling');
        }
    });

    /*---------- EQUAL HEIGHTS ----------*/
    if($('.equal-height').length){
        $('.equal-height').matchHeight();
    }

    /*---------- ACCORDION ----------*/
    $(".accordion .title").bind('click', function(e){
        if(!$(this).parent("li").hasClass("content-visible")){
            $(".accordion li").removeClass("content-visible");
            $(".accordion .desc").slideUp(200);
        }
        $(this).next('.desc').slideToggle(200).end().parent('li').toggleClass('content-visible');
        e.preventDefault();
    });

});