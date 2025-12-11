import styles from "./css/ArticleMainContent.module.css";
import ArticleTitle from "./ArticleTitle";
import ArticleText from "./ArticleText";
import { Article } from "../interface/Articles";

const ArticleMainContent = ({ article }: { article: Article }) => {
  return (
    <div className={styles.mainContent}>
      <ArticleTitle title={article.title} imgArticle={article.imgArticle} />
      <ArticleText sections={article.text} />
    </div>
  );
};

export default ArticleMainContent;