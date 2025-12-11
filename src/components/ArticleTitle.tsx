import styles from "./css/ArticleTitle.module.css"

interface ArticleTitleProps {
    title: string;
    imgArticle: string;
}

const ArticleTitle = ({title, imgArticle} : ArticleTitleProps) => {
    return(<>
        <div className={styles.articleTitle}>
            <img src={imgArticle} alt={title}/>
            <h1>{title}</h1>
        </div>
    </>)
}

export default ArticleTitle;