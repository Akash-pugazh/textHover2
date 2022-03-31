let letters = document.querySelector("p");
let iterables = letters.innerText;
let index = 0;
function timingFunc() {
  if (index < iterables.length) {
    letters.innerHTML =
      iterables.substring(0, index) +
      `<span>${iterables[index]}</span>` +
      iterables.substring(index + 1);
    console.log(letters);
    index++;
  } else {
    index = 0;
  }
  let moveElement = document.querySelector("span");
  moveElement.classList.add("moveElement");
}

letters.addEventListener("mouseover", () => {
  setInterval(() => {
    timingFunc();
  }, 100);
});
