const form = document.querySelector(".login-form");
console.log(form);

form.addEventListener("submit", onSubmit);

function onSubmit(e) {
  const { email } = e.currentTarget.elements;
  const { password } = e.currentTarget.elements;
  // const { length } = e.currentTarget.elements.email.value;
  e.preventDefault();
  console.log("Email:", email.value);
  console.log("Password:", password.value);
  console.log("Email length:", email.value.length);
  console.log("Password length:", password.value.length);
  if (email.value === "" || password.value === "") {
    alert("Заповніть всі поля");
  } else if (email.value.length < 10 || password.value.length < 10) {
    alert("Перевірьте правельність вводу");
  }
}
