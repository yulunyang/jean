import $ from 'jquery'; 

$(function () {
    $("#Y_news_box").slice(0, 3).show();
    $("#Y_more").on('click', function (e) {
        e.preventDefault();
        $("#Y_news_box:hidden").slice(0, 4).slideDown();
        if ($("#Y_news_box:hidden").length == 0) {
            $("#Y_more").fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);
    });
});

// $('a[href=#top]').click(function () {
//     $('body,html').animate({
//         scrollTop: 0
//     }, 600);
//     return false;
// });

// $(window).scroll(function () {
//     if ($(this).scrollTop() > 50) {
//         $('.totop a').fadeIn();
//     } else {
//         $('.totop a').fadeOut();
//     }
// });