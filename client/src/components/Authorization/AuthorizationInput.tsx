import React from 'react';
import { useDispatch } from 'react-redux';

interface AuthorizationInputProps {
  title: string;
  handler: () => void;
}

export const AuthorizationInput = ({
  title,
  handler,
}: AuthorizationInputProps) => {
  return (
    <>
      <div className='authorization_input_title'>{title}</div>
      <div className='authorization_input'>
        <input onChange={() => handler()} />
      </div>
    </>
  );
};
