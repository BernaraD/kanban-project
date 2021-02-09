import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Columns from "./Column/Column";
import React, {useState} from 'react';
import {Row} from "reactstrap";
import Create from "./Create/Create";

function App() {

    const taskList = [
        {
            id: Math.random(),
            name: "First todo",
            priority: 0,
            status: "TO DO",
            taskDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        },
        {
            id: Math.random(),
            name: "Third todo",
            priority: 2,
            status: "IN PROGRESS",
            taskDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        },
        {
            id: Math.random(),
            name: "Second todo",
            priority: 1,
            status: "REVIEW",
            taskDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        },
        {
            id: Math.random(),
            name: "Fourth todo",
            priority: 0,
            status: "DONE",
            taskDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        },
        {
            id: Math.random(),
            name: "Fifth todo",
            priority: 1,
            status: "TO DO",
            taskDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        },
        {
            id: Math.random(),
            name: "Sixth todo",
            priority: 1,
            status: "IN PROGRESS",
            taskDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        }
    ];

    const [tasks, setTasks] = useState(taskList);

    const statuses = ["TO DO", "IN PROGRESS", "REVIEW", "DONE"];

    const columnList = [
        {id: Math.random(), title: "TO DO", status: 'TO DO'},
        {id: Math.random(), title: "IN PROGRESS", status: "IN PROGRESS"},
        {id: Math.random(), title: "REVIEW", status: 'REVIEW'},
        {id: Math.random(), title: "DONE", status: 'DONE'}
    ]

    const priorities = [0, 1, 2]

    const changeTaskStatus = (taskId, direction) => {
        const updatedTask = tasks.map(el => {
            if (el.id === taskId) {
                if (direction === 'right')
                    el.status = statuses[statuses.indexOf(el.status) + 1];

                if (direction === 'left')
                    el.status = statuses[statuses.indexOf(el.status) - 1]
            }
            return el
        });
        setTasks(updatedTask);
    };

    const changeTaskPriority = (taskId, priority) => {
        const updatedTasks = taskList.map(el => {
            if (el.id === taskId) {
                if (priority === "up")
                    el.priority = priorities[priorities.indexOf(el.priority) - 1];

                if (priority === "down")
                    el.priority = priorities[priorities.indexOf(el.priority) + 1];

            }

            return el;
        });
        setTasks(updatedTasks)
    }


    const addNewTask = (newTask, taskDescriptionInput, priority) => {
        const updatedTasks = {
            id: Math.random(),
            name: newTask,
            priority: priority,
            status: "TO DO",
            taskDescription: taskDescriptionInput
        }
        const newTasks = [...tasks, updatedTasks];
        setTasks(newTasks)
    }

    const onTaskDelete = (taskId) => {
        console.log(taskId)
        const updatedTasks = tasks.filter(el => el.id !== taskId)
        setTasks(updatedTasks)
    };

    const editTask = (taskId, newTask, newDescription) => {
        console.log(taskId, newTask)
        const updatedTasks = tasks.map(el => {
            if (el.id === taskId)
                return {...el, name: newTask, taskDescription: newDescription}
            return el
        });
        setTasks(updatedTasks)
    };

    return (
        <div>
            <h1 className="title">Kanban</h1>


            <div class="container-lg">
                <Create addNewTask={addNewTask}/>


                <hr/>

                <Row>
                    {columnList.map(el => <Columns key={el.id}
                                                   tasks={tasks}
                                                   status={el.status}
                                                   changeTaskStatus={changeTaskStatus}
                                                   changeTaskPriority={changeTaskPriority}
                                                   onTaskDelete={onTaskDelete}
                                                   editTask={editTask}

                    />)}


                </Row>

            </div>

        </div>
    );
}

export default App;

