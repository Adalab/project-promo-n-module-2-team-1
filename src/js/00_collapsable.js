'use strict';

// * collapsable titulos profile cards

// ! section design
const collapsableButtonDesign = document.querySelector('.js_collapsable_design_button');
const collapsableCardDesign = document.querySelector('.js_collapsable_design');

function handleCollapsableDesign () {
  collapsableCardDesign.classList.toggle('hidden');
  collapsableCardFill.classList.add('hidden');
  collapsableCardShare.classList.add('hidden');

}

collapsableButtonDesign.addEventListener('click',handleCollapsableDesign);

// ! section fill
const collapsableButtonFill = document.querySelector('.js_collapsable_fill_button');
const collapsableCardFill = document.querySelector('.js_collapsable_fill');

function handleCollapsableFill () {
  collapsableCardFill.classList.toggle('hidden');
  collapsableCardDesign.classList.add('hidden');
  collapsableCardShare.classList.add('hidden');
}

collapsableButtonFill.addEventListener('click',handleCollapsableFill);

// ! section share
const collapsableButtonShare = document.querySelector('.js_collapsable_share_button');
const collapsableCardShare = document.querySelector('.js_collapsable_share');

function handleCollapsableShare () {
  collapsableCardShare.classList.toggle('hidden');
  collapsableCardDesign.classList.add('hidden');
  collapsableCardFill.classList.add('hidden');
}

collapsableButtonShare.addEventListener('click',handleCollapsableShare);

// const collapsableButton = document.querySelector('.js_collapsable');

// const collapsableCard = document.querySelector('.js_collapsable_design');

// function handleCollapsableClick () {
//   collapsableCard.classList.toggle('hidden');
  
// }



// collapsableButton.addEventListener('click',handleCollapsableClick);