'use strict';

// formEl = document.querySelector('.js_form');
const btnReset = document.querySelector('.js-preview__button--reset');

function resetValue(event) {

    formEl.reset();
    event.preventDefault();

}

btnReset.addEventListener('click', resetValue);