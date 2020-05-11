$(document).ready(function() {
    var height = $('.interface').height() - 26;
    var final = "-" + height + 'px';
    $(".interface").css('bottom', final);
    $(window).resize(function() {
        height = $('.interface').height() - 26;
        final = "-" + height + 'px';
        $(".interface").css('bottom', final);
    });
    $(".infobutton, arrow").click(function() {
        if ($(".arrow").hasClass("active")) {
            $(".arrow").removeClass("active");
            $(".interface").removeClass("show");
        } else {
            $(".arrow").addClass("active");
            $(".interface").addClass("show");
            $(".infobutton").removeClass("pulse");
        }
    });
});