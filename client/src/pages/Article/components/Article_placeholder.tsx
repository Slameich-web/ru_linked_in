import React from 'react';
import './Article_footer.scss';
export const ArcticlePlaceholder = ({
  children,
  title,
  style,
  author,
  ...props
}: any) => {
  return (
    <div className={style}>
      <div>
        <span>{title}</span>
      </div>
      <div className='article_footer'>
        <span className='article_footer_text'>Автор: {author}</span>
      </div>
    </div>
  );
};
