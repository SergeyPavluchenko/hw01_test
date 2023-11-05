const input = document.querySelector("#font-size-control");
console.log(input);

const spanTxt = document.querySelector("#text");
console.log(spanTxt.style);
console.dir(spanTxt);

input.addEventListener("input", onInput);

function onInput(e) {
  //   console.log(e.target.value);
  const { value } = e.target;
  spanTxt.style.fontSize = `${value}px`;
  //   spanTxt.style.fontSize = `${value}px`;
  //   spanTxt.classList.add("span");
}
