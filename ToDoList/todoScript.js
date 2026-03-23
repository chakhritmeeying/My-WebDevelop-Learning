function addList() {
    let input = document.getElementById("todoInput");
    let text = input.value;

    if (text.trim() === "") {
        alert("Please enter a to-do item")
        input.value = "";
        return;
    }
    // Create li
    let li = document.createElement("li");
    // Create span for text
    li.classList.add("todo-item");
    let span = document.createElement("span");
    span.innerText = text;
    // Create button for remove item
    let removeBtn = document.createElement("button");
    removeBtn.innerText = "❌";
    removeBtn.classList.add("button");
    removeBtn.classList.add("remove-btn");
    // Press for remove item
    removeBtn.onclick = function () {
        li.remove();
    }

    // Click item for line-through
    span.onclick = function () {
        if (span.style.textDecoration === "line-through") {
            span.style.textDecoration = "none";
        } else {
            span.style.textDecoration = "line-through";
        }
    }

    // Add span + removeBtn in to li
    li.appendChild(span);

    li.appendChild(removeBtn);
    // Add li in to ul
    document.getElementById("todoList").appendChild(li);
    input.value = "";

}


function clearAll() {

    // document.getElementById("todoList").innerHTML = "";
    let list = document.getElementById("todoList");
    if (list.children.length === 0) {
        alert("ToDo List is empty")
        return
    }
    else {
        list.innerHTML = "";
    }

}





