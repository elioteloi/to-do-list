const array = JSON.parse(localStorage.getItem("array")) || [];

const input = document.getElementById("input");
const div = document.getElementById("div");
const h1 = document.getElementById("h1");
const buttonAddLocalStorage = document.getElementById("button");

buttonAddLocalStorage.addEventListener("click", () => {
  // create a new js obj
  let todo = {
    todo: input.value,
  };

  console.log("clicked");
  // push the new obj to the array
  array.push(todo);
  console.log(array);

  // change the obj to be a json
  const arrayStringify = JSON.stringify(array);

  // push the array to the localstorage
  localStorage.setItem("array", arrayStringify);
  console.log(localStorage);

  // show the array inside the localstorage
  div.innerHTML = "";

  // create and update the new data
  array.forEach((element, index) => {
    const item = document.createElement("div");
    const btnDone = document.createElement("button");
    const btnDelete = document.createElement("button");

    // append the item to the div
    div.appendChild(item);

    item.textContent = element.todo;
    item.classList.add("todo-item");

    btnDone.textContent = "Done";
    btnDone.classList.add("doneButton");
    item.appendChild(btnDone);

    btnDelete.textContent = "delete";
    btnDelete.classList.add("deleteButton");
    item.appendChild(btnDelete);

    btnDone.addEventListener("click", () => {
      item.style.textDecoration = "line-through"; // Add strikethrough style;

      btnDone.remove();
    });

    // button delete
    btnDelete.addEventListener("click", (index) => {
      array.splice(index, 1);

      item.remove();
      console.log(array);
    });
  });
});
