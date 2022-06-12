$(document).ready(function(){

    /*--- SEARCH ---*/
    var searchForm = $('.main-search'),
        searchTrigger = $('.btn-search'),
        coverLayer = $('.cover-layer');

    function closeSearchForm() {
        searchTrigger.removeClass('search-form-visible');
        searchForm.removeClass('is-visible');
        coverLayer.removeClass('search-form-visible');
    }

    searchTrigger.on('click', function(event){
        event.preventDefault();
        if( searchTrigger.hasClass('search-form-visible') ) {
            searchForm.find('form').submit();
        } else {
            searchTrigger.addClass('search-form-visible');
            coverLayer.addClass('search-form-visible');
            searchForm.addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
                searchForm.find('input[type="search"]').focus().end().off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
            });
        }
    });

//close search form
    searchForm.on('click', '.btn-search-close', function(event){
        closeSearchForm();
        event.preventDefault();
    });

    coverLayer.on('click', function(){
        closeSearchForm();
    });

    $(document).keyup(function(event){
        if( event.which=='27' ){
            closeSearchForm();
        }
    });


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

    $(".testing").owlCarousel({
        autoplay:false,
        loop:true,
        items:1,
        margin:25,
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
                items:3,
                nav:true,
            }
        }
    });

    $(".houses").owlCarousel({
        autoplay:false,
        loop:true,
        margin:10,
        dots: false,
        nav:true,
        responsiveClass:true,
        navText:["<span class='icon-double-left'></span>","<span class='icon-double-right'></span>"],
        responsive:{
            0:{
                items:1,
            },
            650:{
                items:3,
                nav:false,
            },
            768:{
                items:3,
                nav:false,
            },
            1000:{
                items:3,
                nav:false,
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

    $(".lazyestload").unveil(0,function() {
        $(this).on('load', function() {
            $(this).removeClass('lazyestload');
        });
    });

    /*---------- LEADERSHIP ----------*/
    $('.leadership a[data-fancybox]').fancybox({
        afterShow: function(instance, current) {
            var popupID = current.src;
            var pic = $(popupID).find(".lazyestload");
            $(pic).unveil(0,function() {
                $(this).on('load', function() {
                    $(this).removeClass('lazyestload');
                });
            });
        }
    });

});