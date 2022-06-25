import { initialStateInterface, LoginAction } from '../types';
import { LoginActionTypes } from '../variables';

const initialState: initialStateInterface = {
  isLogin: false,
  login: '',
  password: '',
  error: false,
  isLoading: false,
  errorText: '',
};

export const loginReducer = (
  state = initialState,
  action: LoginAction
): initialStateInterface => {
  switch (action.type) {
    case LoginActionTypes.ENTER:
      return { isLogin: true, isLoading: false, error: false };
    case LoginActionTypes.CHANGE_LOGIN:
      return { ...state, login: action.payload };
    case LoginActionTypes.CHANGE_PASSWORD:
      return { ...state, password: action.payload };
    default:
      return state;
  }
};
