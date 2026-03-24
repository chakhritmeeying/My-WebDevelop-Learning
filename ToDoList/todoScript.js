function loadTasks() {
    let saveData = localStorage.getItem("myTodoList");
    return saveData ? JSON.parse(saveData) : [];
}

function saveData(dataToSave) {
    localStorage.setItem("myTodoList", JSON.stringify(dataToSave))
}


function renderTodoList() {
    let lsit = document.getElementById("todoList");
    lsit.innerHTML = "";//refresh ul
    let tasks = loadTasks();

    tasks.forEach((item, index) => {
        let li = document.createElement("li");
        li.classList.add("todo-item");

        let span = document.createElement("span");
        span.innerText = item.text;
        span.style.textDecoration = item.completed ? "line-through" : "none";

        span.onclick = function () {
            let tasks = loadTasks();
            tasks[index].completed = !tasks[index].completed;
            saveData(tasks);
            renderTodoList();
        }

        let removeBtn = document.createElement("button");
        removeBtn.innerText = "X";
        removeBtn.classList.add("button");
        removeBtn.classList.add("remove-btn");
        removeBtn.onclick = function () {
            if (confirm("Are you sure you want to remove this task ?")) {
                tasks.splice(index, 1);
                saveData(tasks);
                renderTodoList();
            }
        }
        li.appendChild(span);
        li.appendChild(removeBtn);
        lsit.appendChild(li);
    });
}

function addList() {
    let currentTasks = loadTasks();//Load array. 
    const input = document.getElementById("todoInput");

    if (input.value.trim() === "") {
        alert("Please enter a To-Do List");
        return;
    }

    currentTasks.push({
        text: input.value,
        completed: false
    });//add new task from input into array.
    saveData(currentTasks);//save new tasks.
    renderTodoList(); // render li into ul.
    input.value = "";

}

function clearAll() {

    if (confirm("Are you sure you want to clearAll ?")) {
        saveData([]); //Sent [] to clear array.
        renderTodoList();// 
    }
}

// Load this function when page is loaded.
renderTodoList();