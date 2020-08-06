$(document).ready(function () {
	$('.up').on('click', function(){
		$('html, body').animate({
			scrollTop: 0
		}, 'slow');
	});
	$("form").on('submit', function(event){
		event.preventDefault();
		alert('Thanks for contacting. Looking forward to be a part of your program.');
	});
});
