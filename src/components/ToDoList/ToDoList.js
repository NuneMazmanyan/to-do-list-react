import React, {useContext} from 'react';
import {ToDoListItem} from './ToDoListItem/ToDoListItem';
import TasksContext from '../../providers/tasksContext.provider';

export const ToDoList = ({checkedStatus}) => {
    const tasksContext = useContext(TasksContext);

    const { tasksArr } = tasksContext;

    let filteredTasks = checkedStatus
        ? tasksArr.filter(task => task.status !== "completed")
        : tasksArr;

    if (tasksArr.length) {
        return (
            <ul role="list" className="divide-y divide-gray-100">
                {filteredTasks.map((task) => (
                    <ToDoListItem key={task.id} task={task}/>
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

