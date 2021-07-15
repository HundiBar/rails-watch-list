
const cardModal = () => {
  const card = document.getElementById("onClick")
  card.addEventListener("click", (event) => {
    const content = event.currentTarget.innerHTML;
    console.log(content);
  });

};

export { cardModal };
