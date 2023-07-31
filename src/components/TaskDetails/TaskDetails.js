import React, {useContext} from 'react';
import TasksContext from "../../providers/tasksContext.provider";
import {useNavigate, useParams} from "react-router";

const TaskDetails = () => {
    const {taskId} = useParams();
    const tasksContext = useContext(TasksContext);
    const {getTaskById} = tasksContext;
    const navigate = useNavigate();

    const task = getTaskById(taskId);

    return (
        <div className="m-10 min-w-fit">
            <button onClick={() => navigate(-1)}
                    className="rounded-full bg-teal-700 text-white px-5 hover:bg-teal-600">
                &larr; Back
            </button>
            <div>
                <p className="uppercase text-amber-300 text-5xl text-center mt-24">{task.text}</p>
                <p className="text-xl text-center mt-16"><span className="text-amber-300 mr-3">id:</span>{task.id}</p>
                <p className="text-xl text-center mt-5"><span className="text-amber-300 mr-3">status:</span>{task.status}</p>
            </div>
        </div>
    );
};

export default TaskDetails;
