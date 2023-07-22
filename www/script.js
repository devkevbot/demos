import manifest from "./manifest.js";

const cardContainer = document.getElementById("card-container");

manifest.forEach((demo) => {
  const card = document.createElement("a");
  card.className = "card__item";
  card.innerText = demo.title;
  card.setAttribute("href", `./projects/${demo.folderName}/index.html`);
  card.setAttribute("target", "_blank");
  cardContainer.appendChild(card);
});
