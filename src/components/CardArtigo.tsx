import styles from "./css/CardArtigo.module.css";

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
            <img 
                src={imgpath} 
                className={`img-fluid ${styles.cardArtigoImg}`}
                alt={title}
            />
        </div>
        <div className={styles.cardContent}>
            <h2>{title}</h2>
            <p className="pre">{pre}</p>  
        </div>
    </>)
}

export default CardArtigo;