$(function() {

    let hamburger = $('.icon-menu'),
        menuCategory = $('.menu > ul > li'),
        menuSubcategory = $('.menu > ul li').find('ul'),
        menu = $('.menu'),
        subcategoryBox = $('.menu > ul ul');

    hamburger.on('click', function() {
        menu.slideToggle();
        subcategoryBox.slideUp();
    })

    menuCategory.on('click', function() {
        $(this).children().last().slideToggle();
    })

    menuSubcategory.on('click', function(e) {
        e.stopPropagation();
        subcategoryBox.slideUp();
    })

})
