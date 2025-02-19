// Hier unten wird beim clicken des icons eine neue Classe
// getoogelt die noch eine Background color hinzufügt

let icon = document.querySelector('[data-js="icon"]');

icon.addEventListener("click", () => {
  icon.classList.toggle("fill");
});

// Hier untern wird beim clicken irgendwo auf der Karte der Inhalt
// des Buttons auf "show answer" geändert und der Textinhalt
// bekommt die Antwort

let question1 = document.querySelector('[data-js="question1"]');
let button1 = document.querySelector('[data-js="button1"]');

button1.addEventListener("click", () => {
  if (button1.textContent === "show answer") {
    question1.textContent = "Es dient der Grundstucktur der Seite";
    button1.textContent = "hide answer";
  } else {
    question1.textContent = "Wozu dient das HTML-Element?";
    button1.textContent = "show answer";
  }
});
