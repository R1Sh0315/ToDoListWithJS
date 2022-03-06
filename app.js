// selectors
const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");

// event listeners
todoBtn.addEventListener("click", addToDo);
todoList.addEventListener("click", delItem);

//functions
function addToDo(event) {
  //prevent form from submitting
  event.preventDefault();
  console.log(todoInput.value);
  //todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo-items");

  //create Li
  const todoLi = document.createElement("li");
  todoLi.innerText = todoInput.value;
  todoLi.classList.add("todo-item");

  //todo del button
  const todoDel = document.createElement("button");
  todoDel.innerHTML = "Del";
  todoDel.classList.add("todo-del");

  //todo screatch button
  const todoScretch = document.createElement("button");
  todoScretch.innerText = "Done";
  todoScretch.classList.add("todo-complete");

  //append li, complet and del to div
  todoDiv.appendChild(todoLi);
  todoDiv.appendChild(todoScretch);
  todoDiv.appendChild(todoDel);

  todoList.appendChild(todoDiv);

  //Del btn
  todoInput.value = "";
}

function delItem(e) {
  const item = e.target;

  //to del
  item.classList[0] === "todo-del" ? item.parentElement.remove() : null;

  //to complete
  item.classList[0] === "todo-complete" ? item.parentElement.classList.toggle('complete'): null;

}
