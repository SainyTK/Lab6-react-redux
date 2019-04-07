const types = {
    INPUT_TASK: 'INPUT_TASK',
    ADD_TASK: 'ADD_TASK',
    DELETE_TASK: 'DELETE_TASK',
    UPDATE_TASK: 'UPDATE_TASK'
};

const dispatcher = {
    inputTask: (task) => ({type: types.INPUT_TASK, payload: task}),
    addTask: (task) => ({type: types.ADD_TASK, payload: task}),
    deleteTask: (taskId) => ({type: types.DELETE_TASK, payload: taskId}),
    updateTask: (taskId, task) => ({type: types.UPDATE_TASK, payload: {taskId, task}})
};

export default {
    types,
    dispatcher
}