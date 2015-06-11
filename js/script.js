$(document).ready(function(){

/*	$('.entryField').blur(function(){
		if (this.value == "") {
			this.value = "Add items here.";
		}
	})
	.focus(function(){
		if (this.value == "Add items here.") {
			this.value = "";
		}
	});*/

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

	$('.removeButton').click(function(){
		$(this).parent().remove();
	});

});