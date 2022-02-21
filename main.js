//variables
'use strict'

var slider =  document.getElementById('slider'),
    sliderDots = Array.prototype.slice.call(document.getElementById('slider-dots').children),
sliderContent = Array.prototype.slice.call(document.getElementById('slider-content').children),
sliderLeftArrow = document.getElementById('left-arrow'),
sliderRightArrow = document.getElementById('right-arrow'),
sliderSpeed = 4500,
currentSlide = 0,
currentActive = 0,
sliderTimer,
    touchStartPos,
    TouchEndPos,
    TouchPosDiff,
    ignoreTouch = 30;
;


window.onload = function(){

    //slider script
    function playSlide (slide) {
        for (var k = 0; k < sliderDots.length; k++){
            sliderContent[k].classList.remove('active');
            sliderContent[k].classList.remove('inactive');
            sliderDots[k].classList.remove('active');
        }

        if (slide < 0){
            slide = currentSlide = sliderContent.length-1;
        }

        if (slide > sliderContent.length - 1){
            slide = currentSlide = 0;
        }

        if (currentActive != currentSlide){
            sliderContent[currentActive].classList.add('inactive');
        }

        
        sliderContent[slide].classList.add('active');
        sliderDots[slide].classList.add('active');

        currentActive = currentSlide;

        clearTimeout(sliderTimer);
        sliderTimer = setTimeout(function(){
            playSlide(currentSlide += 1);
        }, sliderSpeed)

    }

    sliderLeftArrow.addEventListener)'click', function() {
        playSlide(currentSlide -= 1);
    }

};