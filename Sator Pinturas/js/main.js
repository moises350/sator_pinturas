
/*Método que da um scroll até o elemento desejado
 @param elementDiv
*/
function scrollToElement(elementDiv)
{
  $("body,html").animate({
    scrollTop: $(elementDiv).offset().top
  }, 600);
}


function initSlick() {
  $('.slider-servicos').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,    
    cssEase: 'linear'
  });
}
