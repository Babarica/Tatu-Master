$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        slidesToShow: 1,
        variableWidth: true,
        centerMode: true,
    });
    $('.slider__item').click(function(){
        var lindex = $(this).index();
        $( ".slider" ).slick('slickGoTo', parseInt(lindex)); // меняем слад на нужный индекс
        $('.slider__item li').removeClass('active'); // change class
        $(this).addClass('active');
    })
    $('.slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
        var slideIndex = $(this).index();
        $('.slider__item li').removeClass('active');
        $('.slider__item li').eq(currentSlide).addClass('active')
      });
      $('.header__burger').on('click', function(){
          $('.nav').slideToggle();
      })
      
}); 
const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}