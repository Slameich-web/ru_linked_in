import React from 'react';
import { RequireAuth } from '../../../hoc/RequireAuth';
import './Article_footer.scss';
import '../Article_placeholder.scss';
import { useState } from 'react';

export const ArcticlePlaceholder = ({
  children,
  title,
  style,
  author,
  likes,
  views,
  text,
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
        <span>{title}</span>
      </div>
      <div>
        <span className='article_content'>{text}</span>
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
