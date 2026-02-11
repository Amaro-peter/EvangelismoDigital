import styles from './css/Artigos.module.css';
import cardStyles from './css/CardArtigo.module.css';
import CardArtigo from "./CardArtigo.tsx";
import { articlesIndex } from '../articleContent/ArticlesIndex.ts';
import { useNavigate } from 'react-router-dom';
import { useState, useMemo } from 'react';

const Artigos = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const perPage = 6;

  const totalPages = Math.max(1, Math.ceil(articlesIndex.length / perPage));

  const paged = useMemo(() => {
    const start = (page - 1) * perPage;
    return articlesIndex.slice(start, start + perPage);
  }, [page]);

  const goto = (p: number) => setPage(Math.min(Math.max(1, p), totalPages));

  return (
    <>
      <h1 className={styles.title}>Artigos</h1>
      <p className={styles.subtitle}>Clique para ler!</p>

      <div className="container-sm d-lg-flex align-items-between flex-wrap justify-content-between">
        {paged.map((artigo) => (
          <div 
            className={cardStyles.card}
            key={artigo.id}
            onClick={() => navigate(`/artigo/${artigo.id}`)}
          >
            <CardArtigo
              imgpath={artigo.imgpath || "default-image.webp"}
              title={artigo.title}
              pre={artigo.pre || ""}
            />
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className={styles.paginationContainer}>
          <ul className="pagination">
            <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => goto(page - 1)}>Anterior</button>
            </li>
            {Array.from({ length: totalPages }).map((_, i) => (
              <li key={i} className={`page-item ${page === i + 1 ? 'active' : ''}`}>
                <button className="page-link" onClick={() => goto(i + 1)}>{i + 1}</button>
              </li>
            ))}
            <li className={`page-item ${page === totalPages ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => goto(page + 1)}>Próxima</button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Artigos;