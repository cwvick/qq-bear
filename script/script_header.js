$(function() {
	$(document).on('click', '.burger_nav', function(event) {
		event.preventDefault();
		if (!$('.phone_menu .show_nav_box').is(':visible')) {
			$('.phone_menu .show_nav_box').height($('body').height());
			$('.phone_menu .show_nav_box').stop().slideDown();
		} else {
			$('.phone_menu .show_nav_box').stop().slideUp();
		}
	});
});