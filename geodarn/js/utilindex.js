/*Método no qual faz o fade in/fade out nas divs sliders*/
function initSliders()
{
	$("#sliders > div:gt(0)").hide();
	setInterval(function() 
	{ 
	  $('#sliders > div:first')
	    .fadeOut(0)
	    .next()
	    .fadeIn(1000)
	    .end()
	    .appendTo('#sliders');
	},  4000);
}

function stopVideo()
{
  $("#pinturaMecanizada").attr("src","");
}

function scrollToElement(elementDiv)
{
  jQuery("body,html").animate({
        scrollTop: $(elementDiv).offset().top
  }, 600);
}

function initModal()
{

}
