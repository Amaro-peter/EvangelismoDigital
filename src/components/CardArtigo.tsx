import React from "react"
import "./css/CardArtigo.css"

function CardArtigo({
    imgpath = "#",
    title,
    pre
}:{
    imgpath: string,
    title: string,
    pre: string
}){

    return (<>
        <div>
            <img src={imgpath}/>
        </div>
        <div>
            <h2>{title}</h2>
            <p className="pre">{pre}</p>  
        </div>
    </>)
}

export default CardArtigo