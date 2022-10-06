import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className="header_start">
      <span className="logo">ЛинкедИн для пацанов</span>
      <div className="buttons_container">
        <Link to="/authorization" className="link">
          <button className="log_sign">Войти</button>
        </Link>
        <Link to="/registration" className="link">
          <button className="log_sign">Регистрация</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
