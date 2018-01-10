$(document).ready(function() {
	// Header Scroll
	$(window).on('scroll', function() {
		var scroll = $(window).scrollTop();

		if (scroll >= 40) {
			$('#header').addClass('fixed');
		} else {
			$('#header').removeClass('fixed');
		}
	});

	// Fancybox
	// $('.work-box').fancybox();

	// Flexslider
	$('.flexslider').flexslider({
		animation: "fade",
		directionNav: false,
	});

	var d= new Date('February 3,2018 16:00:00');
	var refreshCounter = function () {
		var timeLeft=d-new Date();
		var daysLeft=timeLeft/(1000*60*60*24);
		var hoursLeft=(daysLeft-parseInt(daysLeft))*24
		var minutesLeft= (hoursLeft-parseInt(hoursLeft))*60;
		var secLeft=(minutesLeft-parseInt(minutesLeft))*60;
		var sec=$('.sec');
		sec.html(parseInt(secLeft));
		$('.min').html(parseInt(minutesLeft));
		$('.hours').html(parseInt(hoursLeft));
		$('.days').html(parseInt(daysLeft));

		setInterval(()=>{
			var timeLeft=d-new Date();
			var daysLeft=timeLeft/(1000*60*60*24);
			var hoursLeft=(daysLeft-parseInt(daysLeft))*24
			var minutesLeft= (hoursLeft-parseInt(hoursLeft))*60;
			var secLeft=(minutesLeft-parseInt(minutesLeft))*60;
			var sec=$('.sec');
			sec.html(parseInt(secLeft));
			$('.min').html(parseInt(minutesLeft));
			$('.hours').html(parseInt(hoursLeft));
			$('.days').html(parseInt(daysLeft));

		},1000)
	}
	refreshCounter();
	function handleTabsFAQ() {
	        if($('#tabs-faq').length){
	            var tabs = $('#tabs-faq');
	            tabs.find('a').on('click', function () {
	                tabs.find('.fa-angle-right').removeClass('fa-angle-right').addClass('fa-plus');
	                $(this).find('.fa').removeClass('fa-plus').addClass('fa-angle-right');
	            });
	        }
	    }
	handleTabsFAQ();
	// Page Scroll
	var sections = $('section')
		nav = $('nav[role="navigation"]');

	$(window).on('scroll', function () {
	  	var cur_pos = $(this).scrollTop();
	  	sections.each(function() {
	    	var top = $(this).offset().top - 76
	        	bottom = top + $(this).outerHeight();
	    	if (cur_pos >= top && cur_pos <= bottom) {
	      		nav.find('a').removeClass('active');
	      		nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
	    	}
	  	});
	});
	nav.find('a').on('click', function () {
	  	var $el = $(this)
	    	id = $el.attr('href');
		$('html, body').animate({
			scrollTop: $(id).offset().top - 75
		}, 500);
	  return false;
	});

	// Mobile Navigation
	$('.nav-toggle').on('click', function() {
		$(this).toggleClass('close-nav');
		nav.toggleClass('open');
		return false;
	});
	nav.find('a').on('click', function() {
		$('.nav-toggle').toggleClass('close-nav');
		nav.toggleClass('open');
	});

	// Send e-mail
	$(function () {
      $('#mail-btn').click(function (event) {
        var email = 'fes.consilium@gmail.com';
        var subject = 'Contact FES';
        // var emailBody = 'Hi Sample,';
        // var attach = 'path';
        document.location = "mailto:"+email+"?subject="+subject+"&body="+emailBody; /*+"?attach="+attach;*/
      });
    });
});
