let form = $('#form');
let inputEmail = $('#femail');
form.submit(function(e){e.preventDefault();});

let buttonClosePopup = $('#closepopup');
let wrapperpopup = $('.wrapper-popup');

buttonClosePopup.click(function(event) {
	wrapperpopup.toggle(500);
	var keyClose = true;

	localStorage.setItem("close",keyClose);
});

function checkClose(event) {
	if(localStorage.getItem(close) === true) {
		document.getElementsByClassName('wrapper-popup').style.display = 'none';
	}
}