import React from 'react';
import { useDispatch } from 'react-redux';

interface AuthorizationInputProps {
  title: string;
}

export const AuthorizationInput = ({ title }: AuthorizationInputProps) => {
  const dispatch = useDispatch();
  const handleInput = () => {
    dispatch({ type: 'CHANGE_LOGIN' });
  };
  return (
    <>
      <div className='authorization_input_title'>{title}</div>
      <div className='authorization_input'>
        <input onChange={() => handleInput()} />
      </div>
    </>
  );
};
