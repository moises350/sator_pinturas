
/*Método que faz com que o video pare quando a modal é fechada*/
function stopVideo()
{
  $("#pinturaMecanizada").attr("src","");
}

/*Método que da um scroll até o elemento desejado
 @param element
*/
function scrollToElement(elementDiv)
{
  jQuery("body,html").animate({
        scrollTop: $(elementDiv).offset().top
  }, 600);
}
