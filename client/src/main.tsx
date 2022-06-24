import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import './index.scss';

export interface initialStateInterface {
  IsLogin: boolean;
  login: string;
  password: string;
}

const initialState: initialStateInterface = {
  IsLogin: false,
  login: '',
  password: '',
};

const loginReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, IsLogin: true };
    case 'CHANGE_LOGIN':
      return { ...state, login: action.payload };
    case 'CHANGE_PASSWORD':
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

const store = createStore(loginReducer);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
