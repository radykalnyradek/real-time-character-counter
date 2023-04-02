const textarea = document.getElementById("textarea");
const totalCounter = document.getElementById("total-counter");
const remainingCounter = document.getElementById("remaining-counter");

textarea.addEventListener("keypress", () => {
  updateCounter();
});

function updateCounter() {
  if (textarea.value.length <= textarea.getAttribute("maxlength")) {
    characterCount = textarea.value.length;
    remainingCharacters =
      textarea.getAttribute("maxlength") - textarea.value.length;
  }
  totalCounter.innerText = characterCount;
  remainingCounter.innerText = remainingCharacters;
}

updateCounter();
window.setInterval(updateCounter, 1000);
