function addTodo() {
    let input = document.getElementById("todoInput");
    let text = input.value;

    if (text.trim() === "") {
        alert("Please enter a todo item!");
        input.value = "";
        return;
    }

    let li = document.createElement("li");
    li.innerText = text;

    li.onclick = function () {
        this.remove();
    }
    document.getElementById("todoList").appendChild(li);
    input.value = "";
}



document.getElementById("todoInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTodo();
    }
});

