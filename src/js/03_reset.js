/* eslint-disable indent */
'use strict';

// formEl = document.querySelector('.js_form');
const btnReset = document.querySelector('.js-preview__button');

function resetValue(event) {

	// eslint-disable-next-line no-undef
	formEl.reset();
	event.preventDefault();


}

btnReset.addEventListener('click', resetValue);