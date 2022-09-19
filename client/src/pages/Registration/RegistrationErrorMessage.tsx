import { useTypedSelector } from '../../hooks/useTypedSelector';
import './registration.scss';

export const RegistrationErrorMessage = () => {
  const { errorText } = useTypedSelector((state) => state.login);
  return <div className="registration_error_message">{errorText}</div>;
};
