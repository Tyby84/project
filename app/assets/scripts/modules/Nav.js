import $ from 'jquery';

import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';


class Nav {
	constructor() {
		this.navbar = $('.nav');
		this.links = $('.nav a, .nav__footer__ul a, .btn--start');
		this.liTags = $('.nav__li, .nav__footer__li');
		this.secTitle = $('.about');
		this.skillsTitle = $('.skills');
		this.contTitle = $('.contact');
		this.narrowNav();
		this.smoothing();
		this.addMenuActive();
		this.activeNav();
	}
	addMenuActive() {
		$('.nav__li').click(function() {
			var menuItem = $(this);
			$('.nav__li').removeClass('nav__li--active');
			menuItem.addClass('nav__li--active');
		});
			
		
	}
	
	
	smoothing() {
		this.links.smoothScroll({
			offset: -90,
			speed: 1000
			
		});
	}
	
	narrowNav() {
		var that = this;
		var currEl = this.secTitle[0];
		new Waypoint({
			element: currEl,
			handler: function(direction) {
				$('.nav__li').removeClass('nav__li--active');
				$('nav a#about-link > li').addClass('nav__li--active');
				
				if(direction == 'down') {
					that.navbar.addClass('nav--scrolling');
					that.liTags.addClass('nav__li--scrolling');
					
					
				} else {
					that.navbar.removeClass('nav--scrolling');
					that.liTags.removeClass('nav__li--scrolling');
					$('.nav__li').removeClass('nav__li--active');
				}
			},
			offset: '10%'
		});
		
		new Waypoint({
			element: currEl,
			handler: function() {
				$('.about__desc').addClass('about__desc--visible');
				$('.about__pic').addClass('about__pic--visible');
			},
			offset: '90%'
		});
	}
	
	activeNav() {
		var that = this;
		var currEl = that.skillsTitle[0];
		var currContEl = that.contTitle[0];
		
		
		new Waypoint({
			element: currEl,
			handler: function() {
					$('.nav__li').removeClass('nav__li--active');
					$('nav a#skills-link > li').addClass('nav__li--active');
				
			},
			offset:'10%'
		});
		new Waypoint({
			element: currContEl,
			handler: function() {
				$('.nav__li').removeClass('nav__li--active');
				$('nav a#contact-link > li').addClass('nav__li--active');
			},
			offset: '80%'
			
			
		});
	}
}

export default Nav;