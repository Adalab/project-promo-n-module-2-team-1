//collapsable titulos profile cards
'use strict';

const collapsableButton = document.querySelector('.js_collapsable');

console.log (collapsableButton);

const collapsableCard = document.querySelector('.js_collapsable_design');

function handleCollapsableClick () {
  collapsableCard.classList.toggle('hidden');
}

console.log('estoy aqui');

collapsableButton.addEventListener('click',handleCollapsableClick);