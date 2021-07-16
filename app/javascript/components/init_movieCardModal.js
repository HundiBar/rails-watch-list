const movieCardModal = () => {
  const cards = document.querySelectorAll(".search");
  cards.forEach(card => {
    card.addEventListener("click", (event) => {
      const modal = document.querySelector(".search-modal-card");
      modal.innerHTML = "";
      const cardData = JSON.parse(event.currentTarget.dataset.search);
      const title = `<h1 class="list-page-links"">Select Another...</h1>`
      modal.insertAdjacentHTML("beforeend", title);
      const movieMainInfo = `<h3>${cardData.title}, <span class="rating-design" style="font-size:16px;">${cardData.rating}</span></h3>`
      modal.insertAdjacentHTML("beforeend", movieMainInfo);
      const overview = `<p>${cardData.overview}</p>`
      modal.insertAdjacentHTML("beforeend", overview);
      const ol = document.createElement("ol")
      console.log(cardData.lists);
      if (cardData.lists.length === 0) {
        modal.insertAdjacentHTML("beforeend", `<h4 class="my-3">${cardData.title} doesn't belong to any lists yet...</h4>`)
      } else {
        modal.insertAdjacentHTML("beforeend", `<h4 class="my-3">${cardData.title} belongs to these lists...</h4>`)
        cardData.lists.map(list => ol.insertAdjacentHTML("beforeend", `<a class="btn-red-opposite" href="/lists/${list.id}">${list.name}</a>`));
        modal.insertAdjacentHTML("beforeend", ol.innerHTML);
      };
      modal.style.color="white";
    });

  });

};

export { movieCardModal };
