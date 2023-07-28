import React, {useEffect, useState} from 'react';
import {ToDoListItem} from './ToDoListItem/ToDoListItem';
import tasks from "../../services/apiCalls.service";

export const ToDoList = ({checkedStatus}) => {
    const [tasksArr, setTasksArr] = useState([...tasks])

    let filteredTasks = checkedStatus
        ? tasksArr.filter(task => task.status !== "completed")
        : tasksArr;

    useEffect(() => {
        setTasksArr([...tasks])
        console.log('here', tasks)
    }, [`${tasks}`]);

    function changeStatus(task) {
        tasksArr[tasksArr.findIndex((task) => task.id === task.id)].status = (task.status === 'completed' ? 'not completed' : 'completed')
        setTasksArr(tasksArr);
    }

    if (tasksArr.length) {
        return (
            <ul role="list" className="divide-y divide-gray-100">
                {filteredTasks.map((task) => (
                    <ToDoListItem key={task.id} task={task} changeStatus={changeStatus}/>
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

