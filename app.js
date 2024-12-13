const add = document.querySelector("button");
const liste = document.querySelector("ul");

add.addEventListener("click", () => {
    let input = document.querySelector("input").value;
    let task = document.createElement("li");
    task.innerHTML = `
        <p>${input}</p>
        <i class='bx bx-edit-alt'></i>
        <i class='bx bxs-trash'></i>`;
    liste.appendChild(task);
    save();
    addDeleteEvent(task); 
    addParagraphEvent(); 
});

restore(); 

function save() {
    let tasks = [];
    let allTasks = document.querySelectorAll("ul li p");
    allTasks.forEach((task) => {
        tasks.push(task.textContent);
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function restore() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach((taskText) => {
        let task = document.createElement("li");
        task.innerHTML = `
            <p>${taskText}</p>
            <i class='bx bxs-trash'></i>`;
        liste.appendChild(task);
        addDeleteEvent(task); 
    });
    addParagraphEvent(); 
}

function addDeleteEvent(task) {
    let deleteIcon = task.querySelector(".bxs-trash");
    deleteIcon.addEventListener("click", () => {
        task.remove(); 
        save(); 
    });
}

function addParagraphEvent() {
    const allParagraphs = document.querySelectorAll("ul li p");
    allParagraphs.forEach((note) => {
        note.addEventListener("click", () => {
            note.classList.toggle("underline"); 
        });
    });
}