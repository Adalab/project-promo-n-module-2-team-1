'use strict';

const btnReset = document.querySelector('.js-preview__button--reset');

function resetValue(ev) {
    btnReset.reset();
    return resetValue;
}

btnReset.addEventListener('click', resetValue);