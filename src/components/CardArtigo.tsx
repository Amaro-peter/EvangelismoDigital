import "./css/CardArtigo.css"

function CardArtigo({
    imgpath = "default-image.jpg",
    title,
    pre
}:{
    imgpath: string,
    title: string,
    pre: string
}){

    return (<>
        <div>
            <img src={imgpath} className="img-fluid card-artigo-img" alt={title}/>
        </div>
        <div>
            <h2>{title}</h2>
            <p className="pre">{pre}</p>  
        </div>
    </>)
}

export default CardArtigo