jQuery(document).ready(function($) {
	if($("#slideshow").length) {
		$('#slideshow > div:gt(0)').hide();
		setInterval(function() { 
		$('#slideshow > div:first')
			.fadeOut(1000)
			.next()
			.fadeIn(1000)
			.end()
			.appendTo('#slideshow');
		},  5000);
	}
}); /* end of as page load scripts */