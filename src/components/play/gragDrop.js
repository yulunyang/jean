import $ from 'jquery';


// test

$(function(){
    var $tabPanel = $('#tab-panel') ,
        $tabs = $tabPanel.find('.tabs') ,
        $tab = $tabs.find('a') ,
        $tabContent = $tabPanel.find('.tab-content') ,
        $content = $tabContent.find('> li');
     
    $tab.eq(0).addClass('active');
    $content.eq(0).show();
     
    $tab.on('click',function(){
        var $tabIndex = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $content.eq($tabIndex).show().siblings().hide();
    });
});
