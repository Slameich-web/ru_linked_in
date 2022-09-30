import React from 'react';
import { ArcticlePlaceholder } from './components/Article_placeholder';
import './Article_placeholder.scss';
import './index.scss';
import { ArticleHeader } from './components/Header';
import { useState } from 'react';

const dataForArticle: any = [
  {
    title: 'First title',
    description: '30',
    image: '30',
    likes: 30,
  },
  {
    title: '30',
    description: '30',
    image: '30',
    likes: 30,
  },
  {
    title: '30',
    description: '30',
    image: '30',
    likes: 30,
  },
];

export const Article = () => {
  return (
    <div className='article_body'>
      <ArticleHeader />
      <div className='article_placeholder'>
        {dataForArticle.map((item: any, index: any) => {
          return (
            <ArcticlePlaceholder
              key={index}
              title={item.title}
              description={item.description}
              image={item.image}
              likes={item.likes}
            />
          );
        })}
      </div>
    </div>
  );
};
