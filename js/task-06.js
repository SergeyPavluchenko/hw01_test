const input = document.querySelector("#validation-input");
const inputData = input.getAttribute("data-length");
console.dir(input);
console.log(inputData);

input.addEventListener("blur", onBlur);

function onBlur(eve) {
  console.dir(eve);
  const { length } = eve.target.value;
  if (length >= inputData) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else if (length < inputData) {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}
