import styles from './css/Article.module.css';
import { useParams } from 'react-router-dom';
import  Invitation from '../components/Invitation';
import ArticleMainContent from "../components/ArticleMainContent";
import FormContatoArticle from "../components/FormContatoArticle";
import { useEffect, useState } from 'react';
import { Article } from '../interface/Articles';
import SEO from '../components/SEO';
import FindNearestChurch from '../components/FindNearestChurch';



const ArticlePage = () => {
  const { artigoId } = useParams<{ artigoId: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if(!artigoId) {
      setError(true);
      setLoading(false);
      return;
    }

    const loadArticle = async () => {
    try {
      setLoading(true);
      const articles = import.meta.glob('../articleContent/articlesData/*.ts');
      const articleLoader = articles[`../articleContent/articlesData/${artigoId}.ts`];

      if (!articleLoader) {
        throw new Error("Article not found");
      }

      const articleModule = await articleLoader() as { default: Article };
      setArticle(articleModule.default);
      setLoading(false);
      } catch(err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    loadArticle();
  }, [artigoId]);

  if(loading) {
    return (
      <>
        <div className="container mt-5 text-center">
          <div className="spinner-border" role="status">
          </div>
        </div>
      </>
    );
  }

  if(error || !article) {
    return (
      <div className="container mt-5">
        <h1>Página não encontrada</h1>
        <p>O artigo solicitado não existe.</p>
      </div>
    );
  }

  const descriptionMeta = article.text[0]?.paragraph 
    ? article.text[0].paragraph.slice(0, 155).trim() + (article.text[0].paragraph.length > 155 ? '...' : '')
    : "Artigo sobre fé, esperança e cristianismo no mundo digital.";

  return (
    <>
      <SEO
        title={article.title}
        description={descriptionMeta}
        image={article.imgMainCoverPage || article.imgArticle}
        url={`/artigo/${artigoId}`}
        ogType="article"
        schemaType="Article"
        datePublished={article.datePublished}
        dateModified={article.dateModified}
        author={article.author}
        imageAlt={article.imgAlt || article.title}
      />

      <div className='container mt-5'>
        <ArticleMainContent article={article}/>
      </div>
      <div className={`mt-5 jumbotron jumbotron-fluid ${styles.invitation}`}>
        <Invitation chamado={article.chamado}/>
      </div>
      <div className='container form'>
        <FormContatoArticle/>
      </div>
      <div className='container mt-5'>
        <FindNearestChurch />
      </div>
    </>
  );
};

export default ArticlePage;