import React, { Component } from 'react';
import Count from './containers/Count';
import TaskList from './containers/TaskList';
import InputTask from './containers/InputTask';
import store from './redux/store';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Count/>
        <InputTask/>
        <TaskList/>
      </Provider>
    );
  }
}

export default App;
