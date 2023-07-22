import React, {useState} from 'react';
import WarningModalComponent from "../../warningModalComponent/warningModalComponent";
import '../../../tailwindcss.css'

export const ToDoListItemComponent = (props) => {
    const [isModalOpened, setModalStatus] = useState(false)

    const changeModalState = () => {
        setModalStatus(!isModalOpened)
    }

    return (
        <li className="gap-x-6 py-5 px-8">
            <div className="flex justify-between">
                <div>
                    <input id={props.task._id} type="checkbox"
                           defaultChecked={props.task.status === 'completed' ? true : false}
                           onChange={() => props.changeStatus(props.task)}
                           className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label htmlFor={props.task._id}
                           className={props.task.status === 'completed' ? "text-slate-400 font-medium text-sm ml-4 align-top" : "text-slate-900 font-medium text-sm ml-4 align-top"}>{props.task.text}</label>
                </div>
                <div className="">
                    <button onClick={changeModalState}>X</button>
                </div>
            </div>
            {!isModalOpened ? undefined : <WarningModalComponent/>}
        </li>
    )
}
