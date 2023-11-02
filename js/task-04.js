const counterConteiner = document.querySelector("#counter");
console.log(counterConteiner);
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const sumValue = document.querySelector("#value");

let counterValue = 0;

btnDecrement.addEventListener("click", decrement);
btnIncrement.addEventListener("click", increment);

function decrement(event) {
  counterValue -= 1;
  sumValue.textContent = counterValue;
  console.log(event);
}
function increment(event) {
  counterValue += 1;
  sumValue.textContent = counterValue;
}
