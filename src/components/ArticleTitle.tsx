import "./css/ArticleTitle.css"

interface ArticleTitleProps {
    title: string;
    imgArticle: string;
}

const ArticleTitle = ({title, imgArticle} : ArticleTitleProps) => {
    return(<>
        <div className="article-title">
            <img src={imgArticle} alt={title}/>
            <span>{title}</span>
        </div>
    </>)
}

export default ArticleTitle;