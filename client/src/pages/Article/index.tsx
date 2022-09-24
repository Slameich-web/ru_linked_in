import React from 'react';
import { ArcticlePlaceholder } from './components/Article_placeholder';
import './Article_placeholder.scss';
import { ArticleHeader } from './components/Header';
export const Article = () => {
  return (
    <div>
      <ArticleHeader />
      <div className='article_placeholder'>
        <ArcticlePlaceholder
          title='Article 1'
          style='article_placeholder__basic'
          author='Denis'
        />
        <ArcticlePlaceholder
          title='Article 2'
          style='article_placeholder__basic'
        />
        <ArcticlePlaceholder
          title='Article 3'
          style='article_placeholder__basic'
        />
      </div>
    </div>
  );
};
