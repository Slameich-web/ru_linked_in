import React from 'react';
import { RequireAuth } from '../../../hoc/RequireAuth';
import './Article_placeholder.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
export const ArcticlePlaceholder = ({
  children,
  title,
  style,
  author,
  likes,
  views,
  text,
  description,
}: any) => {
  const [isLiked, setIsLiked] = useState<boolean>(true);
  const [likeCount, setLikeCount] = useState<number>(likes);
  const likeClick = () => {
    return setIsLiked(false), setLikeCount(likeCount + 1);
  };
  const likeClickToInactive = () => {
    return setIsLiked(true), setLikeCount(likeCount - 1);
  };
  return (
    <div className='article_placeholder__basic'>
      <div>
        <span className='title'>
          <Link to='/article_text' className='link'>
            {title}
          </Link>
        </span>
      </div>
      <div>
        <span className='article_content'>{description}</span>
      </div>
      <div className='article_footer'>
        <span className='article_footer_text'>Автор: {author}</span>
        <div className='article_footer_views_and_likes_container'>
          <span className='article_footer_like_count'>
            <span
              className={isLiked ? 'heart_inactive' : 'heart_active'}
              onClick={
                isLiked ? () => likeClick() : () => likeClickToInactive()
              }
            >
              &hearts;
            </span>{' '}
            Лайки: {likeCount}
          </span>
          <span>Просмотры: {views}</span>
        </div>
      </div>
    </div>
  );
};
