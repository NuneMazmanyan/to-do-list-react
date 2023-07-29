import React, {useContext, useRef} from "react";
import '../../tailwindcss.css'
import TasksContext from "../../providers/tasksContext.provider";

export const NewTask = () => {
    const tasksContext = useContext(TasksContext);
    const { addTask } = tasksContext;
    const taskName = useRef()
    const submit = (e) => {
        e.preventDefault()
        addTask(taskName.current.value)
    }
    return (
        <form className="App-new-task-creation_block" onSubmit={submit}>
            <div className="flex flex-col">
                <label htmlFor="app-new-task-name-input" className="text-xs font-medium">Task name</label>
                <input type='text' placeholder="Write task name" id="app-new-task-name-input" ref={taskName}
                       className="border-amber-300 border rounded text-sm p-1"/>
            </div>
            <div className=" flex flex-row-reverse">
                <button type="submit" className="rounded bg-teal-700 text-white py-1 px-5 mt-2 text-sm">Add Task
                </button>
            </div>
        </form>
    )
}

