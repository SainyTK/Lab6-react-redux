const types = {
    INPUT_TASK: 'INPUT_TASK',
    UPDATE_TASKLIST: 'UPDATE_TASKLIST'
};

const dispatcher = {
    inputTask: (task) => ({type: types.INPUT_TASK, payload: task}),
    addTask: (task) => (dispatch, getState) => {
        const taskList = [...getState().task.taskList];
        taskList.push({id: taskList.length, task});
        dispatch({type: types.UPDATE_TASKLIST, payload: taskList});
        return taskList;
    },
    deleteTask: (taskId) => (dispatch, getState) => {
        const taskList = [...getState().task.taskList].filter(task => task.id !== +taskId);
        dispatch({type: types.UPDATE_TASKLIST, payload: taskList});
        return taskList;
    },
    updateTask: (taskId, task) => (dispatch, getState) => {
        const taskList = [...getState().task.taskList];
        const selectedTask = taskList.find((task => task.id === +taskId));
        selectedTask.task = task;
        dispatch({type: types.UPDATE_TASKLIST, payload: taskList});
        return taskList;
    }
};

export default {
    types,
    dispatcher
}