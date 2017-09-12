import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import Todo from './app/components/Todo'

const App = (props) => {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
};

export default App;
