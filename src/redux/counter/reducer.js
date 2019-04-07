import counterAction from './action';

const actionTypes = counterAction.types;

const initialState = {
    count: 0
}

function CounterReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.ADD:
            return {
                ...state,
                count: state.count + 1
            }
        case actionTypes.SUBSTRACT: {
            return {
                ...state,
                count: state.count - 1
            }
        }
        default:
            return state;
    }
}

export default CounterReducer;