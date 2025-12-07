import './css/Article.css';
import { useParams } from 'react-router-dom';
import  Invitation from '../components/Invitation';
import ArticleMainContent from "../components/ArticleMainContent";
import FormContatoArticle from "../components/FormContatoArticle";
import { useEffect, useState } from 'react';
import { Article } from '../interface/Articles';
import SEO from '../components/SEO';



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
        const articleModule = await import(`../articleContent/articlesData/${artigoId}.ts`);
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

  const descriptionMeta = article.text[0]?.paragraph ? article.text[0].paragraph.slice(0, 160) + "..." : "Artigo sobre fé e cristianismo.";

  return (
    <>
      <SEO
        title={article.title}
        description={descriptionMeta}
        image={article.imgMainCoverPage || article.imgArticle}
        url={`/artigo/${artigoId}`}
        ogType="article"
        schemaType="Article"
      />

      <div className='container mt-5'>
        <ArticleMainContent article={article}/>
      </div>
      <div className="mt-5 jumbotron jumbotron-fluid invitation">
        <Invitation chamado={article.chamado}/>
      </div>
      <div className='container form'>
        <FormContatoArticle/>
      </div>

    </>
  );
};

export default ArticlePage;