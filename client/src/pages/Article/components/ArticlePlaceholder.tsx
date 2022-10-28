import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArcticlePlaceholderProps } from '../types';

const arrow = (clickFunction: { (): void }) => {
  return () => {
    clickFunction();
  };
};

export const ArcticlePlaceholder = ({ title, author, likes, views, description }: ArcticlePlaceholderProps) => {
  const [isLiked, setIsLiked] = useState<boolean>(true);
  const [likeCount, setLikeCount] = useState<number>(likes);
  const activeClass = isLiked ? 'heart_inactive' : 'heart_active';
  const likeClick = () => {
    setIsLiked(false);
    setLikeCount(likeCount + 1);
  };
  const likeClickToInactive = () => {
    setIsLiked(true);
    setLikeCount(likeCount - 1);
  };
  return (
    <div className="article_placeholder__basic">
      <div>
        <span className="title">
          <Link to="/article_text" className="link">
            {title}
          </Link>
        </span>
      </div>
      <div>
        <span className="article_content">{description}</span>
      </div>
      <div className="article_footer">
        <span className="article_footer_text">Автор: {author}</span>
        <div className="article_footer_views_and_likes_container">
          <span className="article_footer_like_count">
            <span className={activeClass} onClick={isLiked ? arrow(likeClick) : arrow(likeClickToInactive)}>
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
