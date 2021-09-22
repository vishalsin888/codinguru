$(document).ready(function(){
    $(".header_links li a").on("click", function(e){
        // alert();
       
        var target = $(this).attr("href");
       
        $("html,body").animate({
            scrollTop : $(target).offset().top-75,
        },1000)
        e.preventDefault();
    });

    $(".home_pg").on("click", function(e){
        // alert();
       
        var target = $(this).attr("href");
        $("html,body").animate({
            scrollTop : $(target).offset().top-75,
        },1000)
        e.preventDefault();
    });
});