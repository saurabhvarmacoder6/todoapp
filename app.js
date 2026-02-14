let input = document.querySelector(".input");
let addBtn = document.querySelector(".btn");
let listBox = document.querySelector(".todoEle");

let localTodoList = [];

//  function of get localStorage value

const getTodoListData = () => {
    return JSON.parse(localStorage.getItem("todoData"));
}

//  function of add todo list 

const todoItems = (val) => {
    let div = document.createElement("div");
    div.innerHTML = `<li>${val}</li> <button class="deleteBtn" >×</button>`;
    div.classList.add("todoList")
    listBox.append(div);
}

localTodoList = getTodoListData() || [];

//  function set item in localstorage

function todoData() {
    const todoListValue = input.value.trim();
    if (!localTodoList.includes(input.value) && input.value !== "") {
        localTodoList.push(todoListValue);
        todoItems(input.value)
    }
    console.log(localTodoList);


    localStorage.setItem("todoData", JSON.stringify(localTodoList));
    input.value = ""
}

// function of Display todolist item

const showTodo = () => {
    localTodoList.map((val) => {
        todoItems(val)
    })
}

showTodo()

// function of remove todolist item

const removeTodoItem = (e) => {
    if (e.target.innerText == "×") {
        const todoToRemove = e.target;
        let todoListContent = todoToRemove.previousElementSibling.innerText;
        let parentElem = todoToRemove.parentElement;
        localTodoList = localTodoList.filter((val) => {
            return val !== todoListContent.toLowerCase()

        })
        localStorage.setItem("todoData", JSON.stringify(localTodoList))
        parentElem.remove()
    }
}

addBtn.addEventListener("click", (e) => {
    e.preventDefault()
    todoData();
})

listBox.addEventListener("click", (e) => {
    removeTodoItem(e);
})





