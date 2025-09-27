import "./css/ArticleMainContent.css";
import ArticleTitle from "./ArticleTitle";
import ArticleText from "./ArticleText";
import { Article } from "../interface/Articles";

const ArticleMainContent = ({ article }: { article: Article }) => {
  return (
    <div className="main-content">
      <ArticleTitle title={article.title} imgArticle={article.imgArticle} />
      <ArticleText sections={article.text} />
    </div>
  );
};

export default ArticleMainContent;