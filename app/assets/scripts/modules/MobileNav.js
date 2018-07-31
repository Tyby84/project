import $ from 'jquery';

class MobileNav {
	constructor() {
		this.menuIcon = $('.menu-bar');
		this.Menu = $('.nav__mobile');
		this.showMenu();
	}
	
	showMenu() {
		var that = this;
		this.menuIcon.click(function() {
			that.Menu.toggleClass('nav__mobile--shown');
		that.menuIcon.toggleClass('menu-bar--close');
			
		});
	}

}

export default MobileNav;