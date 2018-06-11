$(document).ready(function(){
	$('.slider').bxSlider({
	    mode: 'fade',
	    auto: true,
	    autoControls: true,
	    pause: 7000
	}); 
    $('select').styler();

  $(window).scroll(function(){
	if ($(this).scrollTop() > 100) {
	$('.scrollup').fadeIn();
	} else {
	$('.scrollup').fadeOut();
	}
	});
	$('.scrollup').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
	});
});

$(document).ready(function(){
	$(".productRate").hover (
	function(){ /* при наведении мыши на блок с рейтингом, динамически добавляем блок с подсветкой выбранной оценки */
	    $(this).append("<span></span>");
	},
	function()
	{ /* при уходе с рейтинга, удаляем блок с подсветкой */
	    $(this).find("span").remove();
	});
	var rating;
	$(".productRate").mousemove (

	/*устанавливаем ширину блока с подсветкой таким образом, чтобы была выделена оценка, находящаяся под курсором мыши*/
	function(e){
	    if (!e) e = window.event;
	    if (e.pageX){
	           x = e.pageX;
	            } else if (e.clientX){
				x = e.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft) - document.documentElement.clientLeft;
			}
	        var posLeft = 0;
	        var obj = this;
	       while (obj.offsetParent)
	        {
	            posLeft += obj.offsetLeft;
	            obj = obj.offsetParent;
	        }
	        var offsetX = x-posLeft,
	            modOffsetX = 5*offsetX%this.offsetWidth; /* 5 - число возможных оценок */
	            rating = parseInt(5*offsetX/this.offsetWidth);
	        if(modOffsetX > 0) rating+=1;
	        $(this).find("span").eq(0).css("width",rating*16+"px"); /* ширина одной оценки, в данном случае одной звезды */
	});
	 
});







