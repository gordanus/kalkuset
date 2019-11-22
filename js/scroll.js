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
});