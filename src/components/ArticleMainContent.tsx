import "./css/ArticleMainContent.css";
import ArticleTitle from "./ArticleTitle";
import ArticleText from "./ArticleText";
import { articles } from "../pages/Articles";

type Article = (typeof articles)[number];

const ArticleMainContent = ({ article }: { article: Article }) => {
  return (
    <div className="main-content">
      <ArticleTitle title={article.title} />
      <ArticleText sections={article.text} />
    </div>
  );
};

export default ArticleMainContent;