import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Task.css'
import React, {useState} from 'react';
import {Alert, Button, Input, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {BsTrash, MdModeEdit} from "react-icons/all";



function Task(props) {

    const {task, changeTaskStatus, changeTaskPriority, onTaskDelete, editTask} = props;

    const alertColors = ["danger", "warning", "primary"];


    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [newTask, setNewTask] = useState(task.name);
    const [newDescription, setNewDescription] = useState(task.taskDescription);


    const newTaskInputHandler = (e) => {
        setNewTask(e.target.value)
        // taskReset();
    };

    const newDescriptionInputHandler = (e) => {
        setNewDescription(e.target.value)
        // taskReset();
    };

    const saveBtnClick = () => {
        editTask(task.id, newTask, newDescription)
        setIsEditModalOpen(false);
    }


    return (

        <div className="container-fluid">

            {/*Cards*/}
            <div className="card">
                <span className="card-header">
                    <Alert className="alert" color="primary"
                           color={alertColors[task.priority]}>Priority:{task.priority}</Alert>
                </span>

                <div className="card-body">
                    <div>
                        <h5 className="card-title">{task.name}</h5>
                        <p className="card-text">{task.taskDescription}</p>
                    </div>

                    <hr/>


                    <div className="trashIcon" type="button" onClick={() => setIsEditModalOpen(true)}><MdModeEdit/>
                    </div>
                    <Modal isOpen={isEditModalOpen}>
                        <ModalHeader>Edit Task: </ModalHeader>
                        <ModalBody>
                            <Input className="mb-3" type="text" value={newTask} onChange={newTaskInputHandler}/>

                            <Input className="mb-3" type="text" value={newDescription}
                                   onChange={newDescriptionInputHandler}/>

                            <select className="form-select" aria-label="Default select example">
                                <option selected>Priority</option>
                                <option value="0">High</option>
                                <option value="1">Medium</option>
                                <option value="2">Low</option>
                            </select>

                        </ModalBody>
                        <ModalFooter>
                            <Button className="ml-2" color="primary" onClick={saveBtnClick}>Save</Button>{' '}
                            <Button color="secondary" onClick={() => setIsEditModalOpen(false)}>Cancel</Button>
                        </ModalFooter>
                    </Modal>

                    {/*//Modal to Delete*/}
                    <div className="trashIcon ml-2" type="button" onClick={() => setIsModalOpen(true)}><BsTrash/></div>
                    <Modal isOpen={isModalOpen}>
                        <ModalHeader>Are you sure you want to delete?</ModalHeader>
                        <ModalBody>
                            <h5>{task.name}</h5>
                            <p>{task.taskDescription}</p>
                        </ModalBody>
                        <ModalFooter>
                            <Button className="ml-2" color="primary"
                                    onClick={() => onTaskDelete(task.id)}>Delete</Button>{' '}
                            <Button color="secondary" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </div>


                <div className="card-footer">

                    <div className="left-right-Btn">
                        {task.status !== "TO DO" &&
                        <button className="btn btn-outline-dark btn-sm"
                                onClick={() => changeTaskStatus(task.id, "left")}>←
                        </button>
                        }
                        {task.status !== "DONE" &&
                        <button className="btn btn-outline-dark btn-sm"
                                onClick={() => changeTaskStatus(task.id, "right")}>→
                        </button>
                        }
                    </div>


                    <div className="up-down-btn">
                        <button className="btn btn-outline-dark btn-sm "
                                onClick={() => changeTaskPriority(task.id, 'up')}>↑
                        </button>

                        <button className="btn btn-outline-dark btn-sm"
                                onClick={() => changeTaskPriority(task.id, 'down')}>↓
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Task;
