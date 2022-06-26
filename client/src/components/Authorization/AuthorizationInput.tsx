import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
interface AuthorizationInputProps {
  title: string;
  handler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const AuthorizationInput = ({
  title,
  handler,
}: AuthorizationInputProps) => {
  const { error } = useTypedSelector((state) => state.login);
  return (
    <>
      <div className='authorization_input_title'>{title}</div>
      <div>
        <input
          className={`authorization_input ${
            error
              ? 'authorization_input_border_error'
              : 'authorization_input_border'
          }`}
          onChange={(e) => handler(e)}
        />
      </div>
    </>
  );
};
