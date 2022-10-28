import { ArcticlePlaceholder } from './components/ArticlePlaceholder';
import './Article.scss';
import { ArticleHeader } from './components/Header';

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
        {dataForArticle.map(({ title, description, image, likes, author }, index) => {
          return (
            <ArcticlePlaceholder
              key={index}
              title={title}
              description={description}
              image={image}
              likes={likes}
              author={author}
            />
          );
        })}
      </div>
    </div>
  );
};
