const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredient = document.querySelector("#ingredients");
console.log(ingredient);

const arrIngredients = ingredients.map((ing) => {
  const li = document.createElement("li");
  li.classList.add("item");
  li.textContent = ing;
  return li;
});

ingredient.append(...arrIngredients);
