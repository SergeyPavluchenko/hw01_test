const inputTxt = document.querySelector("#name-input");
console.dir(inputTxt);
const i = document.querySelector("#name-output");
console.dir(i.textContent);
console.dir(i);

inputTxt.addEventListener("input", onInput);

function onInput(eve) {
  const { value } = eve.currentTarget;
  //   console.log(value);
  //   if (value.length > 0) {
  //     i.textContent = value;
  //   }
  //   if (value.length === 0 || value.length === "") {
  //     i.textContent = "Anonymous";
  //   }

  i.textContent = value || "Anonimus";
}
