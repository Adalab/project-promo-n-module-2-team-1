'use strict';
//formulario rellena profile cards

//Name
const formName = document.querySelector('.js_name');
const formPreviewName = document.querySelector('.js_preview_name');

function handleName() {
  formPreviewName.innerHTML = formName.value;
}

formName.addEventListener("keyup", handleName);


//Job
const formJob = document.querySelector('.js_job');
const formPreviewJob = document.querySelector('.js_preview_job');

function handlerPrint() {
  formPreviewJob.innerHTML = formJob.value;
}

formJob.addEventListener('keyup', handlerPrint);

//RRSS

//inputs form
const formPhone = document.querySelector('.js_phone');
const formEmail = document.querySelector('.js_email');
const formGithub = document.querySelector('.js_github');
const formLinkedin = document.querySelector('.js_linkedin');

//preview card

const previewLinkedin = document.querySelector('.js_preview_linkedin');
const previewPhone = document.querySelector('.js_preview_phone');
const previewEmail = document.querySelector('.js_preview_email');
const previewGithub = document.querySelector('.js_preview_github');



function handledUpdateGithub() {

    previewGithub.setAttribute("href", formGithub.value);

}

function setValueInput() {
    previewGithub.setAttribute("href", formGithub.value);

}

formGithub.addEventListener('change', setValueInput());


