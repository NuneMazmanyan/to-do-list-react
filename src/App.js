import React from 'react';
import './App.css';
import {ToDoList} from "./components/ToDoList/ToDoList";
import {NewTask} from "./components/NewTask/NewTask";
import './tailwindcss.css'
import {TasksContextProvider} from './providers/tasksContext.provider';
import {Route, Routes} from 'react-router-dom';
import TaskDetails from "./components/TaskDetails/TaskDetails";

function App() {
    const [areDoneTasksHidden, setChecked] = React.useState(false);

    return (
        <TasksContextProvider>
            <Routes>
                <Route path="/" element={
                    <div className="m-10 min-w-fit">
                        <div>
                            <div className="flex flex-row-reverse">
                                <label htmlFor="app-tasks-checkbox"
                                       className="text-sm ml-1 font-semibold">Hide done tasks</label>
                                <input id="app-tasks-checkbox" value={areDoneTasksHidden} type="checkbox"
                                       onChange={() => {
                                           setChecked((isChecked) => !isChecked);
                                       }}/>
                            </div>

                            <NewTask/>

                            <ToDoList checkedStatus={areDoneTasksHidden}/>
                        </div>
                    </div>
                }/>
                <Route path="/tasks/:taskId" element={<TaskDetails/>}/>
            </Routes>
        </TasksContextProvider>
    );
}

export default App;
