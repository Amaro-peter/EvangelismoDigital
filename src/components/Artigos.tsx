import './css/CardArtigo.css';
import './css/Artigos.css';
import CardArtigo from "./CardArtigo.tsx";
import { articlesIndex } from '../articleContent/ArticlesIndex.ts';
import { useNavigate } from 'react-router-dom';

const Artigos = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <h1 className="title">Artigos</h1>
      <p className='subtitle'>Clique para ler!</p>

      <div className="container-sm d-lg-flex align-items-between flex-wrap justify-content-between">
        {articlesIndex.map((artigo) => (
          <div 
            className="card" 
            key={artigo.id}
            style={{ cursor: 'pointer' }}
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