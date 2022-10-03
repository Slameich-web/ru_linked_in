import React from 'react';
import { Link } from 'react-router-dom';
export const ArticleHeader = () => {
  return (
    <div className="article_header">
      <span className="article_logo">
        <Link to="/article" className="article_header_link">
          Статьи
        </Link>
      </span>
    </div>
  );
};
