const form = document.querySelector('[data-js="form"]');
const card = document.querySelector('[data-js="section"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElements = event.target.elements;

  const div = document.createElement("div");
  div.classList.add("card");
  div.textContent = `Frage:${formElements.frage.value}, Antwort:${formElements.antwort.value},  Tag:${formElements.text.value}`;

  card.append(div);
});
