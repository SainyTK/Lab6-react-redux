import githubAction from './action';

const { types } = githubAction;

const initialState = {
    githubData: null
}

function githubReducer(state = initialState, action) {
    switch(action.type) {
        case types.FETCH_SUCCESS:
            return {
                ...state,
                githubData: action.payload
            }
        default:
            return state;
    }
}

export default githubReducer;