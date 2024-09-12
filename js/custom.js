
$(function () { 

// Navbar
$('.nav-link').on('click',function(){
    $(".navbar-collapse").collapse('hide');
});


// AOS ANIMATION
AOS.init({
    disable: 'mobile',
    duration: 800,
    anchorPlacement: 'center-bottom'
});


// SmoothScroll
$(function() {
    $('.nav-link').on('click',function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 0
        }, 1000);
            event.preventDefault();
    });
});


// Project Slide
$('#project-slide').owlCarousel({
    loop: true,
    center: true,
    autoplayHoverPause: false,
    autoplay: true,
    margin: 30,
    responsiveClass: true,
    responsive:{
        0:{
            items:1,
        },
        768:{
            items:2,
        }
    }
});


});

