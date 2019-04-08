import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import CounterReducer from './counter/reducer';
import TaskReducer from './task/reducer';
import GithubReducer from './github/reducer';
import BearReducer from './bear/reducer';

const reducers = combineReducers({
    counter: CounterReducer,
    task: TaskReducer,
    github: GithubReducer,
    bear: BearReducer
});

export default createStore(reducers, applyMiddleware(thunk));