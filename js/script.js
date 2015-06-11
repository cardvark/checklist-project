$(document).ready(function(){

	function addLine(text) {
		$('.itemList').append('\
			<li class="itemBlock">\
				<div class="checkbox"></div>\
				<div class="itemInfo">' + text + '\
				</div>\
				<div class="removeButton"></div>\
			</li>\
		');
	}


	$('#entryField').keydown(function(e){
		var keycode = (e.keyCode ? e.keyCode : e.which);
		if (keycode == '13') {
			event.preventDefault();
			$('.entryButton').click();
		}
	});

	$('.entryButton').click(function(){
		var entryText = $('#entryField').val();

		if (entryText == "") {
			alert("Please enter an item");
		} else {
			addLine(entryText);
		}

		document.getElementById('entryField').value = "";

	});

	$('.itemList').sortable({ axis: "y" });

});

$(document).on('mouseenter','.itemBlock',(function(){
	$(this).children('.removeButton').show();
	$(this).css('cursor','move');
}));
$(document).on('mouseleave','.itemBlock',(function(){
	$(this).children('.removeButton').hide();
	$(this).css('cursor','initial');
}));

$(document).on('click','.checkbox',(function(){
	$(this).toggleClass('checked');
	$(this).siblings('.itemInfo').toggleClass('struck');
}));

$(document).on('click','.removeButton',(function(){
	$(this).parent().remove();
}));


// enter button is "13"


