$(document).ready(function () {
    var contentOffset = getOffset();

    function getOffset() {
        var allOffsets = $("#firstSection").offset();
        return allOffsets.top;
    }

    $(window).resize(function () {
        contentOffset = getOffset();
    });

    $(window).scroll(function () {
        var windowTop = $(window).scrollTop() + 100;

        if (windowTop > contentOffset) {
            $(".phone").slideDown(500); //fadeIn
        } else {
            $(".phone").slideUp(500); //fadeOut
        }
    }); 

    // loader
    $("html").addClass('cl-preload');

    $(window).on('load', function() {

        //force page scroll position to top at page refresh
        $('html, body').animate({ scrollTop: 0 }, 'normal');

        // will first fade out the loading animation 
        $("#loader").fadeOut("slow", function() {
            // will fade out the whole DIV that covers the website.
            $("#preloader").delay(300).fadeOut("slow");
        }); 
        
        // for hero content animations 
        $("html").removeClass('cl-preload');
        $("html").addClass('cl-loaded');
    
    });
    // end loader
});