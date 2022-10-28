import { useTypedSelector } from '../../hooks/useTypedSelector';
import './registration.scss';

export const RegistrationErrorMessage = () => {
  const { errorText } = useTypedSelector(({ login }) => login);
  return <div className="registration_error_message">{errorText}</div>;
};
