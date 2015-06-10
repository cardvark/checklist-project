$(document).ready(function(){

	$('.itemBlock').mouseenter(function(){
		$(this).children('.removeButton').show();
		$(this).css('cursor','move');
	})
	.mouseleave(function(){
		$(this).children('.removeButton').hide();
		$(this).css('cursor','initial');
	});

	$('.checkbox').click(function(){
		$(this).toggleClass('checked');
		$(this).siblings('.itemInfo').toggleClass('struck');
	});
});