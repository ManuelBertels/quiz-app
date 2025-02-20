const form = document.querySelector('[data-js="form"]');
const card = document.querySelector("#zuweisung");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElements = event.target.elements;

  const neu = `<div class="card_form">
<div class="frage_form">frage</div>
<button class="button_form">show answer</button>
<svg class="icon_form" xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>
<div class="tag_form"># tag</div>
</div>`;

  card.innerHTML += neu;
});
