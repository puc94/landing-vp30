jQuery(window).load(function() {
        // will first fade out the loading animation
	jQuery(".status").delay(500).fadeOut();
        // will fade out the whole DIV that covers the website.
	jQuery(".preloader").delay(1000).fadeOut("slow", function() {
		wow = new WOW(
			{
				animateClass: 'animated',
				offset:       100
			}
		);
		wow.init();
	});
})

$(document).ready(function() {
	// Smooth scrolling using jQuery easing
	$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		if (target.length) {
			$('html, body').animate({
				scrollTop: (target.offset().top)
			}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});

	$('.accordions').on('click', '.accordion-title', function() {
		var accordion = $(this).parents('.accordion');
		var panel = accordion.find('.accordion-panel');
		accordion.toggleClass('active');
		
		if (accordion.hasClass('active')) {
			panel.css('max-height', panel.prop('scrollHeight') + "px");
		}
		else {
			panel.css('max-height', 0);
		}
	});
});