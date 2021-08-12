//collapsable titulos profile cards
'use strict';

const collapsableButton = document.querySelector('.js_collapsable');

const collapsableCard = document.querySelector('.js_collapsable_design');

function handleCollapsableClick () {
  collapsableCard.classList.toggle('hidden');
}



collapsableButton.addEventListener('click',handleCollapsableClick);