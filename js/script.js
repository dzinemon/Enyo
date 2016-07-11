$(function() {
	var $toggle = $('#toggle');
	
	$toggle.on('click', function() {
		var $menu = $(this).siblings('ul');
		
		$menu.slideToggle();
	});
});