import bearAction from './action';

const { types } = bearAction;

const initialState = {
    bears: []
}

function bearReducer(state = initialState, action) {
    switch(action.type) {
        case types.GET_BEAR_SUCCESS: 
            return {
                ...state,
                bears: action.payload
            }
        case types.GET_BEAR_FAILED:
            return initialState;
        default: 
            return state;
    }
}

export default bearReducer;