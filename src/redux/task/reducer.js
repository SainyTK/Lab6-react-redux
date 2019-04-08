import taskAction from './action';

const actionTypes = taskAction.types;

const initialState = {
    task: '',
    taskList: []
}

function TaskReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.INPUT_TASK:
            return {
                ...state,
                task: action.payload
            }
        case actionTypes.UPDATE_TASKLIST:
            return {
                ...state,
                taskList: action.payload
            }
        default:
            return state;
    }
}

export default TaskReducer;