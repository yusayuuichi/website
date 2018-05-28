function checkWidth() {
	if ($(window).width() < 769) { //當視窗小於480時才運作
		$('.navbar-toggler').click();
	}
}