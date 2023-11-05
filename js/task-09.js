function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const box = document.querySelector(".widget");
console.log(box);
const color = document.querySelector(".color");
console.log(color);
const button = document.querySelector(".change-color");
console.log(button);

button.addEventListener("click", onClick);

function onClick(e) {
  const changeColor = getRandomHexColor();
  // const changeColorBody = getRandomHexColor();
  color.textContent = `${changeColor}`;
  box.style.backgroundColor = changeColor;
  // document.body.style.backgroundColor = changeColorBody;
}
