import './Column.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Task from "../Task/Task";
import {Col} from "reactstrap";

function Columns(props) {

    const {tasks, status, changeTaskStatus, changeTaskPriority, onTaskDelete, editTask} = props;

    return (
        <div>
            <Col className="column">
                <h5>{status}</h5>
                {tasks.filter(el => el.status === status)
                    .sort((a, b) => a.priority - b.priority)
                    .map(el => <Task task={el}
                                     key={el.id}
                                     priority={el.priority}
                                     changeTaskStatus={changeTaskStatus}
                                     changeTaskPriority={changeTaskPriority}
                                     onTaskDelete={onTaskDelete}
                                     editTask={editTask}
                    />)}
            </Col>


        </div>
    );
}

export default Columns;
