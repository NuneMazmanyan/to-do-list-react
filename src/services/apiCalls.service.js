const APIPath = "https://todo-api-shin.vercel.app/api/todos";

export async function getTasks() {
    let toDos = []
    await fetch(APIPath)
        .then((res) => res.json())
        .then((data) => {
            toDos.push(data)
        })
        .catch((err) => {
            console.log(err.message);
        });

    return toDos;
}

export function addTask(taskName) {
    fetch(APIPath, {
        method: 'Post',
        body: JSON.stringify({
            text: taskName
        })
    })
        .then(() => this.setState({status: 'Added successful'}));
}

//implemented for future
export function updateStatus(task) {
    fetch(`${APIPath}/${task.id}`, {
        method: 'PATCH',
        body: JSON.stringify({
            status: task.status
        })
    })
        .then(() => this.setState({status: 'Delete successful'}));
}