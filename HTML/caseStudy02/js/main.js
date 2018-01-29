$(document).ready(function() {
  var container = $('.menubar-container');
  var btn = $('.btn-menubar');
  var btnMenubar = $('.btn-menubar, .menubar');
  var menubar = $('.menubar');
  var menu = $('.main-menu');
  var menuList = $('.main-menu > li');
  var menuLast = $('.main-menu > li:last-child');
  var menuText = $('.main-menu span');
  var subMenu = $('.sub-menu');
  var subLast = $('.main-menu li:last-child li:last-child a');

  btnMenubar.click(function() {
    menu.toggleClass('main-menu-act');
    btnMenubar.toggleClass('menubar-act');
    if (btn.hasClass('menubar-act')) {
      btn.text("메인메뉴 닫기");
    } else {
      btn.text("메인메뉴 열기");
    }
  });
  menuList.click(function(e) {
    e.preventDefault();
    $(this).siblings().find('.sub-menu').removeClass('sub-menu-act');
    $(this).find('.sub-menu').addClass('sub-menu-act');
    $(this).siblings().find(menuText).attr('class', 'icon-plus');
    $(this).find(menuText).attr('class', 'icon-minus');
  });
  menuList.keyup(function(e) {
    e.preventDefault();
    if (e.keyCode == 13 || e.keyCode == 32) {
      $(this).siblings().find('.sub-menu').removeClass('sub-menu-act');
      $(this).find('.sub-menu').addClass('sub-menu-act');
      $(this).siblings().find('span').attr('class', 'icon-plus');
      $(this).find('span').attr('class', 'icon-minus');
    }
  });
  menuList.focusin(function() {
    $(this).siblings().find('.sub-menu').removeClass('sub-menu-act');
    $(this).siblings().find('span').attr('class', 'icon-plus');
  });
  menuLast.focusout(function() {
    if (!(subMenu.hasClass('sub-menu-act'))) {
      menu.removeClass('main-menu-act');
      btnMenubar.removeClass('menubar-act');
      btn.text("메인메뉴 열기");
    }
  });
  subLast.focusout(function() {
    btnMenubar.removeClass('menubar-act');
    btn.text("메인메뉴 열기");
    menu.removeClass('main-menu-act');
    subMenu.removeClass('sub-menu-act');
    $(this).parents('li').find('span').attr('class', 'icon-plus');
  });
});