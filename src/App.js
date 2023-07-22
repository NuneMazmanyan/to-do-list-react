import React from 'react';
import './App.css';
import {ToDoListComponent} from "./components/toDoListComponent/toDoListComponent";
import {GenerateNewTaskComponent} from "./components/generateNewTaskComponent/generateNewTaskComponent";
import './tailwindcss.css'

function App() {
    const [areDoneTasksHidden, setChecked] = React.useState(false);

    return (
        <div className="m-10 min-w-fit">
            <div>
                <div className="flex flex-row-reverse">
                    <label htmlFor="app-tasks-checkbox"
                           className="text-sm ml-1 font-semibold">{areDoneTasksHidden ? "Done tasks are hidden" : "Hide done tasks"}</label>
                    <input id="app-tasks-checkbox" value={areDoneTasksHidden} type="checkbox" onChange={() => {
                        setChecked((isChecked) => !isChecked);
                    }}/>
                </div>

                <GenerateNewTaskComponent/>

                <ToDoListComponent checkedStatus={areDoneTasksHidden}/>
            </div>
        </div>
    );
}

export default App;