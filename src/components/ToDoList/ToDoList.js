import React, {useEffect, useState} from 'react';
import {ToDoListItem} from './ToDoListItem/ToDoListItem';
import {getTasks} from "../../services/apiCalls.service";

export const ToDoList = (checkedStatus) => {
    const [tasks, setTasks] = useState([])

    let filteredTasks = checkedStatus
        ? tasks.filter(task => task.status !== "completed")
        : tasks;

    const getToDos = async () => {
        setTasks(await getTasks())
        console.log(await getTasks())
    }

    useEffect(() => {
        getToDos()
    }, []);

    function changeStatus(task) {
        tasks[tasks.findIndex((task) => task._id === task._id)].status = (task.status === 'completed' ? 'not completed' : 'completed')
        setTasks(tasks);
    }

    if (tasks.length) {
        return (
            <ul role="list" className="divide-y divide-gray-100">
                {filteredTasks.map((task) => (
                    <ToDoListItem key={task.text} task={task} changeStatus={changeStatus}/>
                ))}
            </ul>
        );
    } else {
        return (
            <div>
                <h2 className="text-slate-300 font-semibold text-2xl text-center">Your life is a blank page. You write
                    on it.</h2>
                <h1 className="text-slate-500 font-semibold text-4xl text-center">So start by adding your tasks
                    here.</h1>
            </div>
        );
    }
}
