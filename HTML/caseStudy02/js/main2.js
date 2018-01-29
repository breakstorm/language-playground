$(document).ready(function(){
    var container = $('.menubar-container');
    var btnMenubar = $('.btn-menubar, .menubar');
    var btn = $('.btn-menubar');
    var menu = $('.main-menu')

    btnMenubar.on('click', function(){
        container.toggleClass('menubar-act');
        menu.toggleClass('menu-act')
    })
});