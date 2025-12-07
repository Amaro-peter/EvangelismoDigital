import "./css/ArticleTitle.css"

interface ArticleTitleProps {
    title: string;
    imgArticle: string;
}

const ArticleTitle = ({title, imgArticle} : ArticleTitleProps) => {
    return(<>
        <div className="article-title">
            <img src={imgArticle} alt={title}/>
            <h1>{title}</h1>
        </div>
    </>)
}

export default ArticleTitle;