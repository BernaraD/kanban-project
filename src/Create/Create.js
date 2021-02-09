import "./Create.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import React, {useState} from 'react';
import {Form, Input} from "reactstrap";


function Create(props) {

    const {addNewTask, priority} = props;

    const [isActiveCreateTaskForm, setIsActiveCreateTaskForm] = useState(false);
    const [isBtnActiveTskCreate, setIsBtnActiveTskCreate] = useState(false);
    const [taskInput, setTaskInput] = useState('')
    const [taskDescriptionInput, setTaskDescriptionInput] = useState('')

    const openCreateTskForm = () => {
        setIsActiveCreateTaskForm(true)
    };

    const onTaskCreate = (e) => {
        setIsBtnActiveTskCreate(e.target.value.length > 4);
        setTaskInput(e.target.value);
    };

    const onTaskDescriptionCreate = (e) => {
        setIsBtnActiveTskCreate(e.target.value.length > 4);
        setTaskDescriptionInput(e.target.value);
    };

    const taskSubmit = (e) => {
        e.preventDefault();
        addNewTask(taskInput, taskDescriptionInput, priority)
        taskReset();
    };

    const taskReset = () => {
        setTaskInput('');
        setIsActiveCreateTaskForm(false);
        setIsBtnActiveTskCreate(false);
    };


    return (
        <div className="App">

            <Form className="create-inputs">

                {!isActiveCreateTaskForm &&
                <button type="button" className="btn btn-primary btn-create mb-3" onClick={openCreateTskForm}>Create
                    task
                </button>
                }

                {isActiveCreateTaskForm &&
                <form>

                    <div className="input-group mb-3">

                        <input type="text" className="form-control" placeholder="Enter task"
                               onChange={onTaskCreate}
                               value={taskInput}/>
                    </div>

                    <div className="input-group mb-3">

                        <input type="text" className="form-control" placeholder="Enter task description"
                               onChange={onTaskDescriptionCreate}
                               value={taskDescriptionInput}/>
                    </div>

                    <div>

                        <Input placeholder="Hello" type="select" className="mb-4" onChange={priority}>
                            <option value="0">High</option>
                            <option value="1">Medium</option>
                            <option value="2">Low</option>

                        </Input>
                    </div>


                    <div className="create-btn">
                        <button type="submit" className="btn btn-primary btn-submit"
                                disabled={!isBtnActiveTskCreate}
                                onClick={taskSubmit}>Submit
                        </button>

                        <button className="btn btn-primary create-btn"
                                onClick={taskReset}>Cancel
                        </button>
                    </div>
                </form>
                }
            </Form>
        </div>
    );
}

export default Create;

