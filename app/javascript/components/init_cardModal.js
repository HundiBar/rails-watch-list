
const cardModal = () => {
  const cards = document.querySelectorAll(".movie-card");
  cards.forEach(card => {
    card.addEventListener("click", (event) => {
      const modal = document.querySelector(".modal-card");
      modal.innerHTML = "";
      const cardData = JSON.parse(event.currentTarget.dataset.movieCard);
      console.log(cardData);
      const title = `<h1 class="list-page-links"">Select Another...</h1>`
      modal.insertAdjacentHTML("beforeend", title);
      const movieMainInfo = `<h3>${cardData.movie.title}, <span class="rating-design" style="font-size:16px;">${cardData.movie.rating}</span></h3>`
      modal.insertAdjacentHTML("beforeend", movieMainInfo);
      const overview = `<p>${cardData.movie.overview}</p>`
      modal.insertAdjacentHTML("beforeend", overview);
      const ol = document.createElement("ol")
      modal.insertAdjacentHTML("beforeend", `<h4 class="my-3">${cardData.movie.title} is also part of...</h4>`)
      cardData.movie.lists.map(list => ol.insertAdjacentHTML("beforeend", `<a class="btn-red-opposite" href="/lists/${list.id}">${list.name}</a>`));
      modal.insertAdjacentHTML("beforeend", ol.innerHTML);
      modal.style.color="white";
    });

  });

};

export { cardModal };
