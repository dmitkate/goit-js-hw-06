const numberOfCategories = document.querySelector("#categories");
console.log("Number of categories: ", numberOfCategories.children.length);
const el = document.querySelectorAll('.item');



el.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`)
});