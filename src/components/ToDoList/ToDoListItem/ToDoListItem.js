import React, {useContext, useEffect, useRef, useState} from 'react';
import WarningModal from "../../WarningModal/WarningModal";
import '../../../tailwindcss.css';
import TasksContext from '../../../providers/tasksContext.provider';

export const ToDoListItem = ({task}) => {
    const tasksContext = useContext(TasksContext);
    const {updateStatus, renameTask} = tasksContext;
    const [modalState, setModalState] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);
    const taskNameRef = useRef();

    useEffect(() => {
        if (!isDisabled) {
            taskNameRef.current.focus();
        }
    }, [isDisabled]);

    const changeModalState = () => {
        setModalState(!modalState);
    }

    const editTask = () => {
        setIsDisabled(false);
    }

    const saveChanges = () => {
        renameTask(task.id, taskNameRef.current.value);
        setIsDisabled(true)
    }

    return (
        <li className="gap-x-6 py-5 px-8">
            <div className="flex justify-between">
                <div>
                    <input id={task.id} type="checkbox"
                           defaultChecked={task.status === 'completed' ? true : false}
                           onChange={() => updateStatus(task.id)}
                           className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <input type="text" htmlFor={task.id}
                           ref={taskNameRef}
                           disabled={isDisabled}
                           defaultValue={task.text}
                           className={task.status === 'completed' ? "text-slate-400 font-medium text-sm ml-4 align-top bg-white" : "text-slate-900 font-medium text-sm ml-4 align-top bg-white"}/>
                </div>
                <div>
                    <button onClick={saveChanges}
                            className={isDisabled ? "hidden" : "rounded-full text-white bg-teal-700 px-4 mr-3 hover:bg-teal-600"}>Save
                    </button>
                    <button onClick={editTask}
                            className={isDisabled ? "rounded-full text-white bg-teal-700 px-4 mr-3 hover:bg-teal-600" : "hidden"}>Edit
                    </button>
                    <button onClick={changeModalState}
                            className="rounded-full bg-amber-300 text-white px-2 hover:bg-amber-200">X
                    </button>
                </div>
            </div>
            {modalState ? <WarningModal task={task}/> : null}
        </li>
    )
}
