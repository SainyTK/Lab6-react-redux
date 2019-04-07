import React from 'react';
import { connect } from 'react-redux';
import taskAction from '../redux/task/action';

const { dispatcher } = taskAction;

class InputTask extends React.Component {

    render() {
        return (
            <div>
                <input type='text' placeholder='task' onChange={this.handleChange} />{' '}
                <button onClick={this.addTask}>Add</button>
            </div>
        )
    }

    handleChange = (e) => {
        const { value } = e.target;
        this.props.inputTask({ task: value })
    }

    addTask = () => {
        const { task } = this.props;
        this.props.addTask(task);
    }
}

export default connect(state => state.task, dispatcher)(InputTask);