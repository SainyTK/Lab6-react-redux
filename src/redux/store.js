import { combineReducers, createStore } from 'redux';
import CounterReducer from './counter/reducer';
import TaskReducer from './task/reducer';

const reducers = combineReducers({
    counter: CounterReducer,
    task: TaskReducer
});

export default createStore(reducers);