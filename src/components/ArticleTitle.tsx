import "./css/ArticleTitle.css"
const ArticleTitle = ({title, image="/default.jpg"} : { title : string, image : string}) => {
    return(<>
        <div className="article-title">
             <img src={image}/>
            <span>{title}</span>
        </div>
    </>)
}

export default ArticleTitle;