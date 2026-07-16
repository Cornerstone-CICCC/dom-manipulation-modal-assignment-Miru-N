const openModalButton = document.querySelector("#openModal");
const modal = document.querySelector("#modal");

openModalButton.addEventListener("click", () => {
  modal.classList.remove("invisible");
});

document.addEventListener("keyup", (event) => {
  if (event.key === "Escape") {
    modal.classList.add("invisible");
  }
});