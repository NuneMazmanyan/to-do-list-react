import React from 'react';
import './App.css';
import {ToDoList} from "./components/ToDoList/ToDoList";
import {NewTask} from "./components/NewTask/NewTask";
import './tailwindcss.css'

function App() {
    const [areDoneTasksHidden, setChecked] = React.useState(false);

    return (
        <div className="m-10 min-w-fit">
            <div>
                <div className="flex flex-row-reverse">
                    <label htmlFor="app-tasks-checkbox"
                           className="text-sm ml-1 font-semibold">Hide done tasks</label>
                    <input id="app-tasks-checkbox" value={areDoneTasksHidden} type="checkbox" onChange={() => {
                        setChecked((isChecked) => !isChecked);
                    }}/>
                </div>

                <NewTask/>

                <ToDoList checkedStatus={areDoneTasksHidden} />
            </div>
        </div>
    );
}

export default App;