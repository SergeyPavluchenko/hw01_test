const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryUl = document.querySelector(".gallery");
// console.dir(galleryUl);
console.log(galleryUl);

// const arr = [...images];
// console.log(arr);

const imgLi = images
  .map(
    (image) =>
      `<li><img src="${image.url}" alt="${image.alt}" width='320'></li>`
  )
  .join("");
// console.log(imgLi);

galleryUl.insertAdjacentHTML("beforeend", imgLi);
