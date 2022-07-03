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
      return { ...state, isLogin: true, isLoading: false, error: false };
    case LoginActionTypes.ENTER_ERROR:
      return {
        ...state,
        isLogin: false,
        isLoading: false,
        error: true,
        errorText: action.payload,
      };
    case LoginActionTypes.CHANGE_LOGIN:
      return { ...state, login: action.payload };
    case LoginActionTypes.CHANGE_PASSWORD:
      return { ...state, password: action.payload };
    case LoginActionTypes.LOGIN_LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};
export const LoginSuccsess = () => ({
  type: LoginActionTypes.ENTER,
});
export const LoginError = (error: string) => ({
  type: LoginActionTypes.ENTER_ERROR,
  payload: error,
});
export const ChangeIsLoading = (isLoading: boolean) => ({
  type: LoginActionTypes.LOGIN_LOADING,
  payload: isLoading,
});
export const LogininputChange = (event: string) => ({
  type: LoginActionTypes.CHANGE_LOGIN,
  payload: event,
});
export const passwordinputChange = (event: string) => ({
  type: LoginActionTypes.CHANGE_PASSWORD,
  payload: event,
});
