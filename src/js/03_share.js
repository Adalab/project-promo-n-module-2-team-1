const cardDoneCollapsable = document.querySelector(".js_card--done");
const shareBtn = document.querySelector(".js_share--btn");
const urlShare = document.querySelector(".js_url");
const undoneShare = document.querySelector(".js_undone");
const undoneTwitter = document.querySelector(".js_undone2");
const twitterLink = document.querySelector('js_twitter_link'); 


function handleShareBtn(event) {
  event.preventDefault();

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
          const textCard = "Echa un vistazo a mi tarjeta de visita 🌱 ";
          twitterLink.href = `https://twitter.com/intent/tweet?text=${textCard}&url=${data.cardURL}&hashtags=Adalabers,JavaScript,PromoMileva,week7of12`;

        } else {
          cardDoneCollapsable.classList.remove("hidden");
          undoneShare.classList.add("hidden");
          undoneTwitter.classList.add("hidden");

          if (formObject.name === "") {
            urlShare.innerHTML = "Lo siento 😓, debes rellenar tu nombre";
          } else if (formObject.job === "") {
            urlShare.innerHTML = "Lo siento 😓, debes rellenar tu profesión";
          } else if (formObject.photo === "") {
            urlShare.innerHTML = "Lo siento 😓, debes rellenar tu foto";
          }  else if (formObject.email === "") {
            urlShare.innerHTML = "Lo siento 😓, debes rellenar tu email";
          } else if (!validateEmail(formObject.email)) {
            urlShare.innerHTML = "Lo siento 😓, debes rellenar bien tu email, falta un @ o algo 😉";
          } else if (formObject.phone === "") {
            urlShare.innerHTML = "Lo siento 😓, debes rellenar tu móvil";
          } else if (!validatePhone(formObject.phone)) {
            urlShare.innerHTML = "Lo siento 😓, debes rellenar bien tu móvil, falta algo 😉";
          } else if (formObject.linkedin === "") {
            urlShare.innerHTML = "Lo siento 😓, debes rellenar tu linkedin";
          } else if (formObject.github === "") {
            urlShare.innerHTML = "Lo siento 😓, debes rellenar tu github";
          }
        }
      });
  }


shareBtn.addEventListener("click", handleShareBtn);
