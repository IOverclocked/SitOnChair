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


    let btnPrev = $('.slider-prev');
    let btnNext = $('.slider-next');
    let chair = ["black_chair", "red_chair"];
    let counter = 0;

    btnPrev.on('click', function() {
        counter++;

        if(counter >= chair.length) {
            counter = 0
        }

        $('.slider-images-box').css({
            background: "url(images/"+chair[counter]+".png) no-repeat center"
        })

    })

    btnNext.on('click', function() {
        counter--;

        if(counter < 0) {
            counter = chair.length-1;
        }

        $('.slider-images-box').css({
            background: "url(images/"+chair[counter]+".png) no-repeat center"
        })
    })

    $('.news-img').on('mouseover', function() {
        $(this).find('div').hide();
    })
    $('.news-img').on('mouseout', function() {
        $(this).find('div').show();
    })


})
