import React from 'react';
import { Link, useMatch } from 'react-router-dom';

export interface CustomLinkProps {
  children: JSX.Element | JSX.Element[] | string;
  to: string;
  className?: string;
  props?: any;
}

export const CustomLink = ({
  children,
  to,
  className,
  ...props
}: CustomLinkProps) => {
  const match = useMatch(to);
  const classNames = className ? className : '';
  return (
    <Link
      className={
        match
          ? `custom_link active_custom_link ${classNames}`
          : `custom_link ${classNames}`
      }
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
};
