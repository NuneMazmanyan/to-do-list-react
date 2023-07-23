const APIPath = "https://todo-api-for-trainees-git-tmp-tigranmn.vercel.app/api/todos";

export async function getTasks() {
    let toDos = []
    await fetch(APIPath, {mode: 'no-cors'})
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
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
            text: taskName,
            status: 'not completed',
            _id: 'dytxfucigvhjb'
        })
    })
        .then(() => console.log('added'));
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