import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux';
import { SocketContext, socket } from './store/socket/context'
import store from './store/store';

ReactDOM.render(
  <>
    <Provider store={store} >
      <SocketContext.Provider value={socket}>
      <App />
      </SocketContext.Provider>
    </Provider>
  </>,
  document.getElementById('root')
);