const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

document.addEventListener("DOMContentLoaded", getLocalTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("change", filterTodo);


function addTodo(event) {
    event.preventDefault();
    if (todoInput.value.trim() === "") return;

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    saveLocalTodos({ text: todoInput.value, completed: false });

    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check-circle"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);
    todoInput.value = "";
}


function deleteCheck(e) {
    const item = e.target;

    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        todo.classList.add("slide");

        removeLocalTodos(todo);
        todo.addEventListener("transitionend", function () {
            todo.remove();
        });
    }

    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");

        updateLocalTodos(todo);
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function (todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "incomplete":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }
    });
}

function saveLocalTodos(todo) {
    let todos = localStorage.getItem("todos") === null ? [] : JSON.parse(localStorage.getItem("todos"));
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function getLocalTodos() {
    let todos = localStorage.getItem("todos") === null ? [] : JSON.parse(localStorage.getItem("todos"));
    todos.forEach(function (todo) {
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
        if (todo.completed) {
            todoDiv.classList.add("completed");
        }

        const newTodo = document.createElement("li");
        newTodo.innerText = todo.text;
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo);

        const completedButton = document.createElement("button");
        completedButton.innerHTML = '<i class="fas fa-check-circle"></i>';
        completedButton.classList.add("complete-btn");
        todoDiv.appendChild(completedButton);

        const trashButton = document.createElement("button");
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);

        todoList.appendChild(todoDiv);
    });
}


function updateLocalTodos(todo) {
    let todos = localStorage.getItem("todos") === null ? [] : JSON.parse(localStorage.getItem("todos"));
    const todoIndex = todos.findIndex((t) => t.text === todo.children[0].innerText);
    todos[todoIndex].completed = todo.classList.contains("completed");
    localStorage.setItem("todos", JSON.stringify(todos));
}

function removeLocalTodos(todo) {
    let todos = localStorage.getItem("todos") === null ? [] : JSON.parse(localStorage.getItem("todos"));
    const todoIndex = todos.findIndex((t) => t.text === todo.children[0].innerText);
    todos.splice(todoIndex, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}