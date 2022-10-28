import { ArticleHeader } from './Header';
export const ArticleText = ({ children, text, title, description }: any) => {
  return (
    <div>
      <ArticleHeader />
      <div className="article_text_page">
        <h1 className="title">Статья 1</h1>
        <h2> Автор: ыдлватлдыьва Дата:пока </h2>
        <h4 className="description">Первая статья</h4>
        <h3 className="text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore perferendis magni numquam earum doloremque
          ab cum sequi cupiditate aliquam commodi repellat, veritatis praesentium pariatur quis accusantium porro sint
          ullam vel?
        </h3>
      </div>
    </div>
  );
};
