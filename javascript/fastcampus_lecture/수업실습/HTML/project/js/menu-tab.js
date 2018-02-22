$(document).ready(function(){
    var mainMenu = $('.main-menu > li');
    // var boardList = $('.board > div');
    var tab = $('.board h2');
    var relatedlist = $('.related-list');
    // var related = $('.related-list > li');


    // mainMenu.hover(function() {
    //     $(this).find('.sub-menu').toggleClass('sub-menu-act');
    // });

    // mainMenu.focusin(function(){
    //     $(this).siblings().find('.sub-menu').removeClass('sub-menu-act');
    //     $(this).find('.sub-menu').addClass('sub-menu-act');
    // });

    // mainMenu.on('mouseenter focusin', function(){
    //     $(this).siblings().find('.sub-menu').removeClass('sub-menu-act');
    //     $(this).find('.sub-menu').addClass('sub-menu-act');
    // })

    mainMenu.on('mouseenter focusin', function(){
        $(this).siblings().removeClass('menu-act');
        $(this).addClass('menu-act');
    });

    // boardList.on('mouseenter focusin', function() {
    //     // console.log(this);
    //     $(this).siblings().removeClass('board-act');
    //     $(this).addClass('board-act');
    // });

    tab.on('click', function() {
        $(this).parent().addClass('board-act').siblings().removeClass('board-act');
    })

    relatedlist.on('mouseenter focusin', function() {
        $(this).addClass('related-act');
    })
    relatedlist.on('mouseout focusout', function(){
        $(this).removeClass('related-act');
    })

    // related.on('mouseenter focusin', function () {
    //     console.log("here you are");
    //     $(this).parent().removeClass('related-act');
    //     $(this).parent().addClass('related-act');
    // });
});
