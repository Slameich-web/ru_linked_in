import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { AuthorizationInputProps } from '../../store/types';
import './AuthorizationInput.scss';
export const AuthorizationInput = ({
  title,
  handler,
  type,
}: AuthorizationInputProps) => {
  const { error } = useTypedSelector((state) => state.login);
  return (
    <div className='authorization_input_wrapper'>
      <div className='authorization_input_title'>{title}</div>
      <div>
        <input
          type={type}
          className={`authorization_input ${
            error
              ? 'authorization_input_border_error'
              : 'authorization_input_border'
          }`}
          onChange={(e) => handler(e)}
        />
      </div>
    </div>
  );
};
