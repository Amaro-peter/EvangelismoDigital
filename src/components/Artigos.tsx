import styles from './css/Artigos.module.css';
import cardStyles from './css/CardArtigo.module.css';
import CardArtigo from "./CardArtigo.tsx";
import { articlesIndex } from '../articleContent/ArticlesIndex.ts';
import { useNavigate } from 'react-router-dom';

const Artigos = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <h1 className={styles.title}>Artigos</h1>
      <p className={styles.subtitle}>Clique para ler!</p>

      <div className="container-sm d-lg-flex align-items-between flex-wrap justify-content-between">
        {articlesIndex.map((artigo) => (
          <div 
            className={cardStyles.card}
            key={artigo.id}
            onClick={() => navigate(`/artigo/${artigo.id}`)}
          >
            <CardArtigo
              imgpath={artigo.imgpath || "default-image.jpg"}
              title={artigo.title}
              pre={artigo.pre || ""}
            />
          </div>
        ))}
      </div>   
    </>
  );
};

export default Artigos;