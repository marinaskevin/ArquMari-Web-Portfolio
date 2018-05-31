$(document).ready(function(){
    $('#page').css("height",$(window).height());
    $('a').click(function(){
        if($(this).attr("data-target"))
        {
            target = $(this).attr("data-target");
            $('#page').animate({scrollTop: $('#page').scrollTop() + $('#'+target).position().top}, 800);
        }
    })
    $(window).resize(function() {
        $('#page').css("height",$(window).height());
    });
});