//formulario rellena profile cards
'use strict';

const formName = document.querySelector('.js_name');
const formPreviewName = document.querySelector('.js_preview_name');

function handleName(){
formPreviewName.innerHTML = formName.value;
}

formName.addEventListener("keyup", handleName);


