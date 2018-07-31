import $ from 'jquery';

class Modal {
	constructor() {
		this.modalButton = $('.open-modal');
		this.modal = $('.modal');
		this.closeButton = $('.modal__close');
		this.events();
	
	}
	
	events() {
		this.modalButton.click(this.openModal.bind(this));
		this.closeButton.click (this.closeModal.bind(this));
		$(document).keyup(this.keyPress.bind(this));
		
	}
	
	openModal(e) {
		e.preventDefault();
		this.modal.addClass('modal--is-opened');	
	}
	
	closeModal() {
		
		this.modal.removeClass('modal--is-opened');
		
	}
	keyPress(e) {
		if (e.keyCode == 27) {
			this.closeModal();
		}
	}
	
}

export default Modal;