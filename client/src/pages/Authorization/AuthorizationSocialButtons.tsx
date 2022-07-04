import React from 'react';
export const AuthorizationSocialButtons = () => {
  return (
    <div className='authorization_social_buttons'>
      <a href='#'>
        <button className='authorization_social_button authorization_social_first_item'>
          <span>G</span>
        </button>
      </a>

      <a href='#'>
        <button className='authorization_social_button'>
          <span>F</span>
        </button>
      </a>

      <a href='#'>
        <button className='authorization_social_button'>
          <span>Y</span>
        </button>
      </a>

      <a href='#'>
        <button className='authorization_social_button authorization_social_last_item'>
          <span>V</span>
        </button>
      </a>
    </div>
  );
};
