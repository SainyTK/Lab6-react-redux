import React, { Component } from 'react';
import TaskList from './containers/TaskList';
import InputTask from './containers/InputTask';
import Github from './containers/Github';
import Bear from './containers/Bear';
import store from './redux/store';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <InputTask/>
        <TaskList/>
        <Github/>
        <Bear/>
      </Provider>
    );
  }
}

export default App;
