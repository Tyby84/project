import $ from 'jquery';

class Footer {
	constructor() {
		this.d = new Date();
		this.hour = this.d.getHours();
		this.min = this.d.getMinutes();
		this.year = this.d.getFullYear();
		this.month = this.d.getMonth();
		this.dayNum = this.d.getDate();
		this.day = this.d.getDay();
		this.days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
		this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		this.displayHour = $('.dispHour');
		this.displayMinute = $('.dispMin');
		this.displayYear = $('.dispDate');
		this.displayMonth = $('.dispMonth');
		this.displayDay = $('.dispDay');
		this.displyDayNum = $('.dispDayNum');
		this.separate = $('.separator, .welcome__span');
		this.showTime();
		this.flashingSep();
		
	}
	showTime() {
		/*var countDays = this.day;*/
		this.displayHour.append(this.hour);
		
		if(this.min < 10) {
			this.displayMinute.text('0' + this.min);
		} else {
			this.displayMinute.append(this.min);
		}
		this.displayYear.append(this.year);
		
		this.displayMonth.text(this.months[this.month]);
		this.displayDay.text(this.days[this.day]);
		this.displyDayNum.text(this.dayNum);
		
		
	}
	flashingSep() {
		var that = this;
		setInterval(function() {that.separate.toggleClass('separator--on')}, 1000);
	}
		
}

export default Footer;
