import React from 'react';
import { ArcticlePlaceholder } from './components/Article_placeholder';
import './components/Article_placeholder.scss';
import './index.scss';
import { ArticleHeader } from './components/Header';
import { useState } from 'react';

const dataForArticle: any = [
  {
    title: 'Статья 1',
    description: 'Статья номер1',
    image: '30',
    likes: 30,
  },
  {
    title: 'Статья 2',
    description: 'Как первая, только вторая',
    image: '30',
    likes: 50,
  },
  {
    title: 'Статья 3',
    description: 'Уже третья статья!',
    image: '30',
    likes: 24,
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
