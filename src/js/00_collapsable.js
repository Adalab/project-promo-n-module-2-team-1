//collapsable titulos profile cards
'use strict';

const collapsableButton = document.querySelector('.js_collapsable');

const collapsableCardDesign = document.querySelector('.js_collapsable_design');

const collapsableArrow = document.querySelector('.js_arrow');

// const collapsableCardFill = document.querySelector('.js_collapsable_fill');

// const collapsableCardShare = document.querySelector('.js_collapsable_share');


function handleCollapsableClickDesign () {
  collapsableCardDesign.classList.toggle('hidden');

  collapsableArrow.classList.toggle('fa-chevron-up');

}

collapsableButton.addEventListener('click',handleCollapsableClickDesign);

