'use strict';
//formulario rellena profile cards

// * preview card: escribimos las constantes, solo del preview (card)
const paletteOne = document.querySelector('.js_palette_1');
const paletteTwo = document.querySelector('.js_palette_2');
const paletteThree = document.querySelector('.js_palette_3');
const formPreviewName = document.querySelector('.js_preview_name');
const formPreviewJob = document.querySelector('.js_preview_job');
const previewLinkedin = document.querySelector('.js_preview_linkedin');
const previewPhone = document.querySelector('.js_preview_phone');
const previewEmail = document.querySelector('.js_preview_email');
const previewGithub = document.querySelector('.js_preview_github');

// * hacemos el objeto que comprende todo el formulario: diseña y rellena
const formObject = {
  palette: "",
  name: "",
  job: "",
  phone: "",
  email: "",
  linkedin: "",
  github: "",
  photo: ""
}


// * seleccionamos todo el formulario para aplicarle el evento
const formEl = document.querySelector('.js_form');

// * creamos la funcion del escuchador para escribir en la previsualización el valor de cada uno de los inputs del objeto
function handledFormElUpdate(event) {
  // nos devuelve el name del input
  const inputName = event.target.name;
  
  //nos devuelve el valor del input
  const inputValue = event.target.value;

  //asigna al ID de cada objeto un valor,
  //el ID del objeto y el ID del formulario tienen que coincidir
  formObject[inputName] = inputValue;

  //escribe en cada elemento html de la card el valor del input del objeto

  //inputs innerHTML
  formPreviewName.innerHTML = formObject.name;
  formPreviewJob.innerHTML = formObject.job;
  
  //inputs agregar href 
  previewEmail.href = `mailto:${formObject.email}`;
  previewPhone.href = `+34${formObject.phone}`;
  previewLinkedin.href = `https://linkedin.com/in/${formObject.linkedin}`;
  previewGithub.href = `https://github.com/${formObject.github}`;

  // inputs radio
  // Condicional que evalua si el value al que se le ha hecho click tiene el valor "palette-number", para asi adicionar la clase que corresponde y cambiar colores de tarjeta 
  if (formObject.palette === 'palette-one') {
    paletteOne.classList.add(`palette-one`)
    paletteOne.classList.remove(`palette-two`)
    paletteOne.classList.remove(`palette-three`)
    
  } else if (formObject.palette === 'palette-two'){
    paletteTwo.classList.add(`palette-two`)
    paletteTwo.classList.remove(`palette-one`)
    paletteTwo.classList.remove(`palette-three`)
    
  } else {
    paletteThree.classList.add(`palette-three`)
    paletteThree.classList.remove(`palette-one`)
    paletteThree.classList.remove(`palette-two`)
    
  } 

}

// * el evento (escuchador) sobre el formulario completo
formEl.addEventListener('change', handledFormElUpdate);

// ! importante saber cual es el target y el currentTarget de la función, en este caso el target=cada elemento del formulario que tiene el foco puesto y el currentTarget=el formulario entero



