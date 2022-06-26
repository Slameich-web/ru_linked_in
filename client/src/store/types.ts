import { LoginActionTypes } from './variables';

export interface ChangeLoginAction {
  type: LoginActionTypes.CHANGE_LOGIN;
  payload: string;
}
export interface EnterErrorAction {
  type: LoginActionTypes.ENTER_ERROR;
  payload: string;
}
export interface EnterAction {
  type: LoginActionTypes.ENTER;
  payload: string;
}

export interface ChangePasswordAction {
  type: LoginActionTypes.CHANGE_PASSWORD;
  payload: string;
}
export type LoginAction =
  | ChangePasswordAction
  | EnterAction
  | ChangeLoginAction
  | EnterErrorAction;

export interface initialStateInterface {
  isLogin: boolean;
  login?: string;
  password?: string;
  error: boolean;
  isLoading: boolean;
  errorText?: string;
}
