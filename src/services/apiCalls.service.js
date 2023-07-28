let tasks = getTasks();

function generateId() {
    let id = Math.floor(Math.random()*100000000)
    if(tasks.find(task => task.id === id)){
        id = generateId()
    }
    return id;
}

export function getTasks() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
}

export function addTask(taskName) {
    tasks.push({
        text: taskName,
        status: 'not completed',
        id: generateId()
    })
    updateLocalStorage();
}

export function deleteTaskById(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    updateLocalStorage();
}

function updateLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

export function updateStatus(taskId) {
    const index = tasks.findIndex(task => task.id === taskId)
    tasks[index].status = tasks[index].status === "completed" ? "not completed" : "completed";
    updateLocalStorage();
}

export default tasks;