// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// const input = document.querySelector("input");
// const buttonCreate = document.querySelector("[data-create]");
// const buttonDestroy = document.querySelector("[data-destroy]");
// const boxesEL = document.querySelector("#boxes");

// let acc = [];
// let num = 0;

// buttonCreate.addEventListener("click", onClick);
// buttonDestroy.addEventListener("click", destroyBoxes);

// function onClick() {
//   const numberValue = Number(input.value);
//   const color = getRandomHexColor();
//   for (let i = 1; i <= numberValue; i += 1) {
//     const divEl = document.createElement("div");
//     divEl.id = "item";
//     divEl.textContent = num += 1;
//     divEl.style.width = `${i * 10 + 20}px`;
//     divEl.style.height = `${i * 10 + 20}px`;
//     divEl.style.background = color;
//     acc.push(divEl);
//   }
//   boxesEL.append(...acc);
//   console.log(boxesEL);
// }

// function destroyBoxes() {
//   input.value = "";
//   boxesEL.innerHTML = "";
// }

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const buttonCreate = document.querySelector("[data-create]");
const buttonDestroy = document.querySelector("[data-create]");
const boxesEL = document.querySelector("#boxes");

let acc = [];
let num = 0;

buttonCreate.addEventListener("click", onClick);

function onClick() {
  const numberValue = Number(input.value);
  const box = created(numberValue);
  console.log(box);
  return box;
}

function created(amount) {
  const color = getRandomHexColor();

  for (let i = 1; i <= amount; i += 1) {
    const el = `<div class='item-div'>${(num += 1)}</div>`;
    acc.push(el);
  }
  boxesEL.insertAdjacentHTML("beforeend", acc);
  console.log(boxesEL);
  return boxesEL;
}
