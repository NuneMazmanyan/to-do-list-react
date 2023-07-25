import React, {useState} from 'react';
import WarningModal from "../../WarningModal/WarningModal";
import '../../../tailwindcss.css'
import {updateStatus} from "../../../services/apiCalls.service";

export const ToDoListItem = (props) => {
    const [isModalOpened, setModalStatus] = useState(false)

    const changeModalState = () => {
        setModalStatus(!isModalOpened)
    }

    let task = props.task;

    return (
        <li className="gap-x-6 py-5 px-8">
            <div className="flex justify-between">
                <div>
                    <input id={task.id} type="checkbox"
                           defaultChecked={task.status === 'completed' ? true : false}
                           onChange={() => updateStatus(task.id)}
                           className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label htmlFor={task.id}
                           className={task.status === 'completed' ? "text-slate-400 font-medium text-sm ml-4 align-top" : "text-slate-900 font-medium text-sm ml-4 align-top"}>{task.text}</label>
                </div>
                <div className="">
                    <button onClick={changeModalState}>X</button>
                </div>
            </div>
            {isModalOpened ? <WarningModal task={task}/> : null}
        </li>
    )
}
