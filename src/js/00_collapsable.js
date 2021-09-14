/* eslint-disable no-console */
/* eslint-disable indent */
'use strict';

const headerClicks = document.querySelectorAll('.js-collapsible');

function handleHeaderClick(e) {
  const t = e.currentTarget.closest('.js-hidden')
    , n = document.querySelectorAll('.js-hidden');
  for (const e of n) { t === e ? e.classList.toggle('hidden') : e.classList.add('hidden'); }
}
for (const e of headerClicks) { e.addEventListener('click', handleHeaderClick); }

