const form = document.querySelector('[data-js="form"]');
const card = document.querySelector('[data-js="zuweisung"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElements = event.target.elements;

  const container = document.createElement("div");
  container.classList.add("card_form");

  const icon_form = document.createElement("img");
  icon_form.classList.add("icon_form");
  icon_form.src = "bookmark.svg";
  container.appendChild(icon_form);

  const frage_form = document.createElement("div");
  frage_form.textContent = `${formElements.frage.value}`;
  frage_form.classList.add("frage_form");
  container.appendChild(frage_form);

  const button_form = document.createElement("button");
  button_form.textContent = "show answer";
  button_form.classList.add("button_form");
  button_form.id = "button_form";
  container.appendChild(button_form);

  const antwort_form = document.createElement("div");

  antwort_form.classList.add("antwort_form");
  container.appendChild(antwort_form);

  const tag_form = document.createElement("div");
  tag_form.textContent = `${formElements.text.value}`;
  tag_form.classList.add("tag_form");
  container.appendChild(tag_form);

  card.appendChild(container);

  let button = document.querySelector("#button_form");
  button.addEventListener("click", () => {
    antwort_form.textContent = `${formElements.antwort.value}`;
    button_form.textContent = "hide answer";
  });
});
