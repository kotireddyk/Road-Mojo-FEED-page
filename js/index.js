$(document).ready(function(){
	$("#menu li").click(function(){
    $(this).css("color","#fe5435").siblings().css("color","#000");

	});
	/*$(".circle").hover(function(){
		$(this).removeClass('circle').addClass('circleh');
	},function(){
		$(this).removeClass('circleh').addClass('circle');
	});*/
	$('.verticalLine a').hover(function(){
		$('.circle').removeClass('circle').addClass('circleh');
		$('#plus').attr('src', 'img/plus-colr.png');
	},function(){
		$('.verticalLine span').removeClass('circleh').addClass('circle');
		$('#plus').attr('src', 'img/plus.png');

	});

	$('.txtsrch').click(function(){
		document.getElementsByName('search')[0].placeholder='Search for roadtrip and places...';
		$('#menu, .ecli').css("display","none");
		$('.srch').removeClass('srch').addClass('srchb');
		$(this).removeClass('txtsrch').addClass('textsearch');

	});
});