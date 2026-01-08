document.addEventListener('DOMContentLoaded', () => {
    const inputitem = document.getElementById("todo-input");
    const addbtn = document.getElementById("add-task-btn");
    const additem = document.getElementById("todo-list");

    let tasks = JSON.parse(localStorage.getItem("tasks")) || []
    tasks.forEach(element => {
        renderTasks(element)
    });
    addbtn.addEventListener('click', () => {
        const tasktext = inputitem.value.trim()
        if (tasktext === "") return
        const task = {
            id: Date.now(),
            text: tasktext,
            completed: false
        }
        tasks.push(task)
        saveTasks()
        inputitem.value = ""
        renderTasks(task)
    })
    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }
    function renderTasks(task) {
        const li = document.createElement("li")
        const delbtn = document.createElement("button")
        li.textContent = task.text
        delbtn.textContent = "delete"
        li.appendChild(delbtn)
        li.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') return;
            task.completed = !task.completed
            li.classList.toggle("completed")
            saveTasks()
        })
        li.querySelector("button").addEventListener('click', (e) => {
            e.stopPropagation()
            tasks = tasks.filter((t) => t.id !== task.id)
            li.remove()
            saveTasks()
        })
        additem.appendChild(li)
    }
});


