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
            $(".phone").fadeIn(300);
        } else {
            $(".phone").fadeOut(300);
        }
    });
});