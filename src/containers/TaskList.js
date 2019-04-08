import React from 'react';
import { connect } from 'react-redux';
import taskAction from '../redux/task/action';

const { dispatcher } = taskAction;

class TaskList extends React.Component {
    render() {
        const { taskList } = this.props;
        return(
            <ul>
                {taskList.map((task, id) => (
                    <li key={id}>
                        {task.id} : {task.task}
                        <button id={task.id} onClick={this.handleUpdate}>update</button>
                        <button id={task.id} onClick={this.handleDelete}>delete</button>
                    </li>
                ))}
            </ul>
        )
    }

    handleUpdate = e => {
        const { id } = e.target;
        const { task } = this.props;
        this.props.updateTask(id, task)
    }

    handleDelete = e => {
        const { id } = e.target;
        this.props.deleteTask(id);
    }
}

export default connect(state => state.task, dispatcher)(TaskList);