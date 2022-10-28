import { useTypedSelector } from '../../hooks/useTypedSelector';

export const AuthorizationErrorMessage = () => {
  const { errorText } = useTypedSelector(({ login }) => login);
  return <div className="authorization_error_message">{errorText}</div>;
};
