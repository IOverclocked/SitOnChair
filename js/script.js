document.addEventListener('DOMContentLoaded', function(){


    var hamburger = document.querySelector('.icon-menu'),
        menuCategory = document.querySelectorAll('.menu > ul > li'),
        menuSubcategory = [],
        menu = $('.menu'),
        subcategoryBox = $('.menu > ul ul');


    hamburger.addEventListener('click', function(){
        menu.slideToggle();
        subcategoryBox.slideUp();
    })

    menuCategory.forEach(function(li){
        li.addEventListener('click', function(){
            var $this = $(this).children().last();
            $this.slideToggle();
        })
        menuSubcategory.push(li.lastElementChild.children);
    })

    for(let i=0; i<menuSubcategory.length; i++){
        for(let j=0; j<menuSubcategory[i].length; j++){
            menuSubcategory[i][j].addEventListener('click', function(e){
                e.stopPropagation();
                subcategoryBox.slideUp();
                menu.slideUp();
            })
        }
    }


})
