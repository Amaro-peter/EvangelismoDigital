import "./css/ArticleTitle.css"
const ArticleTitle = ({title} : { title : string}) => {
    return(<>
        <div className = "title"> 
            {title}
        </div>
    </>)
}

export default ArticleTitle;