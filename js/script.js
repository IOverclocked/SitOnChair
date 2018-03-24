document.addEventListener('DOMContentLoaded', function() {


    var allImg = document.querySelectorAll('.boxImg');

    for(let i=0;i<allImg.length; i++){

        allImg[i].addEventListener('mouseover', function(){
            this.firstElementChild.hidden = true;
        })
        allImg[i].addEventListener('mouseout', function(){
            this.firstElementChild.hidden = false;
        })

    }

    //slider--------------------------------------------------------------------
    var img = ['black_chair.png', 'red_chair.png'],
        prev = document.querySelector('.prevSlide'),
        next = document.querySelector('.nextSlide'),
        boxImg = document.querySelector('.images'),
        sec = 2000;
        currentPhoto = 0,
        interval = setInterval(nextSlid, sec);

    function clearTimeAndStart(way){
        window.clearInterval(interval);
        interval = setInterval(way, sec);
    }
    function nextSlid(){
        boxImg.style.backgroundImage = "url(images/"+img[currentPhoto]+")";
        currentPhoto++;
        if(currentPhoto > img.length-1) currentPhoto = 0;
        clearTimeAndStart(nextSlid);
    }
    function prevSlide(){
        boxImg.style.backgroundImage = "url(images/"+img[currentPhoto]+")";
        currentPhoto--;
        if(currentPhoto < 0) currentPhoto = img.length-1;
        clearTimeAndStart(prevSlide);
    }

    prev.addEventListener('click', prevSlide)
    next.addEventListener('click', nextSlid);

    //kalkulator zamówieniowy
    /*
    var dropDown = document.querySelectorAll('.list_arrow');

    for(let i=0; i<dropDown.length; i++){
        dropDown[i].addEventListener('click', function(){
            var list = this.nextElementSibling;
            list.style.display = 'block';
        })
    }
    */
});
