const cardDoneCollapsable = document.querySelector(".js_card--done");
const shareBtn = document.querySelector(".js_share--btn");
const urlShare = document.querySelector(".js_url");
const undoneShare = document.querySelector(".js_undone");
const undoneTwitter = document.querySelector(".js_undone2");


function handleShareBtn(event) {
  event.preventDefault();

  // if (formObject.name === "") {
  //   undoneShare.innerHTML = "Lo siento 😓, debes rellenar tu nombre";
  //   cardDoneCollapsable.classList.remove('hidden');
  //   urlShare.classList.add('hidden')
  //   undoneTwitter.classList.add('hidden')
  // } else if (formObject.job === "") {
  //   undoneShare.innerHTML = "Oops! Tienes que rellenar tu puesto de trabajo!";
  //   cardDoneCollapsable.classList.remove('hidden');
  //   urlShare.classList.add('hidden')
  // } else if (formObject.photo === "") {
  //   undoneShare.innerHTML = "Oops! Tienes que subir tu foto!";
  //   cardDoneCollapsable.classList.remove('hidden');
  //   urlShare.classList.add('hidden')
  //   undoneTwitter.classList.add('hidden')
  // } else if (formObject.email === "") {
  //   undoneShare.innerHTML = "Oops! Tienes que rellenar tu email!";
  //   cardDoneCollapsable.classList.remove('hidden');
  //   urlShare.classList.add('hidden')
  // } else if (!validateEmail(formObject.email)) {
  //   undoneShare.innerHTML = "Oops! no has puesto bien el email =(";
  //   cardDoneCollapsable.classList.remove('hidden');
  //   urlShare.classList.add('hidden')
  // } else if (formObject.phone === "") {
  //   undoneShare.innerHTML = "Oops! Tienes que rellenar tu teléfono!";
  //   cardDoneCollapsable.classList.remove('hidden');
  //   urlShare.classList.add('hidden')
  // } else if (!validatePhone(formObject.phone)) {
  //   undoneShare.innerHTML = "Oops! no has puesto bien el número =(";
  //   cardDoneCollapsable.classList.remove('hidden');
  //   urlShare.classList.add('hidden')
  // } else if (formObject.linkedin === "") {
  //   undoneShare.innerHTML =
  //     "Oops! Tienes que rellenar tu usuario de LinkedIn!";
  //     cardDoneCollapsable.classList.remove('hidden');
  //     urlShare.classList.add('hidden')
  // } else if (formObject.github === "") {
  //   undoneShare.innerHTML =
  //     "Oops! Tienes que rellenar tu usuario de GitHub!";
  //     cardDoneCollapsable.classList.remove('hidden');
  //     urlShare.classList.add('hidden')
  // } else {
    fetch("https://awesome-profile-cards.herokuapp.com/card", {
      method: "POST",
      body: JSON.stringify(formObject),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(formObject);
        urlShare.innerHTML = data.cardURL;
        urlShare.href = data.cardURL;

        if (data.success) {
          cardDoneCollapsable.classList.remove("hidden");
        } else {
          cardDoneCollapsable.classList.remove("hidden");
          undoneShare.classList.add("hidden");
          undoneTwitter.classList.add("hidden");
          urlShare.innerHTML = "error:" + data.error;
        }
      });
  }


shareBtn.addEventListener("click", handleShareBtn);
