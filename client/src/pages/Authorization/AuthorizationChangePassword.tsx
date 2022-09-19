import { Link } from 'react-router-dom';

export const AuthorizationChangePassword = () => {
  return (
    <div className="authorization_change_password_wrapper">
      <Link className="authorization_change_password" to="/recover_password">
        Восстановить пароль
      </Link>
    </div>
  );
};
