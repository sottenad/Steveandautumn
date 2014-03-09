$(function(){

	$(window).resize(function(){
		resize()
	})
	resize();

})

function resize(){
	var wh = $(window).height()
	var ww = $(window).width()
	var content = $('.home .content');
	$('.home').height(wh);
	var ptop = wh/2 - 150;
	var pleft = ww/2-(content.width()/2)
	content.css({'top': ptop, 'left': pleft});
}