const textareaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-count");
const remainingCounterEl = document.getElementById("remaining-count");

textareaEl.addEventListener("keyup", () => {
  updateCounter();
});

updateCounter()

function updateCounter() {
  totalCounterEl.innerText = textareaEl.value.length;
  remainingCounterEl.innerText =
    textareaEl.getAttribute("maxLength") - textareaEl.value.length;
}