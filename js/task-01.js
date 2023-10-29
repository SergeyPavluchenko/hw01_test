const categories = document.getElementById("categories");
console.log(`Number of categories: ${categories.children.length}`);

// const arrayItem = [...categories.children];
// arrayItem.forEach(function (element) {
//   console.log(element);
// });
// console.log(arrayItem);

const items = document.querySelectorAll(".item");
items.forEach((item) => {
  console.log(`Category: ${item.querySelector("h2").textContent}`);
  console.log(`Elements: ${item.querySelectorAll("li").length}`);
  //   console.log(`Elements: ${item.lastElementChild.children.length}`);
});
