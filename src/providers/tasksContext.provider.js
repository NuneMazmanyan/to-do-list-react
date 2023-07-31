import React, { createContext, useEffect, useState } from 'react';

const TasksContext = createContext();

export function generateId() {
    let id = Math.floor(Math.random() * 100000000);
    return id;
}

function updateLocalStorage(tasksArr) {
    localStorage.setItem("tasks", JSON.stringify(tasksArr));
}

export function TasksContextProvider({ children }) {
    const [tasksArr, setTasksArr] = useState([]);

    useEffect(() => {
        const tasksFromLocalStorage = JSON.parse(localStorage.getItem('tasks')) || [];
        setTasksArr(tasksFromLocalStorage);
    }, []);

    const addTask = (taskName) => {
        setTasksArr(prevTasksArr => [
            ...prevTasksArr,
            {
                text: taskName,
                status: 'not completed',
                id: generateId()
            }
        ]);
    };

    const deleteTaskById = (taskId) => {
        setTasksArr(prevTasksArr =>
            prevTasksArr.filter(task => task.id !== taskId)
        );
    };

    const updateStatus = (taskId) => {
        setTasksArr(prevTasksArr =>
            prevTasksArr.map(task =>
                task.id === taskId
                    ? {...task, status: task.status === "completed" ? "not completed" : "completed"}
                    : task
            )
        );
    };

    const renameTask = (taskId, newName) => {
        setTasksArr(prevTasksArr =>
            prevTasksArr.map(task =>
                task.id === taskId
                    ? {...task, text: newName}
                    : task
            )
        )
    }


    useEffect(() => {
        updateLocalStorage(tasksArr);
    }, [tasksArr]);

    return (
        <TasksContext.Provider value={{ tasksArr, addTask, deleteTaskById, updateStatus, renameTask }}>
            {children}
        </TasksContext.Provider>
    );
}

export default TasksContext;