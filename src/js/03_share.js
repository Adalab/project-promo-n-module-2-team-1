const cardDoneCollapsable = document.querySelector(".js_card--done");
const shareBtn = document.querySelector(".js_share--btn");
const urlShare = document.querySelector(".js_url");
const undoneShare = document.querySelector(".js_undone");
const undoneTwitter = document.querySelector(".js_undone2");
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
      } else {
        cardDoneCollapsable.classList.remove("hidden");
        undoneShare.classList.add("hidden");
        undoneTwitter.classList.add("hidden");
        urlShare.innerHTML = "error:" + data.error;
      }
    });
}

shareBtn.addEventListener("click", handleShareBtn);
