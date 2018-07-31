import $ from 'jquery';

class Skills {
	constructor() {
		this.title = $('#skills');
		this.item = $('div.skills__item');
		this.showSkills();
	}
	
	showSkills() {
		var that = this;
		var item = this.item;
		console.log(item);
		new Waypoint({
			element: that.title[0],
			handler: function() {
				that.item.addClass('skills__item-show');
			},
			offset:'35%'
		});
	}
}

export default Skills;
