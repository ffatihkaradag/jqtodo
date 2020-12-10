checkTodos();
// check for data in localStorage

function checkTodos() {
  // todos in the key of my localStorage
  let dataInLocalStorage = localStorage.getItem("todos");
  // check if it is null or not
  if (dataInLocalStorage == null) {
    todos = [];
  } else {
    todos = JSON.parse(dataInLocalStorage);
  }
  let html = "";
  todos.forEach((todo, index) => {
    html += `<div class='card' onclick='removeTodo(${index});'>${todo}</div>`;
  });
  $(".incomplete").empty().append(html);
}


// adding items in todos
$("input").on("keypress", (e) => {
  if (e.which === 13 && $("input").val() !== "") {
    todo = $("input").val();
    let todosData = localStorage.getItem("todos");
    if (todosData == null) {
      todos = [];
    } else {
      todos = JSON.parse(todosData);
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
    $("input").val("");
    checkTodos();
  }
});

// logic for removing from the todos list
let removeTodo = (index) => {
  let todosData = localStorage.getItem("todos");
  todos = JSON.parse(todosData);
  todos.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todos));
  checkTodos();
};