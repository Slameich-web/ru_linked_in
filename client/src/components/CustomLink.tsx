import { Link, useMatch } from 'react-router-dom';
import { CustomLinkProps } from './types';

export const CustomLink = ({ children, to, className, ...props }: CustomLinkProps) => {
  const match = useMatch(to);
  const classNames = className ? className : '';
  return (
    <Link
      className={match ? `custom_link active_custom_link ${classNames}` : `custom_link ${classNames}`}
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
};
