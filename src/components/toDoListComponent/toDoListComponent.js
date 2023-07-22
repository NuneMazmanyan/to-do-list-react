import React, {useEffect} from 'react';
import {ToDoListItemComponent} from './toDoListItemComponent/toDoListItemComponent';
import {getTasks} from "../../services/apiCalls.service";

export const ToDoListComponent = (props) => {
    let MockData = [
        {
            _id: "64ba92d578d8asdf2e64087",
            text: "test",
            status: "not completed"
        },
        {
            _id: '234568789uhkbvmse57rd8t',
            text: "test",
            status: "completed"
        },
        {
            _id: '64ba92d578d8d995e2esdf7',
            text: "test",
            status: "not completed"
        },
        {
            _id: '123c12d578d8d995e2e64087',
            text: "test",
            status: "not completed"
        }
    ];
    let toDos = [];

    useEffect(() => {
        toDos = getTasks().then()
        console.log(toDos)
    }, []);

    if (MockData.length) {
        let filteredToDos = props.checkedStatus
            ? MockData.filter(toDo => toDo.status !== "completed")
            : MockData;

        return (
            <ul role="list" className="divide-y divide-gray-100">
                {filteredToDos.map((MockData) => (
                    <ToDoListItemComponent key={MockData._id} task={MockData} />
                ))}
            </ul>
        );
    } else {
        return (
            <div className="no-to-dos">
                <h2 className="text-slate-300 font-semibold text-2xl text-center">Your life is a blank page. You write on it.</h2>
                <h1 className="text-slate-500 font-semibold text-4xl text-center">So start by adding your tasks here.</h1>
            </div>
        );
    }
}

