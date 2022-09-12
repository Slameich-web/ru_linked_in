import { Dispatch, SetStateAction } from 'react';

export interface RegistrationButtonProps {
  repeatPassword: string;
}
export interface RegistrationInputsProps {
  setRepeatPassword: Dispatch<SetStateAction<string>>;
}
export interface RegistrationResponse {
  token: string;
}
