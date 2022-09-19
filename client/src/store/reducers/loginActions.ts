import { LoginActionTypes } from '../variables';

export const LoginSuccsess = () => ({
  type: LoginActionTypes.ENTER
});
export const LoginError = (error: string) => ({
  type: LoginActionTypes.ENTER_ERROR,
  payload: error
});
export const RegistrationError = (error: string) => ({
  type: LoginActionTypes.ENTER_ERROR,
  payload: error
});
export const ChangeIsLoading = (isLoading: boolean) => ({
  type: LoginActionTypes.LOGIN_LOADING,
  payload: isLoading
});
export const LogininputChange = (event: string) => ({
  type: LoginActionTypes.CHANGE_LOGIN,
  payload: event
});
export const passwordinputChange = (event: string) => ({
  type: LoginActionTypes.CHANGE_PASSWORD,
  payload: event
});
export const emailinputChange = (event: string) => ({
  type: LoginActionTypes.CHANGE_EMAIL,
  payload: event
});
