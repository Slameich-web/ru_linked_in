import React from 'react';
import { ArcticlePlaceholder } from './components/ArticlePlaceholder';
import './Article.scss';
import { ArticleHeader } from './components/Header';
import { useState } from 'react';

const dataForArticle = [
  {
    title: 'Статья 1',
    description: 'Статья номер1',
    image: '30',
    likes: 30,
    author: 'Denis'
  },
  {
    title: 'Статья 2',
    description: 'Как первая, только вторая',
    image: '30',
    likes: 50,
    author: 'Alex'
  },
  {
    title: 'Статья 3',
    description: 'Уже третья статья!',
    image: '30',
    likes: 24,
    author: 'Chel'
  }
];

export const Article = () => {
  return (
    <div className="article_body">
      <ArticleHeader />
      <div className="article_placeholder">
        {dataForArticle.map((item, index) => {
          return (
            <ArcticlePlaceholder
              key={index}
              title={item.title}
              description={item.description}
              image={item.image}
              likes={item.likes}
              author={item.author}
            />
          );
        })}
      </div>
    </div>
  );
};
