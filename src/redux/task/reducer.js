import taskAction from './action';

const actionTypes = taskAction.types;

const initialState = {
    task: '',
    taskList: []
}

let taskList = [];

function TaskReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.INPUT_TASK:
            return {
                ...state,
                task: action.payload
            }
        case actionTypes.ADD_TASK:
            taskList = [...state.taskList];
            taskList.push({
                id: taskList.length,
                task: action.payload
            });
            return {
                ...state,
                taskList
            }
        case actionTypes.DELETE_TASK:
            taskList = [...state.taskList].filter((task) => task.id !== +action.payload);
            return {
                ...state,
                taskList
            }
        case actionTypes.UPDATE_TASK:
            taskList = [...state.taskList];
            const task = taskList.find((task) => task.id === +action.payload.taskId)
            task.task = action.payload.task.task;
            taskList[action.payload.taskId] = task;
            return {
                ...state,
                taskList
            }
        default:
            return state;
    }
}

export default TaskReducer;