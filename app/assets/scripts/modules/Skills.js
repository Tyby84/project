import $ from 'jquery';

class Skills {
	constructor() {
		
		this.showSkills();
	}
	
	showSkills() {
		$('.skills__hexa').hover(function(){
			$(this).children().css({"opacity": 1});
			$('.skills__instruct').fadeOut(500);
		});
		
	}
}

export default Skills;


