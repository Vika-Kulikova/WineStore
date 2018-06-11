$(document).ready(function() {
	$('select').styler();
	$("a#product-zoom").fancybox({
		'overlayShow'	: false,
		'transitionIn'	: 'elastic',
		'transitionOut'	: 'elastic',
		'hideOnContentClick' : true,
		'speedIn' : 500
	});
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
	$(".productRate").hover (function() { /* при наведении мыши на блок с рейтингом, динамически добавляем блок с подсветкой выбранной оценки */
	    $(this).append("<span></span>");
		},
		function() { /* при уходе с рейтинга, удаляем блок с подсветкой */
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
	var width = $("#content img").attr("width");
	var height = $("#content img").attr("height");
	   z = width/height;
	   		$("#slider").slider({
			orientation: "horizontal",
			min: 263,
			max: 400,
			value: width,
			slide: function(event, ui) {
			y = Math.round(ui.value/z);
				$('#content img').width(ui.value);
				$('#content img').height(y);
			}
		});
});
